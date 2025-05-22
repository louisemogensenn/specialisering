import React from "react";
import lyd from "../assets/hulelignelsen.mp3";

export default function Lydafspiller() {
  return (
    <aside className="flex justify-center">
      <audio src={lyd} controls></audio>
    </aside>
  );
}
