import React, { useEffect, useState } from "react";
import Overskrift from "../components/Overskrift";
import Underoverskrift from "../components/Underoverskrift";

export default function Shop() {
  const [tema, setTema] = useState(() => localStorage.getItem("tema") || "");

  // Kør dette hver gang tema ændrer sig
  useEffect(() => {
    // Fjern gamle tema-klasser
    document.body.classList.remove("tema-roed", "tema-gul", "tema-groen", "tema-blaa"); // Fjerner de gamle tema-klasser fra body, så der ikke er flere temaer aktive på samme tid

    // Tilføj det aktuelle tema
    document.body.classList.add(`tema-${tema}`); // Tilføjer tema-klassen til body. Klassen er i formatet tema-[farve] og tager [farve] fra state-variablen tema

    // Gem i localStorage så det huskes
    localStorage.setItem("tema", tema); // Gemmer det aktuelle tema i localStorage, så det kan hentes igen ved næste indlæsning af siden
  }, [tema]); // useEffect kører hver gang tema ændrer sig, så den kan opdatere body-klassen og localStorage

  return (
    <>
      <Overskrift tekst={"SHOP"} />
      <Underoverskrift tekst={"Karakterer"} />
      <section className="themable flex justify-between mx-[12.5%]"> {/* Themable klasse bruges til at ændre farverne på baggrunden af denne sektion baseret på det valgte tema */}
        <aside className="w-[100px] h-[132px] border rounded"></aside> {/* Hver karakter er repræsenteret af et aside-element med en bredde på 100px, en højde på 132px, en kant og afrundede hjørner */}
        <aside className="w-[100px] h-[132px] border rounded"></aside> {/* Hver karakter er repræsenteret af et aside-element med en bredde på 100px, en højde på 132px, en kant og afrundede hjørner */}
        <aside className="w-[100px] h-[132px] border rounded"></aside> {/* Hver karakter er repræsenteret af et aside-element med en bredde på 100px, en højde på 132px, en kant og afrundede hjørner */}
      </section>

      <Underoverskrift tekst={"Tema"} />
      <section className="themable flex justify-between mx-[12.5%]">
        <aside onClick={() => setTema("roed")} className="w-[55px] h-[55px] border rounded bg-[#FCF0F0]"></aside> {/* Klik på denne sektion ændrer temaet til rødt */}
        <aside onClick={() => setTema("gul")} className="w-[55px] h-[55px] border rounded bg-[#FFF8E7]"></aside> {/* Klik på denne sektion ændrer temaet til gult */}
        <aside onClick={() => setTema("groen")} className="w-[55px] h-[55px] border rounded bg-[#E7FEF0]"></aside> {/* Klik på denne sektion ændrer temaet til grønt */}
        <aside onClick={() => setTema("blaa")} className="w-[55px] h-[55px] border rounded bg-[#E8F5FF]"></aside> {/* Klik på denne sektion ændrer temaet til blåt */}
      </section>
    </>
  );
}
