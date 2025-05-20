import React from "react";
import Overskrift from "../components/Overskrift";
import Beskrivelse from "../components/Beskrivelse";
import Sorter from "../components/Sorter";
import Knap from "../components/Knap";

export default function MineForloeb() {
  return (
    <div>
      <Overskrift tekst={"MINE FORLØB"} />
      <Beskrivelse tekst={"Her er en oversigt over dine opgaver"} />
      <Sorter />
      <Knap til="/sofiesverden" tekst="Sofies Verden" />
    </div>
  );
}
