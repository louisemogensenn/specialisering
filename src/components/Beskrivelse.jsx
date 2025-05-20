import React from "react";

export default function Beskrivelse({ tekst }) {
  return (
    <>
      <p className="text-[12px] md:text-2xl lg:text-2xl">{tekst}</p>
    </>
  );
}
{
  /* 
      BRUG: Komponenten bruges til at skabe overensstemmelse mellem alle beskrivelser i appen.
      FUNKTION: Når denne komponent kaldes angives en property, der i dette tilfælde er teksten, der skal stå i beskrivelsen 
  */
}
