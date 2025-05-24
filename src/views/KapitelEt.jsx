import React from "react";
import Overskrift from "../components/Overskrift";
import Lydafspiller from "../components/Lydafspiller";
import Underoverskrift from "../components/Underoverskrift";

export default function KapitelEt() {
  return (
    <>
      <Overskrift tekst={"Kapitel 1"} />
      <Lydafspiller />
      <h1 className="text-[20px] mb-[6%] mx-[12.5%] mt-[10%]">Opgave 1</h1>{" "} {/* Overskrift for opgaven med styling af tekststørrelse, dens margin til hhv. bund, siderne og toppen*/}
      <Underoverskrift tekst={"Hvad hedder hovedpersonen"} />
      <aside className="mx-[12.5%]"> {/* Giver afstand til kanten på 12.5% af skræmens bredde */}
        <input type="text" required className="border w-full mb-[10%]" />{" "} {/* Sætter en kant på inputfeltet og sikrer, at det er centreret */}
      </aside>
      <Underoverskrift tekst={"Hvordan vil du beskrive hovedpersonen?"} />{" "} {/* Underoverskrift for at give kontekst til inputfeltet */}
      <aside className="mx-[12.5%]"> {/* Giver afstand til inputfeltet og sikrer, at det er centreret */}
        <input type="text" required className="h-40 border w-full" />{" "} {/* Sætter en højde på inputfeltet for at give plads til længere tekst */}
      </aside>
      <aside className="flex justify-center mt-[10%]"> {/* Sikrer, at knappen placeres i midten af skærmen og får afstand til ovenstående */}
        <button type="submit" className="text-2xl border px-6 py-1 w-fit"> {/* Sætter tekststørrelsen, giver en kant samt padding på x- og y-aksen */}
          AFLEVER
        </button>
      </aside>
    </>
  );
}
