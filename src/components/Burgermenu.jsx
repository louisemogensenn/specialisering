import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Burgermenu() {
  const [aaben, setAaben] = useState(false);

  return (
    <>
      {/* Åbn menu-knap */}
      {!aaben && (
        <button
          className="ml-[12.5%] mt-[100px] mb-[20px] z-50 relative"
          onClick={() => setAaben(true)}
          aria-label="Åbn menu"
        >
          <svg
            width="34"
            height="35"
            viewBox="0 0 61 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.5" x2="61" y2="0.5" stroke="black" />
            <line y1="63.2941" x2="61" y2="63.2941" stroke="black" />
            <line y1="32.7941" x2="61" y2="32.7941" stroke="black" />
          </svg>
        </button>
      )}

      {/* Menu-overlay */}
      {aaben && (
        <nav className="fixed top-0 left-0 w-full h-full bg-white z-50 text-2xl flex flex-col justify-center text-center gap-12">
          {/* Luk-menu-knap (krydsikon) */}
          <button
            onClick={() => setAaben(false)}
            className="absolute ml-[12.5%] mt-[100px] mb-[20px]"
            style={{ top: 0, left: 0 }} // så placeringen matcher præcist
            aria-label="Luk menu"
          >
            <svg
              width="34"
              height="35"
              viewBox="0 0 62 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="0.359209" y1="0.652194" x2="61.3592" y2="63.6522" stroke="black" />
              <line x1="61.3592" y1="1.34781" x2="0.359211" y2="64.3478" stroke="black" />
            </svg>
          </button>

          {/* Menu-links */}
          <Link to="/" onClick={() => setAaben(false)}>Se mine forløb</Link>
          <Link to="/shop" onClick={() => setAaben(false)}>Gå til shop</Link>
          <Link to="/saadanBrugerDuAppen" onClick={() => setAaben(false)}>Sådan bruger du appen</Link>
          <Link to="/indstillinger" onClick={() => setAaben(false)}>Indstillinger</Link>
          <Link to="#" onClick={() => setAaben(false)}>Log ud</Link>
        </nav>
      )}
    </>
  );
}
