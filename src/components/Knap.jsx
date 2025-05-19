import { Link } from "react-router-dom";
import React from "react";

export default function Knap({ til, tekst, point }) {
  return (
    <>
      <Link className="w-3/4" to={til}>
        <span>{tekst}</span>
        {point ? <span>{point}</span> : null}
        {/* Hvis point har en værdi vises denne værdi - ellers vises intet */}
      </Link>
    </>
  );
}
