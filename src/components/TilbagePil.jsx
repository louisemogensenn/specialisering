import React from 'react'
import pil from '../assets/pil.svg'
import { useNavigate } from 'react-router-dom'

export default function TilbagePil() {

  const navigation = useNavigate();

  const gaaTilbage = () => {
    navigation(-1); // Når denne funktion kaldes, navigeres der tilbage til den forrige side som brugeren var på
  }

  return (
      <img onClick={gaaTilbage} className='rotate-180 ml-[12.5%]' src={pil} alt="Tilbagepil" /> 
  )
}
