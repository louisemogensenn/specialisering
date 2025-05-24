import React from "react";

export default function Beskrivelse({ tekst }) {
  return (
    <>
      <p className="text-[12px] flex justify-center mx-[12.5%] md:text-2xl">
        {tekst}
      </p>{" "}
      {/* Teksten står med 12px og er midtercentreret,  12.5% til kanterne og i medium-skærme (768px) er teksten 24px */}
    </>
  );
}
{
  /* 
      BRUG: Komponenten bruges til at skabe overensstemmelse mellem alle beskrivelser i appen.
      FUNKTION: Når denne komponent kaldes angives en property, der i dette tilfælde er teksten, der skal stå i beskrivelsen 
  */
}
