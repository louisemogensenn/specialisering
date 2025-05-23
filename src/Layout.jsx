import React from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Burgermenu from "./components/Burgermenu";
import TilbagePil from "./components/TilbagePil";

export default function Layout() {

  const nuvaerendeLokation = useLocation();  // Brug useLocation til at få den nuværende rute
    
  const path = nuvaerendeLokation.pathname;

  const siderUdenPil = ["/", "/shop", "/indstillinger", "/saadanBrugerDuAppen", "/logud"];

  return (
    <>
      {/* Heri angivet komponenterne, der danner rammen for appen */}

      <Burgermenu></Burgermenu>

      {!siderUdenPil.includes(path) && <TilbagePil />}

      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}
