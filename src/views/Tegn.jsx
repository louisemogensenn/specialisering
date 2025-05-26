import React from "react";
import Overskrift from "../components/Overskrift";
import Lydafspiller from "../components/Lydafspiller";
import CallToActionKnap from "../components/CallToActionKnap";
import { useNavigate } from "react-router-dom";

export default function Tegn() {
  const navigate = useNavigate(); // <- DENNE MANGLEDE!

  const afleveret = () => {
    // Funktion der håndterer aflevering af tegningen
    alert(
      "Din tegning er blevet afleveret! Klik 'Luk' og du sendes tilbage til forsiden"
    ); // Viser en alert når tegningen er afleveret
    setTimeout(() => {
      navigate("/sofiesverden"); // Flytter brugeren, når der er klikket Luk
    }, 1000);
  };

  return (
    <>
      <Overskrift tekst={"TEGN"} /> {/* Overskrift for siden */}
      <Lydafspiller /> {/* Lydafspiller komponent, der afspiller en lydfil */}
      <p className="ml-[12.5%] mr-[12.5%] mt-[5%] text-[12px] md:text-2xl">
        I filosofien har vi hørt om Platons hule – en fortælling om nogle
        mennesker, der kun kan se skygger på en væg og tror, det er hele
        virkeligheden. <br /> <br /> Tegn, hvordan du forestiller dig hulen og
        det, der sker i den. Du bestemmer selv, hvad der skal være med. <br />{" "}
        <br /> Når du er færdig, skal du tage et billede af din tegning og
        uploade det.
      </p>{" "}
      {/* Beskrivelse af opgaven med margin til siderne og toppen samt mindre tekststørrelse */}
      <aside className="flex items-center text-2xl p-3 border mx-[12.5%] mb-[30px] mt-[10%] md:text-3xl">
        {" "}
        {/* Flexbox bruges til at centrere indholdet, og der er padding, kant og margin for at give afstand til siderne og bunden */}
        <svg
          width="36"
          height="25"
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
        <p className="flex-1 text-center">Upload</p>{" "}
        {/* Tekst centreret i flexboxen, der beskriver upload-handlingen */}
      </aside>
      <section className="flex justify-center items-center">
        <CallToActionKnap tekst={"AFLEVER"} onClick={afleveret} />{" "}
        {/* Knap-komponent, der fungerer som en call-to-action for at uploade tegningen */}
      </section>
    </>
  );
}
