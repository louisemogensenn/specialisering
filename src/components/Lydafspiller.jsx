import React from "react";
import lyd from "../assets/hulelignelsen.mp3";

export default function Lydafspiller() {
  return (
    <>
    <aside className="flex justify-center ml-[12.5%] mr-[12.5%] mt-4">
      <audio className="w-full" src={lyd} controls></audio>
    </aside>
    <p className="underline text-right mr-[12.5%] text-[12px]">Læs teksten</p>
    </>
  );
}
