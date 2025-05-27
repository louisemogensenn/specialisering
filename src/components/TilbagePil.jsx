import React from 'react';
import pil from '../assets/pil.svg';
import { useNavigate } from 'react-router-dom';

export default function TilbagePil({ destination = -1 }) {
  const navigation = useNavigate();

  const gaaTilbage = () => {
    if (destination === -1) {
      navigation(-1);
    } else {
      navigation(destination);
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
