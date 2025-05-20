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
    </>
  )
}
