import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase";

export default function Burgermenu() {
  const { role } = useAuth(); // Henter brugerens rolle fra AuthContext-komponenten
  const navigate = useNavigate(); // Bruger useNavigate til at navigere. Denne bruges helt konkret til at navigere brugeren tilbage til log ind-siden efter logout

  const handleLogout = async () => {
    await auth.signOut(); //awai er en asynkron funktion, der venter på at brugeren bliver logget ud. Så den venter på at auth.signOut() er færdig, før den fortsætter
    document.body.classList.remove("tema-roed", "tema-gul", "tema-groen", "tema-blaa"); // Fjerner de gamle tema-klasser fra body, så der ikke er flere temaer aktive på samme tid
    navigate("/"); // Når brugeren er logget ud navigeres den tilbage til logind-siden
  };

  if (!role) { // Hvis der ikke er en rolle, returneres null. Dette kan være tilfældet, hvis brugeren ikke er logget ind endnu
    return null; 
  }

  return (
    <>
      {role === "elev" ? ( // Hvis brugerens rolle er "elev", vises følgende navigationsmenu
        <nav className="themable text-2xl flex flex-col justify-center align-center text-center gap-12 mt-[-10%] md:mt-[-5%] h-screen"> {/* Får temaet, 24px i skrift, flec i kolonne o midten (både x og y). Der er 48px mellem hvert link og det fylder hele skærmen */}
          <Link to="/mineforloeb">Se mine forløb</Link>
          <Link to="/shop">Gå til shop</Link>
          <Link to="#">Indstillinger</Link>
          <button onClick={handleLogout}>Log ud</button> {/* Ved klik på knappen kaldes handleLogout-funktionen, som logger brugeren ud */}
        </nav>
      ) : (
        <nav className="text-2xl flex flex-col justify-center align-center text-center gap-12 mt-[-10%] md:mt-[-5%] h-screen">
          <Link to="/udforskalleforloeb">Udforsk alle forløb</Link>
          <Link to="/mineforloeb">Se mine forløb</Link>
          <Link to="#">Indstillinger</Link>
          <button onClick={handleLogout}>Log ud</button> {/* Ved klik på knappen kaldes handleLogout-funktionen, som logger brugeren ud */}
        </nav>
      )}
    </>
  );
}
