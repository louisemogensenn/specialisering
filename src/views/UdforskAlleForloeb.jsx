import React from "react";
import Knap from "../components/Knap"; // Importerer Knap komponenten
import Overskrift from "../components/Overskrift";
import Beskrivelse from "../components/Beskrivelse";

export default function UdforskAlleForloeb() {
  return (
    <>
      <Overskrift tekst="ALLE FORLØB" /> {/* Overskrift for siden */}
      <Beskrivelse tekst="Alle forløb er udarbejdet af Gyldendal" /> {/* Beskrivelse af siden */}
      <br />
      <Knap til={"#"} tekst="Anne Franks Dagbog" />
      <Knap til={"#"} tekst="Nelson Mandela" />
      <Knap til={"#"} tekst="Oppenheimer" />
      <Knap til="/sofiesverden" tekst="Sofies Verden" /> {/* En knap, der linker til Sofies Verden */}
    </>
  );
}
