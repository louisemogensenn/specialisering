import React, { useState, useRef, useEffect } from "react";

export default function Sorter() {
  const [aaben, setAaben] = useState(false); // Et usestate-hook, der definerer, at dropdown-menuen er lukket i starten
  const [valgt, setValgt] = useState(null); // Et usesteate-hook, der definerer, at der ikke er valgt nogen sortering i starten
  const dropdownRef = useRef(null); // En useRef-hook, der bruges til at referere til dropdown-menuen, så jeg kan tjekke, om der er klikket udenfor den

  // Luk dropdown ved klik udenfor
  useEffect(() => { // Denne effekt kører én gang - når komponenten er placeret
    function klikUdenfor(klik) { // Når effekten kører, køres en funktion, klikUdenfor, der tager et klik som parameter
      if (dropdownRef.current && !dropdownRef.current.contains(klik.target)) { //Hvis dropdownRef.current er defineret og klik.target (det element, der er klikket på) ikke (med !) er inde i dropdownRef.current
        setAaben(false); // Så skal setAaben sættes til false, hvilket lukker dropdown-menuen
      }
    }

    document.addEventListener("mousedown", klikUdenfor); //Der tilføjes en event listener til dokumentet, der lytter efter mousedown-begivenheder og kører klikUdenfor-funktionen, når der klikkes
    return () => document.removeEventListener("mousedown", klikUdenfor); // Når komponenten fjernes, fjernes event listeneren også
  }, []); // Tom array som anden parameter sikrer, at effekten kun kører én gang ved placering af komponenten

  function vaelgSortering(vaerdi) {
    setValgt(vaerdi); // Denne funktion sætter den valgte sortering til den værdi, der er valgt
    setAaben(false); // Lukker dropdown-menuen, når der er valgt en sortering
  }

  const rydValg = () => { //En funktion, rydValg, der rydder det valgte valg
    setValgt(null); // Sætter valgt til null, hvilket betyder, at der ikke er valgt nogen sortering
    setAaben(false); // Lukker dropdown-menuen, når der er ryddet valg
  };

  const valgmuligheder = ["0. - 4. klasse", "5. - 9. klasse", "Historie og Samfund", "Matematik og Logik", "Litteratur og Filosofi"]; // Et array med de forskellige sorteringsmuligheder, der kan vælges i dropdown-menuen

  return (
    <aside className="flex justify-center mt-5 mb-12"> {/* En aside-komponent, der centrerer indholdet og giver margin-top og margin-bottom */}
      <section ref={dropdownRef}> {/* En section, der refereres til af dropdownRef, så jeg kan tjekke, om der er klikket udenfor denne section */}
        {/* En knap, der åbner dropdown-menuen */}
        <button 
          onClick={() => setAaben(!aaben)} // Værdien for aaben skifter ved setAaben ved klik til det modsatte af dens nuværende værdi
          className="flex gap-2 px-4 py-2 border md:px-6 md:py-3" // Knapstilen, der giver padding og border. På medium skærme (md) er padding større
        >
          {valgt ? valgt : "Sorter"} {/* Hvis der er valgt en sortering, vises den valgte sortering - ellers vises teksten "Sorter" */}
        </button>

        {aaben && ( // Hvis aaben er true, vises dropdown-menuen
          <section className="absolute z-10 mt-2 left-1/2 -translate-x-1/2 w-48 bg-white border"> {/* En section, der fungerer som dropdown-menuen, der er placeret centralt under knappen */}
            {valgmuligheder.map((valg) => ( // Gennemløber valgmulighederne og opretter et label for hver mulighed med .map
              <label
                key={valg} // Unik nøgle for hvert label baseret på valgmuligheden
                className="flex items-center gap-2 text-sm px-2 py-1" // Stilen for hvert label, der giver padding og centrerer indholdet
              >
                <input
                  type="radio" // Inputfelt af typen radio, der giver mulighed for at vælge én sortering ad gangen
                  name="sortering" // Navnet på inputfeltet, så kun én kan vælges ad gangen
                  value={valg} // Værdien for inputfeltet, der svarer til den valgte sortering
                  onChange={() => vaelgSortering(valg)} // Når inputfeltet ændres, kaldes vaelgSortering-funktionen med den valgte sortering
                />
                {valg} {/* Viser teksten for den valgte sortering ved siden af inputfeltet */}
              </label>
            ))}
          </section>
        )}

        {/* "Ryd alle" vises kun, hvis der er valgt noget og hvis dropdown ikke er åben */}
        {valgt && !aaben && ( 
          <p onClick={rydValg}
          className="text-xs text-center underline"> {/* Teksten er 12px, midtercentreret og har en linje under sig */}
            &times; Ryd alle
          </p>
        )}
      </section>
    </aside>
  );
}
