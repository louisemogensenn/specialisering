import React from "react";

export default function Overskrift({ tekst }) {
  return (
    <>
      <h1 className="text-2xl mx-[12.5%] flex justify-center md:text-5xl">
        {tekst}
      </h1>
      {/* Tekststørrelsen er 24px og overskriften er placeret 12.5% fra kanterne. Den er midterplaceret og på større skærme er teksten 48px i stedet */}
    </>
  );
}

{
  /* 
    BRUG: Komponenten bruges til at skabe overensstemmelse mellem alle overskrifter i appen.
    FUNKTION: Når denne komponent kaldes angives en property, der i dette tilfælde er teksten, der skal stå i overskriften 
*/
}
