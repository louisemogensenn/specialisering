import React from "react";
import Overskrift from "../components/Overskrift";
import Beskrivelse from "../components/Beskrivelse";
import Underoverskrift from "../components/Underoverskrift";
import { useState } from "react"; // Importerer useState for at håndtere komponentens tilstand
import CallToActionKnap from "../components/CallToActionKnap"; // Importerer CallToActionKnap komponenten
import { useProgress } from "../context/ProgressContext"; // Importerer ProgressContext for at få adgang til opgaver
import { useNavigate } from "react-router-dom"; // Importer useNavigate for at navigere til en anden side

export default function Filosofi() {
  const [opgaveEt, setOpgaveEt] = useState(""); // State for at gemme brugerens svar på opgave 1
  const [opgaveTo, setOpgaveTo] = useState(""); // State for at gemme brugerens svar på opgave 2
  const [opgaveTre, setOpgaveTre] = useState(""); // State for at gemme brugerens svar på opgave 3
  const [opgaveFire, setOpgaveFire] = useState(""); // State for at gemme brugerens svar på opgave 4
  const [opgaveFem, setOpgaveFem] = useState(""); // State for at gemme brugerens svar på opgave 5
  const [visPopup, setVisPopup] = useState(false); // State for at styre visning af popup
  const { faerdiggoerOpgaver, gemSvarData } = useProgress();
  const navigate = useNavigate();

  const handleFinalSubmit = () => {
    gemSvarData("filosofi", { opgaveEt, opgaveTo, opgaveTre, opgaveFire, opgaveFem }); // Gemmer begge svar
    faerdiggoerOpgaver("filosofi");
    navigate("/point");
  };

  const handleSubmitClick = () => {
    if (
      opgaveEt === "" ||
      opgaveTo === "" ||
      opgaveTre === "" ||
      opgaveFire === "" ||
      opgaveFem === ""
    ) {
      // Tjek om felterne er udfyldt og fjerner eventuelle mellemrum
      alert("Alle felter skal udfyldes."); // Hvis de ikke begge er udfyldt vises en alert
      return; // Stop funktionen hvis felterne ikke er udfyldt
    }
    setVisPopup(true); // Vis popup for bekræftelse af aflevering, når begge felter er udfyldt
  };

  const handleCancel = () => {
    setVisPopup(false); // Lukker popup uden at ændre noget
  };

  return (
    <>
      <Overskrift tekst={"FILOSOFI"} />
      <br />
      <Beskrivelse
        tekst={
          "I denne opgave skal du reflektere over dig selv. Du skal skrive en kort tekst på ca. 5-10 sætninger, hvor du svarer på spørgsmålene."
        }
      />
      <br />
      <Underoverskrift
        tekst={
          "Hvem er du og hvilke ting betyder mest for dig i livet? Hvad tænker du, når du spørger dig selv: Hvem er jeg egentligt?"
        }
      />
      <aside className="mx-[12.5%]">
        <textarea
          required
          className="w-full h-40 border p-4 resize-none rounded mb-[6%]" // Styles med kant, giver den lov til at fylde hele sin container, har en højde på 160px, padding på 16px og kan ikke ændres i størrelse
          placeholder="Skriv din besvarelse her..."
          value={opgaveEt} // Sætter textarea'ens værdi til beskrivelse state
          onChange={(e) => setOpgaveEt(e.target.value)}
        ></textarea>
      </aside>
      <br />
      <Underoverskrift
        tekst={
          "Find en ven eller klassekammerat og diskuter jeres svar. Kan I finde nogle fælles træk? Hvad er forskellene?"
        }
      />
      <aside className="mx-[12.5%]">
        <textarea
          required
          className="w-full h-40 border p-4 resize-none rounded mb-[6%]" // Styles med kant, giver den lov til at fylde hele sin container, har en højde på 160px, padding på 16px og kan ikke ændres i størrelse
          placeholder="Skriv din besvarelse her..."
          value={opgaveTo} // Sætter textarea'ens værdi til beskrivelse state
          onChange={(e) => setOpgaveTo(e.target.value)}
        ></textarea>
      </aside>
      <br />
      <Underoverskrift tekst={"Kan vi nogensinde helt forstå, hvem vi er?"} />
      <aside className="mx-[12.5%]">
        <textarea
          required
          className="w-full h-40 border p-4 resize-none rounded mb-[6%]" // Styles med kant, giver den lov til at fylde hele sin container, har en højde på 160px, padding på 16px og kan ikke ændres i størrelse
          placeholder="Skriv din besvarelse her..."
          value={opgaveTre} // Sætter textarea'ens værdi til beskrivelse state
          onChange={(e) => setOpgaveTre(e.target.value)}
        ></textarea>
      </aside>
      <br />
      <Underoverskrift
        tekst={
          "Er vi bestemt af vores fortid, eller kan vi selv bestemme, hvem vi vil være?"
        }
      />
      <aside className="mx-[12.5%]">
        <textarea
          required
          className="w-full h-40 border p-4 resize-none rounded mb-[6%]" // Styles med kant, giver den lov til at fylde hele sin container, har en højde på 160px, padding på 16px og kan ikke ændres i størrelse
          placeholder="Skriv din besvarelse her..."
          value={opgaveFire} // Sætter textarea'ens værdi til beskrivelse state
          onChange={(e) => setOpgaveFire(e.target.value)}
        ></textarea>
      </aside>
      <br />
      <Underoverskrift tekst={"Hvad betyder det at have en fri vilje?"} />
      <aside className="mx-[12.5%]">
        <textarea
          required
          className="w-full h-40 border p-4 resize-none rounded mb-[6%]" // Styles med kant, giver den lov til at fylde hele sin container, har en højde på 160px, padding på 16px og kan ikke ændres i størrelse
          placeholder="Skriv din besvarelse her..."
          value={opgaveFem} // Sætter textarea'ens værdi til beskrivelse state
          onChange={(e) => setOpgaveFem(e.target.value)}
        ></textarea>
      </aside>

      <aside className="flex justify-center mt-[5%]">
        {" "}
        {/* Justerer knappen til at være centreret */}
        <CallToActionKnap tekst="AFLEVER" onClick={handleSubmitClick} />
        {/* Knap der kalder handleSubmitClick funktionen når den klikkes */}
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
              <CallToActionKnap tekst={"AFLEVER"} onClick={handleFinalSubmit} />
            </section>
          </article>
        </aside>
      )}
    </>
  );
}
