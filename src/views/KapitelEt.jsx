import React, { useState } from "react";
import Overskrift from "../components/Overskrift";
import Lydafspiller from "../components/Lydafspiller";
import Underoverskrift from "../components/Underoverskrift";

export default function KapitelEt() {
  const [navn, setNavn] = useState("");
  const [beskrivelse, setBeskrivelse] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [locked, setLocked] = useState(false); // State for at låse svar

  const handleSubmitClick = () => {
    if (navn.trim() === "" || beskrivelse.trim() === "") {
      alert("Begge felter skal udfyldes.");
      return;
    }
    setShowPopup(true);
  };

  const handleConfirm = () => {
    setShowPopup(false);
    setLocked(true); // Lås svar efter aflevering
    alert("Din besvarelse er afleveret og kan ikke ændres.");
  };

  const handleCancel = () => {
    setShowPopup(false);
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
          className="border w-full mb-[10%] p-4"
          value={navn}
          onChange={(e) => setNavn(e.target.value)}
          disabled={locked} // Lås input hvis afleveret
        />
      </aside>
      <Underoverskrift tekst={"Hvordan vil du beskrive hovedpersonen?"} />
      <aside className="mx-[12.5%]">
        <textarea
          required
          className="w-full h-40 border p-4 resize-none"
          placeholder="Skriv din besvarelse her..."
          value={beskrivelse}
          onChange={(e) => setBeskrivelse(e.target.value)}
          disabled={locked} // Lås textarea hvis afleveret
        ></textarea>
      </aside>
      <aside className="flex justify-center mt-[10%]">
        <button
          type="button"
          className="text-2xl border px-6 py-1 w-fit mb-3"
          onClick={handleSubmitClick}
          disabled={locked} // Deaktiver knappen hvis afleveret
        >
          AFLEVER
        </button>
      </aside>

      {showPopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          aria-modal="true"
          role="dialog"
        >
          <div className="bg-white p-8 rounded-lg max-w-sm mx-4 text-center">
            <p className="mb-6 text-lg">
              Er du sikker på, at du vil aflevere?
            </p>
            <div className="flex justify-center gap-6">
              <button
                className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
                onClick={handleConfirm}
              >
                AFLEVER
              </button>
              <button
                className="bg-gray-300 px-6 py-2 rounded hover:bg-gray-400"
                onClick={handleCancel}
              >
                TILBAGE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
