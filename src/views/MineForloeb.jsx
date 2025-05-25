import React from "react";
import Overskrift from "../components/Overskrift";
import Beskrivelse from "../components/Beskrivelse";
import Sorter from "../components/Sorter";
import Knap from "../components/Knap";

export default function MineForloeb() {
  return (
    <>
      <Overskrift tekst={"MINE FORLØB"} /> {/* Overskrift for siden */}
      <Beskrivelse tekst={"Her er en oversigt over dine opgaver"} />{" "}
      {/* Beskrivelse af siden */}
      <Knap til="/sofiesverden" tekst="Sofies Verden" />{" "}
      {/* Knap, der linker til Sofies Verden */}
      <Overskrift tekst={"MINE FORLØB"} /> {/* Overskrift for siden */}
      <Beskrivelse
        tekst={"Her er en oversigt over dine igangværende forløb"}
      />{" "}
      <Sorter /> {/* Komponent til sortering af forløb */}
      <Knap til="/sofiesverdenklasse" tekst="Sofies Verden" point={"5.A"} />{" "}
      {/* Knap, der linker til forløbet Sofies Verden */}
      <Knap til="#" tekst="Klods Hans" point={"5.B"} />{" "}
      {/* Knap, der linker til forløbet Klods Hans */}
    </>
  );
}
