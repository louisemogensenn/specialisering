import React from "react";

export default function Underoverskrift({ tekst }) {
  return (
    <>
      <p className="text-[12px] mx-[12.5%] font-bold mb-[15px] md:text-2xl">
        {tekst}
      </p>{" "}
      {/* Tekststørrelsen er 12px og er fed. På større skærme er teksten 24px */}
    </>
  );
}
{
  /* 
    BRUG: Komponenten bruges til at skabe overensstemmelse mellem alle underoverskrifter i appen.
    FUNKTION: Når denne komponent kaldes angives en property, der i dette tilfælde er teksten, der skal stå i underoverskrifterne 
*/
}
