import React from "react";
import lyd from "../assets/hulelignelsen.mp3";

export default function Lydafspiller() {
  return (
    <>
      <aside className="flex justify-center ml-[12.5%] mr-[12.5%] mt-4">
        {" "}
        {/* Giver afstand til kanten på 12.5% af skræmens bredde og centrerer lydafspilleren horisontalt */}
        <audio className="w-full" src={lyd} controls></audio>{" "}
        {/* Sætter lydafspilleren til at fylde hele bredden af dens container, som er centreret, og giver brugeren mulighed for at kontrollere afspilningen */}
      </aside>
      <p className="underline text-right mr-[12.5%] text-[12px] mt-[10px]">
        Læs teksten
      </p>{" "}
      {/* Giver teksten en underline, placerer den i højre side med 12.5% af skærmens bredde fra højre side, sætter tekststørrelsen til 12px og skaber en afstand på 10px til ovenstående */}
    </>
  );
}
