import React, { useState } from "react";
import Overskrift from "../components/Overskrift";
import Lydafspiller from "../components/Lydafspiller";
import CallToActionKnap from "../components/CallToActionKnap";
import { useNavigate } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";
import tegnefigur from "../assets/tegnefigur.svg";
import erDuSikker from "../assets/flotBrandCharacter.svg"; // Importerer et billede til popup

export default function Tegn() {
  const navigate = useNavigate(); // Bruges til at navigere brugeren
  const { faerdiggoerOpgaver } = useProgress(); // Bruges til at tilgå arrayet med færdige opgaver og tilføje denne til arrayet ved aflevering
  const [visPopup, setVisPopup] = useState(false); // Popup visning

  const handleSubmitClick = () => {
    setVisPopup(true); // Vis bekræftelses-popup
  };

  const handleFinalSubmit = () => {
    faerdiggoerOpgaver("tegn"); // Registrer opgaven som færdig
    navigate("/point"); // Naviger til point-siden
  };

  const handleCancel = () => {
    setVisPopup(false); // Luk popup
  };

  return (
    <>
      <Overskrift tekst={"TEGN"} />
      <br />
      <Lydafspiller />
      <img
        src={tegnefigur}
        alt="Oplæsningsfigur"
        className="mx-auto w-[300px] md:w-[500px]"
      />{" "}
      {/* Placeres i midten med en bredde på 300px og 500px på større skræme */}
      <p className="ml-[12.5%] mr-[12.5%] mt-[5%] text-[12px] md:text-2xl">
        {" "}
        {/* margin til siderne er 12.5%, 5% til top, tekst er 12px men 24px på større skærme */}
        I filosofien har vi hørt om Platons hule – en fortælling om nogle
        mennesker, der kun kan se skygger på en væg og tror, det er hele
        virkeligheden. <br /> <br /> Tegn, hvordan du forestiller dig hulen og
        det, der sker i den. Du bestemmer selv, hvad der skal være med. <br />{" "}
        <br /> Når du er færdig, skal du tage et billede af din tegning og
        uploade det.
      </p>
      <aside className="flex items-center text-2xl p-3 border mx-[12.5%] mb-[30px] mt-[10%] md:text-3xl rounded">
        {" "}
        {/* Flex, placeres i midten, 24px skriftstørrelse, 12px i padding, kant 30px til nedtående */}
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5688 7.85742L9.99995 1.00056"
            stroke="#171717"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M10 1L3.24998 7.85702"
            stroke="#171717"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M10 13.5713V2.14272"
            stroke="#171717"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M1 17H19"
            stroke="#171717"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
        <p className="flex-1 text-center text-[20px]">Upload</p>
      </aside>
      <section className="flex justify-center items-center">
        <CallToActionKnap tekst={"AFLEVER"} onClick={handleSubmitClick} />
      </section>
      {/* Popup ligesom i Hovedpersonen */}
      {visPopup && (
        <aside
          className="fixed inset-0 flex items-center justify-center z-50"
          aria-modal="true"
          role="dialog"
        >
          <article className="themable p-8 rounded max-w-sm mx-4 text-center border">
            <img
              src={erDuSikker}
              alt="Din brand character"
              className="mx-auto"
            />
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
