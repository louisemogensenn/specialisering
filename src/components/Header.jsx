import React from "react";
import gyldendallogo from "../assets/gyldendal.svg";
import burgermenu from "../assets/burgermenu-ikon.svg";
import krydsikon from "../assets/luk-ikon.svg"; // ← Tilføj et krydsikon (svg)
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useProgress } from "../context/ProgressContext"; // Importerer ProgressContext for at få adgang til points
import { useAuth } from "../context/AuthContext"; // Importerer AuthContext for at få adgang til brugerens rolle

export default function Header() {
  const navigate = useNavigate(); // Henter funktionen til at navigere
  const { role } = useAuth(); // Henter brugerens rolle fra AuthContext

  const erBurgermenu = location.pathname === "/burgermenu"; // Tjekker om den nuværende sti er "/burgermenu". Returnerer true eller false
  const { points } = useProgress();

  return (
    <header className="flex items-center justify-between px-[12.5%] py-[25px] mb-[10%] md:mb-[5%]">
      {/* Burger eller kryds */}
      {erBurgermenu ? (
        <img onClick={() => navigate(-1)} src={krydsikon} alt="Luk menu" />
      ) : (
        <Link to="/burgermenu" aria-label="Åbn menu">
          <img src={burgermenu} alt="Åbn menu" />
        </Link>
      )}

      {/* Logo */}
      <img
        className="w-[150px] h-[30px]"
        src={gyldendallogo}
        alt="Gyldendal Logo"
      />

      {/* Point i cirkel - vises hvis man er elev - ellers vises en tom container */}
      {role === "elev" ? (
        <article className="flex flex-col items-center">
          <section className="themable w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border">
            {points}
          </section>
          <p className="text-xs mt-1 font-semibold">POINT</p>
        </article>
      ) : (
        <article className="flex flex-col items-center"></article>
      )}
    </header>
  );
}
