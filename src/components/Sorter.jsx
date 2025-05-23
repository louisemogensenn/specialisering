import React, { useState, useRef, useEffect } from "react";

export default function Sorter() {
  const [aaben, setAaben] = useState(false);
  const [valgt, setValgt] = useState(null); // ingen valgt i starten
  const dropdownRef = useRef(null);

  // Luk dropdown ved klik udenfor
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAaben(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const vælgSortering = (værdi) => {
    setValgt(værdi);
    setAaben(false);
  };

  const rydValg = () => {
    setValgt(null);
    setAaben(false);
  };

  const valgmuligheder = ["Nyeste", "Ældste", "Afsluttede"];

  return (
    <aside className="flex justify-center mt-5 mb-12">
      <div ref={dropdownRef}>
        <button
          onClick={() => setAaben(!aaben)} // Værdien for aaben skifter ved setAaben ved klik til det modsatte af dens nuværende værdi
          className="flex gap-2 px-4 py-2 border md:px-6 md:py-3"
        >
          {valgt ? valgt.charAt(0).toUpperCase() + valgt.slice(1) : "Sorter"}
        </button>

        {aaben && (
          <div className="absolute z-10 mt-2 left-1/2 -translate-x-1/2 w-48 bg-white border">
            {valgmuligheder.map((valg) => (
              <label
                key={valg}
                className="flex items-center gap-2 text-sm px-2 py-1"
              >
                <input
                  type="radio"
                  name="sortering"
                  value={valg}
                  checked={valgt === valg}
                  onChange={() => vælgSortering(valg)}
                />
                {valg.charAt(0).toUpperCase() + valg.slice(1)}
              </label>
            ))}
          </div>
        )}

        {/* "Ryd alle" vises kun, hvis der er valgt noget */}
        {valgt && !aaben && (
          <div className="text-center">
            <button
              onClick={rydValg}
              className="text-xs"
            >
              &times; Ryd alle
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
