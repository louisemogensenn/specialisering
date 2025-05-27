import React from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import TilbagePil from "./components/TilbagePil";
import Header from "./components/Header";
import { useEffect } from "react";

export default function Layout() {
  const nuvaerendeLokation = useLocation(); // Brug useLocation til at få den nuværende rute

  const path = nuvaerendeLokation.pathname;

  const siderUdenPil = [
    "/mineforloeb",
    "/shop",
    "/logud",
    "/burgermenu",
    "/logind",
    "/point",
    "/shop"
  ];

  useEffect(() => {
    const tema = sessionStorage.getItem("tema") || ""; // Hent tema fra sessionStorage, eller brug en tom streng som standard
    document.body.classList.add(`tema-${tema}`); // Tilføj tema-klassen til body
  }, []);

  return (
    <>
      {/* Heri angivet komponenterne, der danner rammen for appen */}

      {path !== "/logind" && <Header />}

      {!siderUdenPil.includes(path) && <TilbagePil destination={ path === "/sofiesverden" ? "/mineforloeb" :  -1 }/>}

      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}
