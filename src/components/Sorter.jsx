import React from "react";
import { useState } from "react";

export default function Sorter() {
  const [aaben, setAaben] = useState(false); // React-hook, der bruges til at "vise" eller "skjule" dropdown

  return (
    <>
        <aside className="dropdown">
          <button className="dropbtn" onClick={() => setAaben(!aaben)}>
            Sorter
          </button>
          {aaben && (
            <div className="dropdown-content">
              <a href="#">Seneste</a>
              <a href="#">Ældste</a>
              <a href="#">Afsluttet</a>
            </div>
          )}
        </aside>
    </>
  );
}
