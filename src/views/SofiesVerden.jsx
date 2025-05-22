import React from 'react'
import Overskrift from '../components/Overskrift'
import Beskrivelse from '../components/Beskrivelse'
import Underoverskrift from '../components/Underoverskrift'
import Knap from '../components/Knap'

export default function SofiesVerden() {

  return (
    <>
      <Overskrift tekst={"SOFIES VERDEN"} />
      <Beskrivelse tekst={"Her er en oversigt over dine opgaver."} />
      <Underoverskrift tekst={"Kapitler"} />
      <Knap til="/kapitel" tekst={"Kapitel 1"} point="100"></Knap>
      <Knap til="#" tekst={"Kapitel 2"} point="250"></Knap>
      <Knap til="#" tekst={"Kapitel 3"} point="200"></Knap>
      <Knap til="#" tekst={"Kapitel 4"} point="400"></Knap>

      <Underoverskrift tekst={"Ekstra opgaver"} />
      <Knap til="/quiz" tekst={"Quiz"} point="100"></Knap>
      <Knap til="/tegn" tekst={"Tegn"} point="100"></Knap>
    </>
  )
}
