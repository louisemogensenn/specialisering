import React from 'react'
import pil from '../assets/pil.svg'
import { useNavigate } from 'react-router-dom'

export default function TilbagePil() {

  const navigation = useNavigate(); // useNavigate er en hook fra react-router-dom, der giver mulighed for at navigere i applikationen

  const gaaTilbage = () => { // En funktion, der kaldes, når brugeren klikker på tilbagepilen
    navigation(-1); // Når denne funktion kaldes, navigeres der tilbage til den forrige side som brugeren var på
  }

  return (
      <img onClick={gaaTilbage} className='rotate-180 ml-[12.5%]' src={pil} alt="Tilbagepil" />
  // Pilen får klik-funktionen tilføjet og roteres 180 grader, så den peger mod venstre. Den er placeret 12.5% fra venstre kant af skærmen
  )
}
