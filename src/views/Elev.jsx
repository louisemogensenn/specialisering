import React from "react";
import Overskrift from "../components/Overskrift";
import Beskrivelse from "../components/Beskrivelse";
import pil from "../assets/pil.svg"; // Importerer pil-ikonet
import { useState } from "react"; // Importerer useState for at håndtere komponentens tilstand

export default function Elev() {
  const [aabenOpgave, setAabenOpgave] = useState(false);

  return (
    <>
      <Overskrift tekst={"Sofies Verden"} />
      <Beskrivelse tekst={"Dette er besvarelser for:"} />
      <aside className="font-bold">
        <Beskrivelse tekst={"Anne Hansen"} />
      </aside>

      <section className="mb-[30px]">
        <article
          className=" text-[20px] p-3 border flex justify-between mx-[12.5%] rounded md:text-3xl"
          onClick={() => setAabenOpgave(!aabenOpgave)}
        >
          <p>Hovedpersonen</p>
          <img
            className={`transition-transform duration-300 ${
              aabenOpgave ? "rotate-270" : "rotate-90"
            }`}
            src={pil}
            alt="Åbn-pil"
          />
        </article>
        <div
          className={`transition-max-height duration-300 overflow-hidden ease-in-out ${
            aabenOpgave ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          <section className="text-[16px] p-3 border flex flex-col gap-6 mx-[12.5%] rounded md:text-2xl">
            <p>Hvad hedder hovedpersonen?</p>
            <input
              readOnly
              placeholder="Sofie"
              className="border w-full p-4 rounded"
            />
            <p>Hvordan vil du beskrive hovedpersonen?</p>
            <textarea
              readOnly
              className="border p-4 h-20 rounded"
              placeholder="Sofie er en pige der er godt til at læse. Hun er nysgerrig og elsker at lære nye ting. Hun er også en god ven, der altid hjælper sine venner tror jeg."
            ></textarea>
          </section>
        </div>
      </section>

      <section className="mb-[30px]">
        <article className=" text-[20px] p-3 border flex justify-between mx-[12.5%] rounded md:text-3xl">
          <p>Hulen</p>
          <img className="rotate-90" src={pil} alt="Åbn-pil" />
        </article>
      </section>

      <section className="mb-[30px]">
        <article className=" text-[20px] p-3 border flex justify-between mx-[12.5%] rounded md:text-3xl">
          <p>Filosofi</p>
          <img className="rotate-90" src={pil} alt="Åbn-pil" />
        </article>
      </section>

      <section className="mb-[30px]">
        <article className=" text-[20px] p-3 border flex justify-between mx-[12.5%] rounded md:text-3xl">
          <p>Tidsrejse</p>
          <img className="rotate-90" src={pil} alt="Åbn-pil" />
        </article>
      </section>
    </>
  );
}
