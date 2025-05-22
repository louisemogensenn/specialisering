import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Burgermenu() {
  const [aaben, setAaben] = useState(false);

  return (
    <>
      <button
        onClick={() => setAaben(!aaben)}
        aria-label={aaben ? "Luk menu" : "Åbn menu"}
      >
        {aaben ? (
          // SVG for kryds (luk-menu)
          <svg
            width="62"
            height="65"
            viewBox="0 0 62 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.359209"
              y1="0.652194"
              x2="61.3592"
              y2="63.6522"
              stroke="black"
            />
            <line
              x1="61.3592"
              y1="1.34781"
              x2="0.359211"
              y2="64.3478"
              stroke="black"
            />
          </svg>
        ) : (
          // SVG for burgermenu (tre linjer)
          <svg
            width="61"
            height="64"
            viewBox="0 0 61 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.5" x2="61" y2="0.5" stroke="black" />
            <line y1="63.2941" x2="61" y2="63.2941" stroke="black" />
            <line y1="32.7941" x2="61" y2="32.7941" stroke="black" />
          </svg>
        )}
      </button>

      {aaben && (
          <nav className="text-2xl flex flex-col text-center gap-24">
            <Link to="/" onClick={() => setAaben(false)}>
              Se mine forløb
            </Link>
            <Link to="/shop" onClick={() => setAaben(false)}>
              Gå til shop
            </Link>
            <Link to="/saadanBrugerDuAppen" onClick={() => setAaben(false)}>
              Sådan bruger du appen
            </Link>
            <Link to="/indstillinger" onClick={() => setAaben(false)}>
              Indstillinger
            </Link>
            <Link to="#" onClick={() => setAaben(false)}>
              Log ud
            </Link>
          </nav>
      )}
    </>
  );
}
