import React from "react";
import Overskrift from "../components/Overskrift";
import gyldendallogo from "../assets/gyldendal.svg";

export default function LogInd() {
  return (
    <section className="themable"> {/* 'themable' er en klasse, der kan bruges til at ændre temaet for denne sektion */ }
      <img
        className="w-[300px] h-[60px] mx-auto mb-16" // Billedet er centreret og har en bredde på 300px og en højde på 60px
        src={gyldendallogo} // Importeret logo fra assets-mappen
        alt="Gyldendal Logo" // Alternativ tekst for billedet
      />

      <Overskrift tekst="LOG IND" /> {/* Overskrift-komponenten bruges til at vise titlen "LOG IND" */ }

      <section className="flex flex-col mx-[12.5%] my-8"> {/* Flexbox bruges til at arrangere indholdet i en kolonne med margin på 12.5% fra siderne og 8px fra toppen og bunden */ }
        <form className="flex flex-col gap-6"> {/* Formularen er en kolonne med mellemrum imellem hvert element */ }
          <aside>
            <label htmlFor="brugernavn" className="text-lg mb-2"> {/* Label for inputfeltet, der angiver, at det er til brugernavn */ }
              Brugernavn
            </label>
            <input
              className="w-full h-12 border px-3" // Inputfeltet har en bredde på 100%, en højde på 48px, en kant og padding på 12px
              type="text" // Inputfeltet er af typen tekst
              placeholder="Indtast brugernavn" // Pladsholdertekst, der vises i inputfeltet, når det er tomt
              required // Angiver, at dette felt er obligatorisk at udfylde
            />
          </aside>

          <aside>
            <label className="text-lg mb-2"> {/* Label for adgangskode-inputfeltet */ }
              Adgangskode
            </label>
            <input
              className="w-full h-12 border px-3" // Inputfeltet har samme styling som brugernavn-inputfeltet
              type="password" // Inputfeltet er af typen adgangskode, hvilket skjuler indtastede tegn
              placeholder="Indtast adgangskode" // Pladsholdertekst for adgangskode-inputfeltet
              required // Angiver, at dette felt også er obligatorisk at udfylde
            />
          </aside>

          <button
            type="submit" // Knappen er af typen submit, hvilket betyder, at den sender formularen, når den klikkes
            className="text-2xl border px-6 py-3 w-fit mx-auto" // Knappen har en tekststørrelse på 24px, en kant, padding på 24px i x-retning og 12px i y-retning, og den er centreret horisontalt
          >
            LOG IND
          </button>
        </form>
        <aside className="flex flex-col text-center gap-6 mt-[10%]"> {/* En aside, der centrerer teksten og giver mellemrum mellem elementerne */ }
          <p className="text-[20px] underline">Glemt kodeord?</p> {/* Understreget tekst for at indikere, at dette er et link eller en handling */ }
          <p className="text-[20px] underline">Ikke medlem? Opret dig</p> {/* Understreget tekst for at indikere, at dette er et link eller en handling */ }
        </aside>
      </section>
    </section>
  );
}
