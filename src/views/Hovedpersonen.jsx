import React, { useState } from "react";
import Overskrift from "../components/Overskrift";
import Lydafspiller from "../components/Lydafspiller";
import Underoverskrift from "../components/Underoverskrift";
import CallToActionKnap from "../components/CallToActionKnap";
import { useProgress } from "../context/ProgressContext";
import { useNavigate } from "react-router-dom"; // Importer useNavigate for at navigere til en anden side
import erDuSikker from "../assets/flotBrandCharacter.svg"; // Importerer et billede til popup
import character from "../assets/characterHovedperson.svg";

export default function Hovedpersonen() {
  const [navn, setNavn] = useState(""); // State for at gemme navnet på hovedpersonen - svar 1
  const [beskrivelse, setBeskrivelse] = useState(""); // State for at gemme beskrivelsen af hovedpersonen - svar 2
  const [visPopup, setVisPopup] = useState(false); // State for at styre visning af popup
  const { faerdiggoerOpgaver, gemSvarData } = useProgress();
  const navigate = useNavigate();
  
  const handleFinalSubmit = () => {
    gemSvarData("hovedpersonen", { navn, beskrivelse }); // Gemmer begge svar i progress context
    faerdiggoerOpgaver("hovedpersonen"); // Markerer opgaven som færdig i progress context, hvor hovedpersonen tilfføjes til færdige opgaver
    navigate("/point"); // Navigerer brugeren til point siden efter aflevering
  };

  const handleSubmitClick = () => { // Når brugeren trykker på "AFLEVER" knappen
    if (navn.trim() === "" || beskrivelse.trim() === "") {
      // Tjek om felterne er udfyldt og fjerner eventuelle mellemrum
      alert("Begge felter skal udfyldes."); // Hvis de ikke begge er udfyldt vises en alert
      return; // Stop funktionen hvis felterne ikke er udfyldt
    }
    setVisPopup(true); // Vis popup for bekræftelse af aflevering, når begge felter er udfyldt
  };

  const handleCancel = () => { // Hvis brugeren trykker på afbryd
    setVisPopup(false); // Lukker popup uden at ændre noget
  };

  return (
    <>
      <Overskrift tekst={"HOVEDPERSONEN"} />
      <br />
      <Lydafspiller />
      <img src={character} alt="Brand Character" className="mx-auto w-[300px] md:w-[500px]"/>
      <h1 className="text-[20px] mb-[2%] mx-[12.5%] mt-[4%]">Opgave 1</h1> {/* teksten er 20px, mrgin-bottom er 2% af skærmen, margin-top er 4% af skærmen */}
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
          onChange={(e) => setBeskrivelse(e.target.value)} // Opdaterer state når input ændres. Dette sker ved, at e, der er et event-objekt, bruges til at hente den nuværende værdi af input-feltet med e.target.value
        ></textarea>
      </aside>
      <aside className="flex justify-center mt-[5%]">
        {" "}
        {/* Justerer knappen til at være centreret */}
        <CallToActionKnap tekst="AFLEVER" onClick={handleSubmitClick} />
        {/* Knap der kalder handleSubmitClick funktionen når den klikkes */}
      </aside>

      {visPopup && ( // Hvis der er en popup skal nedstående vises
        <aside
          className="fixed inset-0 flex items-center justify-center z-50"
          aria-modal="true"
          role="dialog"
        >
          <article className="themable p-8 rounded max-w-sm mx-4 text-center border">
          <img src={erDuSikker} alt="Din brand character" className="mx-auto"/>
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
