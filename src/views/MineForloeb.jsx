import React from "react";
import Overskrift from "../components/Overskrift";
import Beskrivelse from "../components/Beskrivelse";
import Sorter from "../components/Sorter";
import Knap from "../components/Knap";
import { useAuth } from "../context/AuthContext";
import Underoverskrift from "../components/Underoverskrift";

export default function MineForloeb() {
  const { role } = useAuth();

  if (!role) {
    return <p>Indlæser...</p>; // eller vis en spinner, hvis ønsket
  }

  return (
    <>
      <Overskrift tekst={"MINE FORLØB"} />

      {role === "elev" && (
        <>
          <Beskrivelse tekst={"Her er en oversigt over dine opgaver"} />
          <br />
          <Underoverskrift tekst={"Forløb"} />
          <Knap til="/sofiesverden" tekst="Sofies Verden" />
        </>
      )}

      {role === "underviser" && (
        <>
          <Beskrivelse tekst={"Her er en oversigt over dine igangværende forløb"} />
          <br />
          <Sorter />
          <Knap til="/sofiesverdenklasse" tekst="Sofies Verden" point="5.A" />
          <Knap til="#" tekst="Klods Hans" point="5.B" />
        </>
      )}
    </>
  );
}
