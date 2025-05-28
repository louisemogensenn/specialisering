import React from "react";
import Overskrift from "../components/Overskrift";
import Beskrivelse from "../components/Beskrivelse";
import Lydafspiller from "../components/Lydafspiller";
import Underoverskrift from "../components/Underoverskrift";
import CallToActionKnap from "../components/CallToActionKnap";
import erDuSikker from "../assets/flotBrandCharacter.svg"; // Importerer et billede til popup
import { useState } from "react"; // Importerer useState for at håndtere komponentens tilstand
import { useProgress } from "../context/ProgressContext";
import { useNavigate } from "react-router-dom"; // Importer useNavigate for at navigere til en anden side
import { useEffect } from "react";

export default function Hulen() {
  const [visPopup, setVisPopup] = useState(false); // State for at styre visning af popup
  const { faerdiggoerOpgaver, gemSvarData, svarData } = useProgress(); // Importerer kontekst for at kunne gemme og hente data
  const navigate = useNavigate(); // Så der kan navigeres til en anden side
  const [svar, setSvar] = useState(""); // State for at gemme brugerens svar. Dette skal bruges til at vise til underviseren senere

  useEffect(() => { // Hver gang svarData opdateres
    const tidligereSvar = svarData?.hulen?.svar; // Oprettes en konstant, der kigger på, om der er svar data for hulens svar. Hvis der er, gemmes det i tidligereSvar
    if (tidligereSvar) { // Hvis der er et svr fra tidligere
      setSvar(tidligereSvar); // Gem det i svar state, så det vises i textarea
    }
  }, [svarData]); // useEffect kører, når svarData ændres

  const handleFinalSubmit = () => { // Når brugeren bekræfter aflevering ved klik på knappen
    faerdiggoerOpgaver("hulen", 100); // Gemmes opgaven i arrayet og sætter point til 100
    navigate("/point"); // Bruges til at navigere til point ved klik
  };

  const handleSubmitClick = () => {
    if (svar === "") { //Tjek om feltet er udfyldt
      alert("Feltet skal udfyldes"); // Hvis de ikke begge er udfyldt vises en alert
      return; // Stop funktionen hvis felterne ikke er udfyldt
    }
    setVisPopup(true); // Vis popup for bekræftelse af aflevering, når begge felter er udfyldt
  };

  const handleCancel = () => {
    setVisPopup(false); // Lukker popup uden at ændre noget
  };
  
  return (
    <>
      <Overskrift tekst={"HULEN"} />
      <br />
      <Lydafspiller />
      <br />
      <Beskrivelse
        tekst={
          "Forestil dig, at du sidder i hulen ligesom fangerne i Platons fortælling. Du kan kun se skygger på væggen – men du ved ikke, at verden udenfor findes. Pludselig bliver du sluppet fri. Du kan se lyset. Du forstår, at der er en helt anden virkelighed."
        }
      />
      <br />
      <Underoverskrift tekst={"Skriv, hvad du ville gøre, hvis det var dig."} />
      <aside className="mx-[12.5%]">
        <textarea
          required
          className="w-full h-40 border p-4 resize-none rounded" // Styles med kant, giver den lov til at fylde hele sin container, har en højde på 160px, padding på 16px og kan ikke ændres i størrelse
          placeholder="Skriv din besvarelse her..."
          onChange={(e) => {
            setSvar(e.target.value); // opdaterer svar state når denne laves
            gemSvarData("hulen", { svar: e.target.value }); // gemmer svar i kontekst
          }} // opdater state ved ændring
        ></textarea>
      </aside>
      <p className="text-[12px] mx-[12.5%] md:text-2xl">
        <span className="font-bold">Hint: </span> Ville du blive i hulen, eller
        gå ud? Ville du vende tilbage for at fortælle de andre, eller gå videre
        alene?
      </p>

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
            <img src={erDuSikker} alt="Din brand character" className="mx-auto"/>
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
