import { Link } from "react-router-dom";
import React from "react";
import pil from "../assets/pil.svg";

{
  /* Når komponenten Knap oprettes angives stien, tekst og eventuelle point samt eventuel rotation */
}
export default function Knap({ til, tekst, point}) {
  return (
    <Link
      className="themable text-[20px] p-3 border flex justify-between mx-[12.5%] mb-[30px] bg-[inherit] rounded md:text-3xl" //Linket får klassen themable, der angiver den farver, knappens tekst er 20px og har en padding på 12px. Kanterne afrundes og på medium skærme er teksten 30px
      to={til} //Linket fører til den sti, der angives i til
    >
      <span>{tekst}</span> {/* Teksten i knappen vises her */}
      <span className="flex items-center gap-2">
        {" "}
        {/* Flexbox bruges til at placere pilen og point ved siden af hinanden */}
        {/* Point skal stå  med lav opacitet, men kun hvis der er angivet point. Til dette bruges en ternær operator */}
        {point ? <span className="opacity-20">{point}</span> : null}{" "}
        {/* En ternær operator bruges til at bestemme, om point skal angive. Hvis der er angivet point skal de vises med en skriftopacitet på 20% af den oprindelige. Ellers skal intet vises */}
        {/* Pilen */}
        <img
          src={pil} //Pilen importeres fra assets
          alt="Gå til - pil" //Alt-teksten for billedet
        />
      </span>
    </Link>
  );
}
