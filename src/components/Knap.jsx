import { Link } from "react-router-dom";
import React from "react";

export default function Knap({ til, tekst, point }) {
  return (
    <>
      <Link
        className="text-2xl p-3 border flex justify-between items-center mx-[12.5%] md:text-3xl lg:text-3xl"
        to={til}
      >
        <span>{tekst}</span>
        {point ? <span>{point}</span> : null}{" "}
        {/* Hvis point har en værdi vises denne værdi - ellers vises intet */}
        <svg
          width="11"
          height="20"
          viewBox="0 0 11 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.646447"
            y1="19.6464"
            x2="10.6464"
            y2="9.64645"
            stroke="black"
          />
          <line
            x1="10.6464"
            y1="10.3536"
            x2="0.646447"
            y2="0.353554"
            stroke="black"
          />
        </svg>
      </Link>
    </>
  );
}
