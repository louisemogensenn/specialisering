import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Burgermenu() {
  return (
    <>
      <nav className="text-2xl flex flex-col justify-center align-center text-center gap-12">
        {" "}
        {/* Tekststørrelsen er 24px, elementerne er i felx-column og er placeret i midten. Der er 48px mellem hvert link */}
        {/* Menu-links */}
        <Link to="/logind">Log Ind</Link> {/* Link til Logind-siden */}
        <Link to="/">Se mine forløb</Link> {/* Link til MineForløb-siden */}
        <Link to="/shop">Gå til shop</Link> {/* Link til Shop-siden */}
        <Link to="/saadanBrugerDuAppen">Sådan bruger du appen</Link>{" "}
        {/* Link til SådanBrugerDuAppen-siden */}
        <Link to="/indstillinger">Indstillinger</Link>{" "}
        {/* Link til Indstillinger-siden */}
        <Link to="#">Log ud</Link>{" "}
        {/* Link til Log ud, ingen destination angivet */}
      </nav>
    </>
  );
}
