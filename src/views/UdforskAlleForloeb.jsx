import React from 'react'
import Knap from '../components/Knap' // Importerer Knap komponenten
import Overskrift from '../components/Overskrift'
import Beskrivelse from '../components/Beskrivelse'
import Sorter from '../components/Sorter' // Importerer Sorter komponenten

export default function UdforskAlleForloeb() {
  return (
    <>
    <Overskrift tekst="ALLE FORLØB" /> {/* Overskrift for siden */}
    <Beskrivelse tekst="Alle forløb er udarbejdet af Gyldendal" /> {/* Beskrivelse af siden */}
    <Sorter />
      <Knap til="/sofiesverden" tekst="Sofies Verden"/> {/* En knap, der linker til Sofies Verden */}
      <Knap til="#" tekst="Klods Hans"></Knap> {/* En knap, der linker til Klods Hans */}
      <Knap til="#" tekst="Anne Franks Dagbog"></Knap> {/* En knap, der linker til Anne Franks Dagbog */}
      <Knap til="#" tekst="Rosa Parks"></Knap> {/* En knap, der linker til Rosa Parks */}
      <Knap til="#" tekst="Oppenheimer"></Knap> {/* En knap, der linker til Oppenheimer */}
      <Knap til="#" tekst="Nelson Mandela"></Knap> {/* En knap, der linker til Nelson Mandela */}
    </>
  )
}
