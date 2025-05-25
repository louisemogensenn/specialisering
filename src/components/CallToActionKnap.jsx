import React from "react";
import { useNavigate } from "react-router-dom";

export default function CallToActionKnap({ tekst, onClick, til }) {
  const navigate = useNavigate(); // bruges til at navigere til en anden side

  const handleClick = () => {
    //En funktion, der håndterer klik på knappen
    if (til) {
      // Hvis der er angivet en sti at navigere til
      navigate(til); // Navigeres der til den angivne sti
    } else if (onClick) {
      // Hvis der er angivet en funktion at køre ved klik
      onClick(); // Køres denne funktion
    }
  };

  return (
    <button
      type="button"
      className="themable px-6 py-2 border rounded"
      onClick={handleClick}
    >
      {tekst}
    </button>
  );
}
