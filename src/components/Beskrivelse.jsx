import React from "react";

export default function Beskrivelse({ tekst }) {
  return (
    <>
      <p className="text-[12px] flex justify-center md:text-2xl ml-[12.5%] mr-[12.5%]" >{tekst}</p>
    </>
  );
}
{
  /* 
      BRUG: Komponenten bruges til at skabe overensstemmelse mellem alle beskrivelser i appen.
      FUNKTION: Når denne komponent kaldes angives en property, der i dette tilfælde er teksten, der skal stå i beskrivelsen 
  */
}
