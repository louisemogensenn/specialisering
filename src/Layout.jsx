import React from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import TilbagePil from "./components/TilbagePil";
import Header from "./components/Header";
import { useEffect } from "react";
import LogInd from "./views/LogInd";
import Sorter from "./components/Sorter";

export default function Layout() {
  const nuvaerendeLokation = useLocation(); // Brug useLocation til at få den nuværende rute

  const path = nuvaerendeLokation.pathname;

  const siderUdenPil = [
    "/",
    "/shop",
    "/indstillinger",
    "/saadanBrugerDuAppen",
    "/logud",
    "/burgermenu",
    "/logind"
  ];

  useEffect(() => {
    const tema = localStorage.getItem("tema") || ""; // Hent tema fra localStorage, eller brug en tom streng som standard
    document.body.classList.add(`tema-${tema}`); // Tilføj tema-klassen til body
  }, []);

  return (
    <>
      {/* Heri angivet komponenterne, der danner rammen for appen */}

      {path !== "/logind" && <Header />}

      {!siderUdenPil.includes(path) && <TilbagePil />}

      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}
