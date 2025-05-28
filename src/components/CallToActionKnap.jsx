import React from "react";
import { useNavigate } from "react-router-dom";

export default function CallToActionKnap({ tekst, onClick, til }) {
  const navigate = useNavigate(); // bruges til at navigere til en anden side

  const handleClick = () => { //En funktion, der håndterer klik på knappen
    if (til) { // Hvis der er angivet en sti at navigere til - denne sti kan angives, når komponenten benyttes
      navigate(til); // Navigeres der til den angivne sti
    } else if (onClick) { // Hvis der er angivet en funktion at køre ved klik
      onClick(); // Køres denne funktion
    }
  };

  return (
    <button
      type="button"
      className="themable px-6 py-2 border rounded mb-[6%] md:text-2xl md:px-3" // Knappen får styling fra temaet, 24px til højre og ventre og 8px til top og bund (fra tekst). Afstanden til knapperne i siderne justeres til 12px på større skærme
      onClick={handleClick} // Ved klik kaldes funktionen, der er angivet oven over
    >
      {tekst} {/* Og teksten placeres i knappen */}
    </button>
  );
}
