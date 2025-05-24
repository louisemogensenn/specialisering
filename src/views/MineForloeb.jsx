import React from "react";
import Overskrift from "../components/Overskrift";
import Beskrivelse from "../components/Beskrivelse";
import Sorter from "../components/Sorter";
import Knap from "../components/Knap";

export default function MineForloeb() {
  return (
    <div>
      <Overskrift tekst={"MINE FORLØB"} /> {/* Overskrift for siden */}
      <Beskrivelse tekst={"Her er en oversigt over dine opgaver"} /> {/* Beskrivelse af siden */}
      <Knap til="/sofiesverden" tekst="Sofies Verden" /> {/* Knap, der linker til Sofies Verden */}
    </div>
  );
}
