import React from "react";
import Overskrift from "../components/Overskrift";
import Beskrivelse from "../components/Beskrivelse";
import Knap from "../components/Knap";
import { useAuth } from "../context/AuthContext";
import Underoverskrift from "../components/Underoverskrift";
import { useState } from "react"; // Importerer useState for at håndtere komponentens tilstand
import velkomstlumo from "../assets/velkomstlumo.svg"; // Importerer velkomstbilledet
import { useLocation } from "react-router-dom"; // Importerer useLocation for at få adgang til location-objektet
import CallToActionKnap from "../components/CallToActionKnap"; // Importerer CallToActionKnap komponenten

export default function MineForloeb() {
  const { role, name, loading } = useAuth(); // Bruges til at undersøge, hvilke brugerrolle typen har
  const location = useLocation(); // Bruges til at få adgang til lokationen, så der kan tjekkes, om brugeren kommer fra logind-siden

  const [visVelkomst, setVisVelkomst] = useState(() => location.state?.fromLogin === true); // Initialiserer visVelkomst til true, hvis brugeren kommer fra logind-siden

  if (loading) { // Hvis siden loades
    return <p>Indlæser...</p>; // 👈 Vent på brugerdata
  }

  return (
    <>
      <Overskrift tekst={"MINE FORLØB"} />

      {role === "elev" && (
        <>
          <Beskrivelse tekst={"Her er en oversigt over dine opgaver"} />
          <br />
          <Underoverskrift tekst={"Forløb"} />
          <Knap til="/sofiesverden" tekst="Sofies Verden" />

          {visVelkomst && ( // Hvis brugeren er en elev og hvis brugeren kommer fra logind-siden vises denne velkomstbesked
            <aside
              className="fixed inset-0 flex items-center justify-center z-50"
              aria-modal="true"
              role="dialog"
            >
              <article className="themable p-8 rounded border max-w-[350px]">
                <h1 className="text-2xl text-center ">
                  HEJ {name.toUpperCase()}! {/* Navnet hentes fra auth og sættes til at være store bogstaver */}
                </h1>
                <br />
                <section>
                  <p className="text-[12px]">
                    Velkommen til Gyldendals læringsplatform!
                    <br />
                    <br /> Lad Lumo tage dig igennem en eventyrlig fortælling -
                    tryk på start - eller læs selv. Du vil blive præsenteret for
                    forskellige læringsforløb, som din underviser tildeler dig.
                    <br />
                    <br /> Der er ingen tidsbegrænsning, så gør dig umage og
                    overvej dine svar - dét betaler sig!
                    <br />
                    <br /> Ved at færdiggøre dine opgaver, optjener du point,
                    som du kan benytte i shoppen. <br /> <br /> God fornøjelse!
                  </p>
                </section>
                <img
                  src={velkomstlumo}
                  alt="Velkomst Lumo"
                  className="mx-auto mt-[5%] mb-[10%]"
                />

                <aside className="flex justify-center">
                  <CallToActionKnap tekst={"START"} onClick={() => setVisVelkomst(false)}/> {/* Skjules ved klik på start */}
                </aside>
              </article>
            </aside>
          )}
        </>
      )}

      {role === "underviser" && ( // Hvis brugeren er en underviser
        <>
          <Beskrivelse tekst={"Her er en oversigt over dine forløb"} />
          <br />
          <Knap til="#" tekst="Anne Franks Dagbog" point="5.B" />
          <Knap til="/sofiesverdenklasse" tekst="Sofies Verden" point="5.A" />
        </>
      )}
    </>
  );
}
