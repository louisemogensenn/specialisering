import React from "react";
import gyldendallogo from "../assets/gyldendallogo.svg";
import burgermenu from "../assets/burgermenu-ikon.svg";
import krydsikon from "../assets/luk-ikon.svg"; // ← Tilføj et krydsikon (svg)
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useProgress } from "../context/ProgressContext"; // Importerer ProgressContext for at få adgang til points
import { useAuth } from "../context/AuthContext"; // Importerer AuthContext for at få adgang til brugerens rolle

export default function Header() {
  const navigate = useNavigate(); // Henter funktionen til at navigere rundt (bruges til at gå én tilbage
  const { role } = useAuth(); // Henter brugerens rolle fra AuthContext til at skifte mellem indhold

  const erBurgermenu = location.pathname === "/burgermenu"; // Tjekker om den nuværende sti er "/burgermenu". Returnerer true eller false og bruges til at vise et krydsikon for at lukke burgermenuen
  const { points } = useProgress(); // Henter point for at vise disse i headeren

  return (
    <header className="flex items-center justify-between px-[12.5%] py-[25px] mb-[10%] md:mb-[5%]"> {/* Indholdet stilles i flex på x-aksen og placeres med indholdet imellem sig -  */}
      {/* Burger eller kryds */}
      {erBurgermenu ? (
        <img onClick={() => navigate(-1)} src={krydsikon} alt="Luk menu" /> // Ved klik på denne navigeres brugesn en side tilbage i historikken
      ) : (
        <Link to="/burgermenu" aria-label="Åbn menu">
          <img src={burgermenu} alt="Åbn menu" />
        </Link>
      )}

      {/* Logo */}
      <Link to="/mineforloeb">
        <img
          className="w-[150px] h-[30px]"
          src={gyldendallogo}
          alt="Gyldendal Logo"
        />
      </Link>

      {/* Point i cirkel - vises hvis man er elev - ellers vises en tom container */}
      {role === "elev" ? ( // Hvis det er en elev, der er lokket ind skal denes point vises i headeren i en cirkel
        <article className="flex flex-col items-center">
          <section className="themable w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border">
            {points}
          </section>
        </article>
      ) : (
        <article className="flex flex-col items-center"></article>
      )}
    </header>
  );
}
