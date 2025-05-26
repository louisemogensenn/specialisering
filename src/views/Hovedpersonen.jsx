import React, { useState } from "react";
import Overskrift from "../components/Overskrift";
import Lydafspiller from "../components/Lydafspiller";
import Underoverskrift from "../components/Underoverskrift";
import CallToActionKnap from "../components/CallToActionKnap";
import { useProgress } from "../context/ProgressContext";
import { useNavigate } from "react-router-dom"; // Importer useNavigate for at navigere til en anden side


export default function Hovedpersonen() {
  const [navn, setNavn] = useState(""); // State for at gemme navnet på hovedpersonen - svar 1
  const [beskrivelse, setBeskrivelse] = useState(""); // State for at gemme beskrivelsen af hovedpersonen - svar 2
  const [visPopup, setVisPopup] = useState(false); // State for at styre visning af popup
  const { completeTask } = useProgress();
  const navigate = useNavigate();

  const handleFinalSubmit = () => {
    completeTask("hovedpersonen", 100); // navn og point
    navigate("/point"); // evt. brug useNavigate()
  };

  const handleSubmitClick = () => {
    if (navn.trim() === "" || beskrivelse.trim() === "") {
      // Tjek om felterne er udfyldt og fjerner eventuelle mellemrum
      alert("Begge felter skal udfyldes."); // Hvis de ikke begge er udfyldt vises en alert
      return; // Stop funktionen hvis felterne ikke er udfyldt
    }
    setVisPopup(true); // Vis popup for bekræftelse af aflevering, når begge felter er udfyldt
  };

  const handleCancel = () => {
    setVisPopup(false); // Lukker popup uden at ændre noget
  };

  return (
    <>
      <Overskrift tekst={"HOVEDPERSONEN"} />
      <Lydafspiller />
      <h1 className="text-[20px] mb-[2%] mx-[12.5%] mt-[4%]">Opgave 1</h1>
      <Underoverskrift tekst={"Hvad hedder hovedpersonen?"} />
      <aside className="mx-[12.5%]">
        <input
          type="text" // Angiver at input-feltet er af typen tekst
          required // Angiver at input-feltet er påkrævet
          placeholder="Skriv din besvarelse her..." // Placeholder tekst der vises i input-feltet når det er tomt
          className="border w-full mb-[6%] p-4 rounded" // Styles med kant, giver den lov til at fylde hele sin container, får en afstand på 10% til nedstående og har en padding på 16px
          value={navn} // Sætter input-feltets værdi til navn state
          onChange={(e) => setNavn(e.target.value)} // Opdaterer state når input ændres. Dette sker ved, at e, der er et event-objekt, bruges til at hente den nuværende værdi af input-feltet med e.target.value
        />
      </aside>
      <Underoverskrift tekst={"Hvordan vil du beskrive hovedpersonen?"} />
      <aside className="mx-[12.5%]">
        <textarea
          required
          className="w-full h-40 border p-4 resize-none rounded" // Styles med kant, giver den lov til at fylde hele sin container, har en højde på 160px, padding på 16px og kan ikke ændres i størrelse
          placeholder="Skriv din besvarelse her..."
          value={beskrivelse} // Sætter textarea'ens værdi til beskrivelse state
          onChange={(e) => setBeskrivelse(e.target.value)}
        ></textarea>
      </aside>
      <aside className="flex justify-center mt-[5%]">
        {" "}
        {/* Justerer knappen til at være centreret */}
        <button
          type="button"
          className="themable text-2xl border px-6 py-1 w-fit mb-3 rounded" // Styler knappen med en tema, tekststørrelse på 2xl, kant, padding på 24px horisontalt og 4px vertikalt, giver den en bredde der passer til indholdet og en margen i bunden på 12px
          onClick={handleSubmitClick}
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
            <p className="mb-6">
              Er du sikker på, at du vil aflevere? <br /> Dit valg kan ikke
              fortrydes.
            </p>
            <section className="flex justify-center gap-6">
              <CallToActionKnap tekst={"TILBAGE"} onClick={handleCancel} />
              <CallToActionKnap tekst={"AFLEVER"} onClick={handleFinalSubmit}/>
            </section>
          </article>
        </aside>
      )}
    </>
  );
}
