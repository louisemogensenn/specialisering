import React, { useEffect, useState } from "react";
import Overskrift from "../components/Overskrift";
import Underoverskrift from "../components/Underoverskrift";
import Beskrivelse from "../components/Beskrivelse";

export default function Shop() {
  const [tema, setTema] = useState(() => localStorage.getItem("tema") || "");

  // Kør dette hver gang tema ændrer sig
  useEffect(() => {
    // Fjern gamle tema-klasser
    document.body.classList.remove(
      "tema-roed",
      "tema-gul",
      "tema-groen",
      "tema-blaa"
    ); // Fjerner de gamle tema-klasser fra body, så der ikke er flere temaer aktive på samme tid

    // Tilføj det aktuelle tema
    document.body.classList.add(`tema-${tema}`); // Tilføjer tema-klassen til body. Klassen er i formatet tema-[farve] og tager [farve] fra state-variablen tema

    // Gem i localStorage så det huskes
    localStorage.setItem("tema", tema); // Gemmer det aktuelle tema i localStorage, så det kan hentes igen ved næste indlæsning af siden
  }, [tema]); // useEffect kører hver gang tema ændrer sig, så den kan opdatere body-klassen og localStorage

  return (
    <>
      <Overskrift tekst={"SHOP"} />
      <Beskrivelse
        tekst={
          "Velkommen til shoppen! Her kan du selv bestemme designet for din app. Optjen point ved at løse opgaver og lås op for nye seje features!"
        }
      />
      <Underoverskrift tekst={"Karakterer"} />
      <section className="flex justify-between mx-[12.5%]">
        {" "}
        {/* Themable klasse bruges til at ændre farverne på baggrunden af denne sektion baseret på det valgte tema */}
        <aside className="w-[60px] h-[120px] border rounded bg-[#FCF0F0] border-[#d13338]"></aside>{" "}
        {/* Hver karakter er repræsenteret af et aside-element med en bredde på 100px, en højde på 132px, en kant og afrundede hjørner */}
        <aside className="w-[60px] h-[120px] border rounded bg-[#FFF8E7] border-[#ffc538]"></aside>{" "}
        {/* Hver karakter er repræsenteret af et aside-element med en bredde på 100px, en højde på 132px, en kant og afrundede hjørner */}
        <aside className="w-[60px] h-[120px] border rounded bg-[#E7FEF0] border-[#17be55]"></aside>{" "}
        {/* Hver karakter er repræsenteret af et aside-element med en bredde på 100px, en højde på 132px, en kant og afrundede hjørner */}
        <aside className="w-[60px] h-[120px] border rounded bg-[#E8F5FF] border-[#0d22e8]"></aside>{" "}
        {/* Hver karakter er repræsenteret af et aside-element med en bredde på 100px, en højde på 132px, en kant og afrundede hjørner */}
      </section>

      <Underoverskrift tekst={"Tema"} />
      <section className="flex justify-between mx-[12.5%]">
        <aside
          onClick={() => setTema("roed")}
          className="w-[55px] h-[55px] border rounded bg-[#FCF0F0] border-[#d13338]"
        ></aside>{" "}
        {/* Klik på denne sektion ændrer temaet til rødt */}
        <aside
          onClick={() => setTema("gul")}
          className="w-[55px] h-[55px] border rounded bg-[#FFF8E7] border-[#ffc538]"
        ></aside>{" "}
        {/* Klik på denne sektion ændrer temaet til gult */}
        <aside
          onClick={() => setTema("groen")}
          className="w-[55px] h-[55px] border rounded bg-[#E7FEF0] border-[#17be55]"
        ></aside>{" "}
        {/* Klik på denne sektion ændrer temaet til grønt */}
        <aside
          onClick={() => setTema("blaa")}
          className="w-[55px] h-[55px] border rounded bg-[#E8F5FF] border-[#0d22e8]"
        ></aside>{" "}
        {/* Klik på denne sektion ændrer temaet til blåt */}
      </section>
    </>
  );
}
