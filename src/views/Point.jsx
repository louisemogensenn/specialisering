import React from "react";
import Overskrift from "../components/Overskrift";
import CallToActionKnap from "../components/CallToActionKnap";
import { useProgress } from "../context/ProgressContext"; // Importerer ProgressContext for at få adgang til points
import Beskrivelse from "../components/Beskrivelse";


export default function Point() {
  const { points } = useProgress();
  return (
    <>
      <Overskrift tekst={"GODT GÅET!"} />
      <Beskrivelse tekst={"Du har optjent"} />
      <h1 className="text-5xl text-center mt-[10%]">{points + " POINT!"}</h1>{" "}
      {/* Skriften for denne tekst er 48px */}
      <section className="themable flex justify-around mx-[12.5%] mt-[40%] md:mt-[20%]">
        <CallToActionKnap til="/shop" tekst="SHOP" />
        <CallToActionKnap til="/sofiesverden" tekst="NÆSTE" />
      </section>
    </>
  );
}
