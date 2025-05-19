import React from "react";
import { Link } from "react-router-dom";

export default function Burgermenu() {
  const [aaben, setAaben] = useState(false); // React-hook, der holder styr på om menuen er åben eller lukket. Den er lukket i starten (false)

  return (
    <>
      <button onClick={setAaben(true)}>
        <svg>{/* SVG-fil for burgermenu (re linjer) */}</svg>
      </button>

      {aaben && ( // Hvis aaben er true, vises menuen
        <aside>
          <button onClick={setAaben(false)}>
            <svg>{/* SVG-fil for lukning af menu (X) */}</svg>
          </button>

          <nav>
            <Link to="#" onClick={setAaben(false)}>
              Udforsk alle forløb
            </Link>
            <Link to="#" onClick={setAaben(false)}>
              Se mine forløb
            </Link>
            <Link to="#" onClick={setAaben(false)}>
              Sådan bruger du appen
            </Link>
            <Link to="#" onClick={setAaben(false)}>
              Indstillinger
            </Link>
            <Link to="#" onClick={setAaben(false)}>
              Log ud
            </Link>
          </nav>
        </aside>
      )}
    </>
  );
}
