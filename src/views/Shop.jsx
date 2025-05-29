import React, { useEffect, useState } from "react";
import Overskrift from "../components/Overskrift";
import Beskrivelse from "../components/Beskrivelse";
import pil from "../assets/pil.svg"; // Importerer pil-ikonet
import frisureEt from "../assets/frisureEt.svg"; // Importerer frisure-billedet
import frisureTo from "../assets/frisureTo.svg"; // Importerer frisure-billedet
import frisureTre from "../assets/frisureTre.svg"; // Importerer frisure-billedet
import ansigtEt from "../assets/ansigtEt.svg"; // Importerer ansigt-billedet
import ansigtTo from "../assets/ansigtTo.svg"; // Importerer ansigt-billedet
import ansigtTre from "../assets/ansigtTre.svg"; // Importerer ansigt-billedet
import skoEt from "../assets/skoEt.svg"; // Importerer sko-billedet
import skoTo from "../assets/skoTo.svg"; // Importerer sko-billedet
import skoTre from "../assets/skoTre.svg"; // Importerer sko-billedet
import CallToActionKnap from "../components/CallToActionKnap"; // Importerer CallToActionKnap komponenten
import shopfigur from "../assets/popshopfigur.svg"; // Importerer shop-figuren
import koebtvare from "../assets/koebtvare.svg"; // Importerer billede for købt vare

export default function Shop() {
  const [tema, setTema] = useState(() => sessionStorage.getItem("tema") || ""); // Dette hook gør det muligt at hente det aktuelle tema fra sessionStorage, så det huskes ved genindlæsning af siden. Hvis der ikke er noget tema gemt, starter den med en tom streng.
  const [popup, setPopup] = useState(false); // Tilstand for at vise popup
  const [varenKoebt, setVarenKoebt] = useState(false); // <- ny state

  const handleKoeb = () => {
    setVarenKoebt(true); // Skift indholdet i popup
    setTimeout(() => {
      setPopup(false); // Luk popup
      setVarenKoebt(false); // Nulstil til næste gang popup vises
    }, 3000);
  };

  const handleAfbryd = () => {
    setPopup(false); // Lukker popup uden at ændre noget
  };

  // Kør dette hver gang tema ændrer sig
  useEffect(() => {
    // Fjern gamle tema-klasser
    document.body.classList.remove("tema-roed", "tema-gul", "tema-groen"); // Fjerner de gamle tema-klasser fra body, så der ikke er flere temaer aktive på samme tid

    // Tilføj det aktuelle tema
    document.body.classList.add(`tema-${tema}`); // Tilføjer tema-klassen til body. Klassen er i formatet tema-[farve] og tager [farve] fra state-variablen tema

    // Gem i sessionStorage så det huskes
    sessionStorage.setItem("tema", tema); // Gemmer det aktuelle tema i sessionStorage, så det kan hentes igen ved næste indlæsning af siden
  }, [tema]); // useEffect kører hver gang tema ændrer sig, så den kan opdatere body-klassen og sessionStorage

  return (
    <>
      <section className="mb-[20%]">
        <br />
        <Overskrift tekst={"HEJ!"} />
        <Beskrivelse
          tekst={
            "Mit navn er Lumo -  og jeg glæder mig til at lære en masse sammen med dig!"
          }
        />
        <img
          src={shopfigur}
          alt="Brand Character"
          className="mx-auto mb-[10%] mt-[10%] w-[200px] md:w-[300px]"
        />
        <p className="mx-[12.5%] text-[16px] md:text-[20px]">
          Jeg har ikke en fast definition på rigtig og forkert, fordi jeg tror
          på, at sandheden og moral formes hos dig. <br /> Jeg har derfor ingen
          fast form, frisure eller påklædning. Dog har jeg to store øjne, der
          fungerer som spejle. De reflekterer ikke verden, men din måde at se
          den på. <br /> Derfor vil jeg lade det være op til dig -{" "}
          <span className="font-bold">Hvordan synes du jeg skal se ud?</span>
        </p>
      </section>
      <aside className="mt-[-10%]">
        <Overskrift tekst={"SHOP"} />
      </aside>
      <br />
      <p className="mx-[12.5%]">
        Velkommen til shoppen! Her kan du selv bestemme designet for din app.
        Optjen point ved at løse opgaver og lås op for nye seje features!
      </p>
      <br />

      {/* SEKTION MED TEMAER */}
      <h1 className="font-bold mx-[12.5%] text-[15px] md:text-2xl">Temaer</h1>
      <br />
      <section className="flex justify-between mx-[12.5%]">
        <img src={pil} alt="Pil til venstre" className="rotate-180" />
        <aside>
          <aside
            onClick={() => setTema("roed")}
            className="w-[75px] h-[75px] border rounded bg-[#FCF0F0] border-[#d13338] md:w-[100px] md:h-[100px]"
          ></aside>
        </aside>
        {/* Klik på denne sektion ændrer temaet til rødt */}
        <aside>
          <aside
            onClick={() => setTema("gul")}
            className="w-[75px] h-[75px] border rounded bg-[#FFF8E7] border-[#ffc538] md:w-[100px] md:h-[100px]"
          ></aside>
        </aside>
        {/* Klik på denne sektion ændrer temaet til gult */}
        <aside>
          <aside
            onClick={() => setTema("groen")}
            className="w-[75px] h-[75px] border rounded bg-[#E7FEF0] border-[#17be55] md:w-[100px] md:h-[100px]"
          ></aside>
        </aside>
        {/* Klik på denne sektion ændrer temaet til grønt */}
        <img src={pil} alt="Pil til højre" />
      </section>

      {/* SEKTION MED FRISURE */}
      <br />
      <h1 className="font-bold mx-[12.5%] text-[15px] md:text-2xl">Frisure</h1>
      <p className="mx-[12.5%] text-[12px] md:text-[20px]">
        Find din favorit og klik for at købe den
      </p>
      <section className="flex justify-between mx-[12.5%]">
        <img src={pil} alt="Pil til venstre" className="rotate-180" />{" "}
        {/* PIL TIL VENSTRE I FRSURE */}
        {/* VÆLG FRISUTRE ET */}
        <aside
          className="flex flex-col items-center"
          onClick={() => setPopup(true)}
        >
          <div className="w-[75px] h-[75px] border rounded md:w-[100px] md:h-[100px] relative overflow-hidden">
            {/* Halvcirkel i bunden */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[50%] bg-[#d9d9d9] rounded-tl-full rounded-tr-full"></div>

            {/* Frisure */}
            <img
              src={frisureEt}
              alt="Frisure Et"
              className="absolute top-[75%] left-1/2 object-contain transform -translate-x-1/2 -translate-y-1/2 md:w-[110%]"
            />
          </div>
          <p className="text-center text-[10px] md:text-[15px]">100 point</p>
        </aside>
        {/* VÆLG FRISUTRE TO */}
        <aside className="flex flex-col items-center">
          <div className="w-[75px] h-[75px] border rounded md:w-[100px] md:h-[100px] relative overflow-hidden">
            {/* Halvcirkel i bunden */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[50%] bg-[#d9d9d9] rounded-tl-full rounded-tr-full"></div>

            {/* Frisuren */}
            <img
              src={frisureTo}
              alt="Frisure To"
              className="absolute top-[63%] left-1/2 object-contain transform -translate-x-1/2 -translate-y-1/2 md:w-[110%]"
            />
          </div>
          <p className="text-center text-[10px] md:text-[15px]">100 point</p>
        </aside>
        {/* VÆLG FRISURE TRE */}
        <aside className="flex flex-col items-center">
          <div className="w-[75px] h-[75px] border rounded md:w-[100px] md:h-[100px] relative overflow-hidden">
            {/* Halvcirkel i bunden */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[50%] bg-[#d9d9d9] rounded-tl-full rounded-tr-full"></div>

            {/* Frisuren */}
            <img
              src={frisureTre}
              alt="Frisure Tre"
              className="absolute top-[55%] left-1/2 object-contain transform -translate-x-1/2 -translate-y-1/2 md:w-[110%]"
            />
          </div>
          <p className="text-center text-[10px] md:text-[15px]">100 point</p>
        </aside>
        <img src={pil} alt="Pil til højre" /> {/* PIL TIL HØJRE I FRSURE */}
      </section>

      <br />
      <h1 className="font-bold mx-[12.5%] text-[15px] md:text-2xl">
        Ansigtsudtryk
      </h1>
      <p className="mx-[12.5%] text-[12px] md:text-[20px]">
        Find din favorit og klik for at købe den
      </p>

      {/* SEKTION MED ANSIGT */}
      <section className="flex justify-between mx-[12.5%]">
        <img src={pil} alt="Pil til venstre" className="rotate-180" />{" "}
        {/* PIL TIL VENSTRE I ANSIGT */}
        {/* VÆLG ANSIGT ET */}
        <aside className="flex flex-col items-center">
          <div className="w-[75px] h-[75px] border rounded md:w-[100px] md:h-[100px] relative overflow-hidden">
            {/* Halvcirkel i bunden */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[80%] bg-[#d9d9d9] rounded-bl-[55%_90%] rounded-br-[55%_90%] rotate-180"></div>

            {/* Ansigtet */}
            <img
              src={ansigtEt}
              alt="Ansigt et"
              className="absolute top-[67%] left-1/2 object-contain transform -translate-x-1/2 -translate-y-1/2 md:w-[50%]"
            />
          </div>
          <p className="text-center text-[10px] md:text-[15px]">100 point</p>
        </aside>
        {/* VÆLG ANSIGT TO */}
        <aside className="flex flex-col items-center">
          <div className="w-[75px] h-[75px] border rounded md:w-[100px] md:h-[100px] relative overflow-hidden">
            {/* Halvcirkel i bunden */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[80%] bg-[#d9d9d9] rounded-bl-[55%_90%] rounded-br-[55%_90%] rotate-180"></div>

            {/* Ansigtet */}
            <img
              src={ansigtTo}
              alt="Ansigt to"
              className="absolute top-[67%] left-1/2 object-contain transform -translate-x-1/2 -translate-y-1/2 md:w-[70%]"
            />
          </div>
          <p className="text-center text-[10px] md:text-[15px]">100 point</p>
        </aside>
        {/* VÆLG ANSIGT TRE */}
        <aside className="flex flex-col items-center">
          <div className="w-[75px] h-[75px] border rounded md:w-[100px] md:h-[100px] relative overflow-hidden">
            {/* Halvcirkel i bunden */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[80%] bg-[#d9d9d9] rounded-bl-[55%_90%] rounded-br-[55%_90%] rotate-180"></div>

            {/* Ansigtet */}
            <img
              src={ansigtTre}
              alt="Ansigt tre"
              className="absolute top-[67%] left-1/2 object-contain transform -translate-x-1/2 -translate-y-1/2 md:w-[50%]"
            />
          </div>
          <p className="text-center text-[10px] md:text-[15px]">100 point</p>
        </aside>
        <img src={pil} alt="Pil til højre" /> {/* PIL TIL HØJRE I ANSIGT */}
      </section>

      <br />
      <h1 className="font-bold mx-[12.5%] text-[15px] md:text-2xl">Sko</h1>
      <p className="mx-[12.5%] text-[12px] md:text-[20px]">
        {" "}
        {/* Sææter afstand i siderne til 12.5%, teksten til 12px - denne bliver 20px på større skærme */}
        Find din favorit og klik for at købe den
      </p>

      {/* SEKTION MED SKO */}
      <section className="flex justify-between mx-[12.5%]">
        <img src={pil} alt="Pil til venstre" className="rotate-180" />{" "}
        {/* PIL TIL VENSTRE I SKO */}
        {/* VÆLG SKO ET */}
        <aside className="flex flex-col items-center">
          <div className="w-[75px] h-[75px] border rounded md:w-[100px] md:h-[100px] relative overflow-hidden">
            {/* Halvcirkel i toppen */}
            <div className="absolute top-0 rotate-180 left-1/2 transform -translate-x-1/2 w-[80%] h-[50%] bg-[#d9d9d9] rounded-tl-full rounded-tr-full z-50"></div>

            {/* Sko */}
            <img
              src={skoEt}
              alt="Sko Et"
              className="absolute top-[60%] left-1/2 object-contain transform -translate-x-1/2 -translate-y-1/2 md:w-[70%] z-40"
            />
          </div>
          <p className="text-center text-[10px] md:text-[15px]">100 point</p>
        </aside>
        {/* VÆLG SKO TO */}
        <aside className="flex flex-col items-center">
          <div className="w-[75px] h-[75px] border rounded md:w-[100px] md:h-[100px] relative overflow-hidden">
            {/* Halvcirkel i toppen */}
            <div className="absolute top-0 rotate-180 left-1/2 transform -translate-x-1/2 w-[80%] h-[50%] bg-[#d9d9d9] rounded-tl-full rounded-tr-full z-50"></div>

            {/* Sko */}
            <img
              src={skoTo}
              alt="Sko To"
              className="absolute top-[60%] left-1/2 object-contain transform -translate-x-1/2 -translate-y-1/2 md:w-[70%] z-40"
            />
          </div>
          <p className="text-center text-[10px] md:text-[15px]">100 point</p>
        </aside>
        {/* VÆLG SKO TRE */}
        <aside className="flex flex-col items-center">
          <div className="w-[75px] h-[75px] border rounded md:w-[100px] md:h-[100px] relative overflow-hidden">
            {/* Halvcirkel i toppen */}
            <div className="absolute top-0 rotate-180 left-1/2 transform -translate-x-1/2 w-[80%] h-[50%] bg-[#d9d9d9] rounded-tl-full rounded-tr-full z-50"></div>

            {/* Sko */}
            <img
              src={skoTre}
              alt="Sko Et"
              className="absolute top-[60%] left-1/2 object-contain transform -translate-x-1/2 -translate-y-1/2 md:w-[70%] z-40"
            />
          </div>
          <p className="text-center text-[10px] md:text-[15px]">100 point</p>
        </aside>
        <img src={pil} alt="Pil til højre" /> {/* PIL TIL HØJRE I SKO */}
      </section>

      <br />

      {popup && (
        <aside
          className="fixed inset-0 flex items-center justify-center z-50"
          aria-modal="true"
          role="dialog"
        >
          <article className="themable p-8 rounded max-w-sm mx-4 text-center border bg-white">
            {varenKoebt ? (
              <>
                <h1 className="text-xl font-bold mb-4">
                  {" "}
                  {/* Text er 20 px og fed og har en afstand på 16px til nedstående */}
                  Yay! Du har nu købt varen!
                </h1>
                <img
                  className="mx-auto"
                  src={koebtvare}
                  alt="Billede af brand character"
                />
              </>
            ) : (
              <>
                <p className="mb-6">Du ser sej ud!</p>{" "}
                {/* margin-bottom er sat til 24px */}
                <img
                  className="mx-auto"
                  src={shopfigur}
                  alt="Billede af brand character"
                />
                <p>Vil du købe denne vare?</p>
                <br />
                <section className="flex justify-center gap-6">
                  {" "}
                  {/* Afstanden mellem elementerne er 24px */}
                  <CallToActionKnap tekst={"TILBAGE"} onClick={handleAfbryd} />
                  <CallToActionKnap tekst={"KØB VARE"} onClick={handleKoeb} />
                </section>
              </>
            )}
          </article>
        </aside>
      )}
    </>
  );
}
