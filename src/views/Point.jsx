import React from "react";
import Overskrift from "../components/Overskrift";
import { Link } from "react-router-dom";
import CallToActionKnap from "../components/CallToActionKnap";

export default function Point() {
  return (
    <>
      <Overskrift tekst={"SEJT, NAVN"} />
      <Overskrift tekst={"Du har optjent"} />
      <h1 className="text-5xl text-center mt-[10%]">100 POINT!</h1>{" "}
      {/* Skriften for denne tekst er 48px */}
      <section className="themable flex justify-around mx-[12.5%] mt-[40%] md:mt-[20%]">
        <CallToActionKnap til="/shop" tekst="SHOP" />
        <CallToActionKnap til="/sofiesverden" tekst="NÆSTE" />
      </section>
    </>
  );
}
