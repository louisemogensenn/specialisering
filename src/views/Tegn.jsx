import React, { useState } from "react";
import Overskrift from "../components/Overskrift";
import Lydafspiller from "../components/Lydafspiller";
import CallToActionKnap from "../components/CallToActionKnap";
import { useNavigate } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";
import tegnefigur from "../assets/tegnefigur.svg";

export default function Tegn() {
  const navigate = useNavigate();
  const { faerdiggoerOpgaver } = useProgress();
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
      <img src={tegnefigur} alt="Oplæsningsfigur" className="mx-auto w-[300px] md:w-[500px]"/>
      <p className="ml-[12.5%] mr-[12.5%] mt-[5%] text-[12px] md:text-2xl">
        I filosofien har vi hørt om Platons hule – en fortælling om nogle
        mennesker, der kun kan se skygger på en væg og tror, det er hele
        virkeligheden. <br /> <br /> Tegn, hvordan du forestiller dig hulen og
        det, der sker i den. Du bestemmer selv, hvad der skal være med. <br />{" "}
        <br /> Når du er færdig, skal du tage et billede af din tegning og
        uploade det.
      </p>
      <aside className="flex items-center text-2xl p-3 border mx-[12.5%] mb-[30px] mt-[10%] md:text-3xl rounded">
        <svg
          width="30"
          height="18"
          viewBox="0 0 36 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="27.6464"
            y1="10.3536"
            x2="17.6464"
            y2="0.353553"
            stroke="black"
          />
          <line
            x1="18.3536"
            y1="0.353553"
            x2="8.35355"
            y2="10.3536"
            stroke="black"
          />
          <line y1="24.5" x2="36" y2="24.5" stroke="black" />
          <line x1="18.5" y1="1" x2="18.5" y2="21" stroke="black" />
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
