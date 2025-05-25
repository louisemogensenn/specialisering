import React, { useState } from "react";
import Overskrift from "../components/Overskrift";
import Lydafspiller from "../components/Lydafspiller";
import Underoverskrift from "../components/Underoverskrift";

export default function KapitelEt() {
  const [navn, setNavn] = useState(""); // State for at gemme navnet på hovedpersonen - svar 1
  const [beskrivelse, setBeskrivelse] = useState(""); // State for at gemme beskrivelsen af hovedpersonen - svar 2
  const [visPopup, setVisPopup] = useState(false); // State for at styre visning af popup
  const [locked, setLocked] = useState(false); // State for at låse svar
  const [afleveret, setAfleveret] = useState(false); // State for at holde styr på om opgaven er afleveret

  const handleSubmitClick = () => {
    if (navn.trim() === "" || beskrivelse.trim() === "") {
      // Tjek om felterne er udfyldt og fjerner eventuelle mellemrum
      alert("Begge felter skal udfyldes."); // Hvis de ikke begge er udfyldt vises en alert
      return; // Stop funktionen hvis felterne ikke er udfyldt
    }
    setVisPopup(true); // Vis popup for bekræftelse af aflevering, når begge felter er udfyldt
  };

  const handleConfirm = () => {
    setLocked(true); // Lås felterne
    setAfleveret(true); // Skift popup-indhold fra spørgsmål til bekræftelse
  };

  const handleCancel = () => {
    setVisPopup(false); // Lukker popup uden at ændre noget
  };

  return (
    <>
      <Overskrift tekst={"Kapitel 1"} />
      <Lydafspiller />
      <h1 className="text-[20px] mb-[6%] mx-[12.5%] mt-[10%]">Opgave 1</h1>
      <Underoverskrift tekst={"Hvad hedder hovedpersonen?"} />
      <aside className="mx-[12.5%]">
        <input
          type="text"
          required
          placeholder="Skriv din besvarelse her..."
          className="border w-full mb-[10%] p-4 rounded" // Styles med kant, giver den lov til at fylde hele sin container, får en afstand på 10% til nedstående og har en padding på 16px
          value={navn}
          onChange={(e) => setNavn(e.target.value)} // Opdaterer state når input ændres. Dette sker ved, at e, der er et event-objekt, bruges til at hente den nuværende værdi af input-feltet med e.target.value
          disabled={locked} // Lås input hvis afleveret, så brugeren ikke kan ændre det. Dette sker ved at bruge locked state, der er sat til true, når afleveringen er bekræftet
        />
      </aside>
      <Underoverskrift tekst={"Hvordan vil du beskrive hovedpersonen?"} />
      <aside className="mx-[12.5%]">
        <textarea
          required
          className="w-full h-40 border p-4 resize-none rounded"
          placeholder="Skriv din besvarelse her..."
          value={beskrivelse}
          onChange={(e) => setBeskrivelse(e.target.value)}
          disabled={locked} // Lås textarea hvis afleveret
        ></textarea>
      </aside>
      <aside className="flex justify-center mt-[10%]">
        <button
          type="button"
          className="themable text-2xl border px-6 py-1 w-fit mb-3 rounded"
          onClick={handleSubmitClick}
          disabled={locked} // Deaktiver knappen hvis afleveret
        >
          AFLEVER
        </button>
      </aside>

      {visPopup && (
        <aside
          className="fixed inset-0 flex items-center justify-center z-50"
          aria-modal="true"
          role="dialog"
        >
          <article className="themable p-8 rounded max-w-sm mx-4 text-center border">
            {!afleveret ? (
              <>
                <p className="mb-6">
                  Er du sikker på, at du vil aflevere? <br /> Dit valg kan ikke
                  fortrydes
                </p>
                <section className="themable flex justify-center gap-6">
                  <button
                    type="button"
                    className="themable px-6 py-2 border rounded"
                    onClick={handleCancel}
                  >
                    TILBAGE
                  </button>
                  <button
                    type="button"
                    className="themable px-6 py-2 border rounded"
                    onClick={handleConfirm}
                  >
                    AFLEVER
                  </button>
                </section>
              </>
            ) : (
              <>
                <p className="mb-6">
                  Din besvarelse er afleveret og kan ikke ændres.
                </p>
                <button
                  type="button"
                  className="themable px-6 py-2 border rounded"
                  onClick={() => setVisPopup(false)}
                >
                  OK
                </button>
              </>
            )}
          </article>
        </aside>
      )}
    </>
  );
}
