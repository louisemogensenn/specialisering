import React from "react";
import Overskrift from "../components/Overskrift";
import Beskrivelse from "../components/Beskrivelse";
import Underoverskrift from "../components/Underoverskrift";
import Knap from "../components/Knap";

export default function SofiesVerden() {
  return (
    <>
      <Overskrift tekst={"SOFIES VERDEN"} /> {/* Overskrift for siden */}
      <Beskrivelse tekst={"Her er en oversigt over dine opgaver."} /> {/* Beskrivelse af siden */}
      <Underoverskrift tekst={"Kapitler"} /> {/* Underoverskrift for kapitler */}
      <Knap til="/kapitel" tekst={"Kapitel 1"} point="100"></Knap> {/* Knap, der linker til Kapitel 1 og viser point */}
      <Knap til="#" tekst={"Kapitel 2"} point="250"></Knap> {/* Knap, der linker til Kapitel 2 og viser point */}
      <Knap til="#" tekst={"Kapitel 3"} point="200"></Knap> {/* Knap, der linker til Kapitel 3 og viser point */}
      <Knap til="#" tekst={"Kapitel 4"} point="400"></Knap> {/* Knap, der linker til Kapitel 4 og viser point */}

      <Underoverskrift tekst={"Ekstra opgaver"} /> {/* Underoverskrift for ekstra opgaver */}
      <Knap til="/quiz" tekst={"Quiz"} point="100"></Knap> {/* Knap, der linker til Quiz og viser point */}
      <Knap til="/tegn" tekst={"Tegn"} point="100"></Knap> {/* Knap, der linker til Tegn og viser point */}

      <section>
        <Overskrift tekst={"SOFIES VERDEN"} /> {/* Overskrift for Sofies Verden */}
        <Beskrivelse 
          tekst={
            "I dette forløb møder eleverne Sofie, en helt almindelig pige, der en dag modtager et mystisk brev med spørgsmålet: Hvem er du? Det bliver starten på en rejse gennem filosofiens historie, hvor de lærer om store tænkere som Sokrates, Platon og Descartes.Eleverne arbejder med undren, identitet og store spørgsmål om livet. De læser uddrag, ser klip og diskuterer deres egne tanker.  Forløbet styrker både læseforståelse og evnen til at reflektere – og giver dem sprog til at tænke over, hvem de selv er."
          }
        /> {/* Beskrivelse af Sofies Verden forløbet */}
        <Knap til="/" tekst="Kapitel 1" rotation={90}/> {/* Knap, der linker til Kapitel 1 med en rotation på 90 grader */}
      </section>
    </>
  );
}
