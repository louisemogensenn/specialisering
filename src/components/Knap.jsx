import { Link } from "react-router-dom";
import React from "react";
import pil from "../assets/pil.svg";

export default function Knap({ til, tekst, point }) {
  return (
    <Link
      className="text-[20px] p-3 border flex justify-between mx-[12.5%] mb-[30px] md:text-3xl"
      to={til}
    >
      <span>{tekst}</span>

      <span className="flex items-center gap-2">
        {/* Point skal stå  med lav opacitet, men kun hvis der er angivet point. Til dette bruges en ternær operator */}
        {point ? (
          <span className="opacity-20">{point}</span>
        ) : null}

        {/* Pilen */}
        <img src={pil} alt="Gå til - pil" />
      </span>
    </Link>
  );
}
