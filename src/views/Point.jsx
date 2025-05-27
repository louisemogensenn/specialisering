import React from "react";
import Overskrift from "../components/Overskrift";
import CallToActionKnap from "../components/CallToActionKnap";
import flot from "../assets/flotBrandCharacter.svg"; // Importerer et billede af en glad brand karakter

export default function Point() {
  return (
    <>
      <Overskrift tekst={"GODT GÅET!"} />
      <br />
      <Overskrift tekst={"Du har optjent"} />
      <br />
      <img src={flot} alt="Glad brand character" className="mx-auto w-[200px]"/>
      <h1 className="text-5xl text-center mt-[5%] md:mt-0">{"100 POINT!"}</h1>{" "}
      <section className="themable flex justify-around mx-[12.5%] mt-[20%] md:mt-[3%]">
        <CallToActionKnap til="/shop" tekst="SHOP" />
        <CallToActionKnap til="/sofiesverden" tekst="NÆSTE" />
      </section>
    </>
  );
}
