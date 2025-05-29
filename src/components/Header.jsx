// Importerer React
import React from "react";

// Importerer billeder og ikoner
import gyldendallogo from "../assets/gyldendallogo.svg";
import burgermenu from "../assets/burgermenu-ikon.svg";
import krydsikon from "../assets/luk-ikon.svg";

// Importerer routing hooks fra React Router
import { Link, useLocation, useNavigate } from "react-router-dom";

// Importerer context til at hente point
import { useProgress } from "../context/ProgressContext";

// Importerer context til at hente brugerens rolle (elev eller underviser)
import { useAuth } from "../context/AuthContext";

// Header-komponenten
export default function Header() {
  const navigate = useNavigate(); // Bruges til at navigere rundt i historikken
  const location = useLocation(); // Bruges til at finde den aktuelle URL-sti
  const { role } = useAuth(); // Henter brugerens rolle
  const { points } = useProgress(); // Henter brugerens point
  const erBurgermenu = location.pathname === "/burgermenu"; // Tjekker om brugeren er på burgermenu-siden

  return (
    // Wrapper for hele headeren med baggrundsfarve, padding og layout
    <header className="w-full bg-[#d9d9d9] flex items-center justify-between px-[12.5%] py-6">
      {/* Mobilvisning (skjules ved md og op) */}
      <div className="flex items-center justify-between w-full xl:hidden relative">
        {/* Venstre side: Burgermenu eller krydsikon */}
        <div>
          {erBurgermenu ? (
            // Viser krydsikonet og går én side tilbage ved klik
            <img onClick={() => navigate(-1)} src={krydsikon} alt="Luk menu" />
          ) : (
            // Viser burgermenuikonet og linker til burgermenuen
            <Link to="/burgermenu" aria-label="Åbn menu">
              <img src={burgermenu} alt="Åbn menu" />
            </Link>
          )}
        </div>

        {/* Centreret logo – absolut positioneret i midten */}
        <Link
          to="/mineforloeb"
          className="absolute left-1/2 transform -translate-x-1/2"
        >
          <img
            className="w-[150px] h-[30px]"
            src={gyldendallogo}
            alt="Gyldendal Logo"
          />
        </Link>

        {/* Højre side: point-cirkel hvis bruger er elev */}
        {role === "elev" ? (
          // Viser point i en cirkel
          <section className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border">
            {points}
          </section>
        ) : (
          // Hvis det ikke er en elev, vises en tom container (for at holde layoutet symmetrisk)
          <div className="w-10 h-10" />
        )}
      </div>

      {/* Desktopvisning (vises kun fra md og op) */}
      <div className="hidden xl:flex items-center justify-between w-full">
        {/* Venstre side: Logo */}
        <Link to="/mineforloeb">
          <img
            className="w-[210px] h-[44px]"
            src={gyldendallogo}
            alt="Gyldendal Logo"
          />
        </Link>

        {/* Højre side: Navigation med links */}
        <nav className="flex gap-10 text-[18px] font-light">
          <Link to="/udforsk">UDFORSK ALLE FORLØB</Link>
          <Link to="/mineforloeb">SE ALLE MINE FORLØB</Link>
          <Link to="/indstillinger">INDSTILLINGER</Link>
          <Link to="/logout">LOG UD</Link>
        </nav>
      </div>
    </header>
  );
}
