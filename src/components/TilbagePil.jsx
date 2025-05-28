import React from 'react';
import pil from '../assets/pil.svg';
import { useNavigate } from 'react-router-dom';

export default function TilbagePil({ destination = -1 }) {
  const navigation = useNavigate(); // Bruges til at få 1 tilbage i historikken

  const gaaTilbage = () => { // En funktion, gaaTilbage, der med pilesyntaxen er angivet i de krøllede parenteser
    if (destination === -1) { // Hvis destinationen er -1 navigeres der tilbage i historikken
      navigation(-1); // Gå tilbage i historikken
    } else { // Hvis destinationen er angivet, navigeres der til den angivne destination
      navigation(destination); // Gå til den angivne destination
    }
  };

  return (
    <img
      onClick={gaaTilbage}
      className='rotate-180 ml-[12.5%] cursor-pointer'
      src={pil}
      alt="Tilbagepil"
    />
  );
}
