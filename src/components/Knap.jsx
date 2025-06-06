import { Link } from "react-router-dom";
import React from "react";
import pil from "../assets/pil.svg";


// Dette er den knap hvori der står forløb, opgaver (med ramme omkring og eventuel pil i siden)
// Komponenten tager flere inputs

export default function Knap({ til, tekst, point, disabled = false }) {
  return (
    <Link
      to={til} // Linket fører til den sti, der angives i til
      className={`themable text-[20px] md:text-3xl p-3 border flex justify-between mx-[12.5%] mb-[30px] rounded  transition-all duration-200
        ${ // $ bruges til at indsætte JavaScript i en streng
          disabled // Er disables true?
            ? "opacity-40 pointer-events-none cursor-not-allowed" // Hvis knappen er deaktiveret, bliver den mere transparent, kan ikke klikkes på, og musen ændres til en forbudt cursor
            : "" // Ellers sker der ikke noget
        }
      `}
    >
      <span>{tekst}</span> {/* Teksten i knappen vises her */}
      <span className="flex items-center gap-2">
        {/* Flexbox bruges til at placere pilen og point ved siden af hinanden */}
        {/* Point skal stå med lav opacitet, men kun hvis der er angivet point. Til dette bruges en ternær operator */}
        {point ? <span className="opacity-20">{point}</span> : null}
        {/* En ternær operator bruges til at bestemme, om point skal angives. Hvis der er angivet point, skal de vises med en skriftopacitet på 20% af den oprindelige. Ellers skal intet vises */}
        {/* Pilen */}
        <img
          src={pil} // Pilen importeres fra assets
          alt="Gå til - pil" // Alt-teksten for billedet
        />
      </span>
    </Link>
  );
}
