import React from 'react'
import Knap from '../components/Knap'

export default function AlleForloeb() {
  return (
    <>
      <Knap til="/sofiesverden" tekst="Sofies Verden"/> {/* En knap, der linker til Sofies Verden */}
      <Knap til="#">Klods Hans</Knap> {/* En knap, der linker til Klods Hans */}
      <Knap til="#">Anne Franks Dagbog</Knap> {/* En knap, der linker til Anne Franks Dagbog */}
      <Knap til="#">Rosa Parks</Knap> {/* En knap, der linker til Rosa Parks */}
      <Knap til="#">Oppenheimer</Knap> {/* En knap, der linker til Oppenheimer */}
      <Knap til="#">Nelson Mandela</Knap> {/* En knap, der linker til Nelson Mandela */}
    </>
  )
}
