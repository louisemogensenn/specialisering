import React from "react";
import { Outlet } from "react-router-dom";
import Burgermenu from "./components/Burgermenu";
import Lydafspiller from "./components/Lydafspiller";

export default function Layout() {
  return (
    <>
      {/* Heri angivet komponenterne, der danner rammen for appen */}

      <Burgermenu></Burgermenu>

      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}
