import React from "react";

export default function Overskrift({ tekst }) {
  return (
    <>
      <h1 className="text-6xl mt-36">{tekst}</h1>
      {/* Tekststørrelsen er 3.75rem og overskriften er placeret 9rem fra toppen */}
    </>
  );
}

{
  /* 
    BRUG: Komponenten bruges til at skabe overensstemmelse mellem alle overskrifter i appen.
    FUNKTION: Når denne komponent kaldes angives en property, der i dette tilfælde er teksten, der skal stå i overskriften 
*/
}
