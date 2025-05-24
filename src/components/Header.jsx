import React from "react";
import gyldendallogo from "../assets/gyldendal.svg";
import ellipse from "../assets/ellipse.svg";
import burgermenu from "../assets/burgermenu-ikon.svg";
import krydsikon from "../assets/luk-ikon.svg"; // ← Tilføj et krydsikon (svg)
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const lokation = useLocation(); // Henter nuværende sti og gemmer værdien i konstanten lokation
  const navigate = useNavigate(); // Henter funktionen til at navigere

  const erBurgermenu = location.pathname === "/burgermenu"; // Tjekker om den nuværende sti er "/burgermenu". Returnerer true eller false

  return (
    <section className="flex items-center justify-between mx-[12.5%] mt-[50px] mb-[10%]">
      {" "}
      {/* Elementerne er i flex og placeres med plads imellem sig med 12.5%s afstand til sidene, derudover en afstand på 50px til toppen, 10% til bunden og baggrundsfarven nedarves */}
      {/* Burger eller kryds */}
      {erBurgermenu ? (
        <img onClick={() => navigate(-1)} src={krydsikon} alt="Luk menu" /> // Hvis vi er på "/burgermenu", vises et krydsikon, der navigerer tilbage til forrige side
      ) : (
        <Link to="/burgermenu" aria-label="Åbn menu">
          {" "}
          {/* Hvis vi ikke er på "/burgermenu", vises burgermenuen */}
          <img src={burgermenu} alt="Åbn menu" />
        </Link>
      )}
      {/* Logo */}
      <img
        className="w-[150px] h-[30px]" // Logoet er 150px bredt og 30px højt
        src={gyldendallogo} // Logoet er importeret øverst med referencen gyldendallogo
        alt="Gyldendal Logo" // Alt-tekst for logoet
      />
      {/* Point */}
      <img className="w-[40px] h-[40px]" src={ellipse} alt="Dine point" />{" "}
      {/* Point-ikonet er 40px bredt og 40px højt og har referencen ellipse, der refererer til en importeret svg øverst*/}
    </section>
  );
}
