import React from "react";
import Overskrift from "../components/Overskrift";
import Beskrivelse from "../components/Beskrivelse";
import pil from "../assets/pil.svg"; // Importerer pil-ikonet
import { Link } from "react-router-dom"; // Importerer Link komponenten fra react-router-dom

export default function SofiesVerdenKlasse() {
  return (
    <>
      <Overskrift tekst={"SOFIES VERDEN - 5.A"} />
      <Beskrivelse
        tekst={
          "Her kan du se besvarelser, proces og mere for de elever, du har tilknyttet forløbet."
        }
      />
      <Link to="/elev">
        <section className="mb-[30px]">
          <article className=" text-[20px] p-3 border flex justify-between mx-[12.5%] rounded md:text-3xl">
            <p>Anne Hansen</p>
            <img src={pil} alt="Åbn-pil" />
          </article>
        </section>
      </Link>

      <Link to="#">
        <section className="mb-[30px]">
          <article className=" text-[20px] p-3 border flex justify-between mx-[12.5%] rounded md:text-3xl">
            <p>Benny Jørgensen</p>
            <img src={pil} alt="Åbn-pil" />
          </article>
        </section>
      </Link>

      <Link to="#">
        <section className="mb-[30px]">
          <article className=" text-[20px] p-3 border flex justify-between mx-[12.5%] rounded md:text-3xl">
            <p>Clara Sørensen</p>
            <img src={pil} alt="Åbn-pil" />
          </article>
        </section>
      </Link>
    </>
  );
}
