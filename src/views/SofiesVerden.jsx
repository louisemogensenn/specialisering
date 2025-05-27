import React from "react";
import Overskrift from "../components/Overskrift";
import Beskrivelse from "../components/Beskrivelse";
import Underoverskrift from "../components/Underoverskrift";
import Knap from "../components/Knap";
import pil from "../assets/pil.svg"; // Importerer pil-ikonet
import { useState } from "react"; // Importerer useState for at håndtere komponentens tilstand
import CallToActionKnap from "../components/CallToActionKnap"; // Importerer CallToActionKnap komponenten
import { useAuth } from "../context/AuthContext"; // Importerer AuthContext for at få adgang til brugerens rolle
import { useProgress } from "../context/ProgressContext"; // Importerer ProgressContext for at få adgang til opgaver

export default function SofiesVerden() {
  const [aabenHovedpersonen, setAabenHovedpersonen] = useState(false);
  const [aabenHulen, setAabenHulen] = useState(false);
  const [visPopup, setVisPopup] = useState(false); // State for at styre visning af popup
  const { role } = useAuth();
  const { faerdigeOpgaver } = useProgress();
  const erHovedpersonenLøst = faerdigeOpgaver.includes("hovedpersonen");
  const erHulenLøst = faerdigeOpgaver.includes("hulen");
  const erFilosofiLøst = faerdigeOpgaver.includes("filosofi");
  const erTidsrejseLøst = faerdigeOpgaver.includes("tidsrejse");
  const erQuizLøst = faerdigeOpgaver.includes("quiz");
  const erTegnLøst = faerdigeOpgaver.includes("tegn");

  if (!role) {
    return <p>Indlæser...</p>; // eller vis en spinner, hvis ønsket
  }

  return (
    <>
      <Overskrift tekst={"SOFIES VERDEN"} /> {/* Overskrift for siden */}
      {role === "elev" && (
        <>
          <Beskrivelse tekst={"Her er en oversigt over dine opgaver."} />{" "}
          {/* Beskrivelse af siden */}
          <br />
          <Underoverskrift tekst={"Opgaver"} />
          {/* Underoverskrift for kapitler */}
          <Knap
            til={erHovedpersonenLøst ? "#" : "/hovedpersonen"}
            tekst="Hovedpersonen"
            point="100 POINT"
            disabled={erHovedpersonenLøst}
          />
          <Knap
            til={erHulenLøst ? "#" : "/hulen"}
            tekst="Hulen"
            point="100 POINT"
            disabled={erHulenLøst}
          />
          <Knap
            til={erFilosofiLøst ? "#" : "/filosofi"}
            tekst="Filosofi"
            point="100 POINT"
            disabled={erFilosofiLøst}
          />
          <Knap
            til={erTidsrejseLøst ? "#" : "#"}
            tekst="Tidsrejse"
            point="100 POINT"
            disabled={erTidsrejseLøst}
          />
          <br />
          <Underoverskrift tekst={"Ekstraopgaver"} />
          <Knap
            til={erQuizLøst ? "#" : "/quiz"}
            tekst="Quiz"
            point="100 POINT"
            disabled={erQuizLøst}
          />
          <Knap
            til={erTegnLøst ? "#" : "/tegn"}
            tekst="Tegn"
            point="100 POINT"
            disabled={erTegnLøst}
          />
        </>
      )}
      {role === "underviser" && (
        <>
          <Beskrivelse
            tekst={
              "I dette forløb møder eleverne Sofie, en helt almindelig pige, der en dag modtager et mystisk brev med spørgsmålet: Hvem er du? Det bliver starten på en rejse gennem filosofiens historie, hvor de lærer om store tænkere som Sokrates, Platon og Descartes.Eleverne arbejder med undren, identitet og store spørgsmål om livet. De læser uddrag, ser klip og diskuterer deres egne tanker.  Forløbet styrker både læseforståelse og evnen til at reflektere – og giver dem sprog til at tænke over, hvem de selv er."
            }
          />{" "}
          {/* Beskrivelse af Sofies Verden forløbet */}
          <section className="mb-[30px]">
            <article
              className=" text-[20px] p-3 border flex justify-between mx-[12.5%] rounded md:text-3xl"
              onClick={() => setAabenHovedpersonen(!aabenHovedpersonen)}
            >
              <p>Hovedpersonen</p>
              <img
                className={`transition-transform duration-300 ${
                  aabenHovedpersonen ? "rotate-270" : "rotate-90"
                }`}
                src={pil}
                alt="Åbn-pil"
              />
            </article>
            <div
              className={`transition-max-height duration-300 overflow-hidden ease-in-out ${
                aabenHovedpersonen ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <section className="text-[16px] p-3 border flex flex-col gap-6 mx-[12.5%] rounded md:text-2xl">
                <p>Hvad hedder hovedpersonen?</p>
                <input
                  readOnly
                  placeholder="Skriv din besvarelse her..."
                  className="border w-full p-4 rounded"
                />
                <p>Hvordan vil du beskrive hovedpersonen?</p>
                <textarea
                  readOnly
                  className="border p-4 h-20 rounded"
                  placeholder="Skriv din besvarelse her..."
                ></textarea>
              </section>
            </div>
          </section>
          <section className="mb-[30px]">
            <article
              className=" text-[20px] p-3 border flex justify-between mx-[12.5%] rounded md:text-3xl"
              onClick={() => setAabenHulen(!aabenHulen)}
            >
              <p>Hulen</p>
              <img
                className={`transition-transform duration-300 ${
                  aabenHulen ? "rotate-270" : "rotate-90"
                }`}
                src={pil}
                alt="Åbn-pil"
              />
            </article>
            <div
              className={`transition-max-height duration-300 overflow-hidden ease-in-out ${
                aabenHulen ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <section className="text-[16px] p-3 border flex flex-col gap-6 mx-[12.5%] rounded md:text-2xl">
                <p>Hvad ville du gøre, hvis du sad i Hulen?</p>
                <textarea
                  readOnly
                  className="border p-4 h-20 rounded"
                  placeholder="Skriv din besvarelse her..."
                ></textarea>
              </section>
            </div>
          </section>
          <section className="mb-[30px]">
            <article className=" text-[20px] p-3 border flex justify-between mx-[12.5%] rounded md:text-3xl">
              <p>Filosofi</p>
              <img className="rotate-90" src={pil} alt="Åbn-pil" />
            </article>
          </section>
          <section className="mb-[30px]">
            <article className=" text-[20px] p-3 border flex justify-between mx-[12.5%] rounded md:text-3xl">
              <p>Tidsrejse</p>
              <img className="rotate-90" src={pil} alt="Åbn-pil" />
            </article>
          </section>
          <p className="text-[12px] font-bold ml-[12.5%]">Ekstraopgaver</p>
          <section className="mb-[30px]">
            <article className=" text-[20px] p-3 border flex justify-between mx-[12.5%] rounded md:text-3xl">
              <p>Quiz</p>
              <img className="rotate-90" src={pil} alt="Åbn-pil" />
            </article>
          </section>
          <section className="mb-[30px]">
            <article className=" text-[20px] p-3 border flex justify-between mx-[12.5%] rounded md:text-3xl">
              <p>Tegn</p>
              <img className="rotate-90" src={pil} alt="Åbn-pil" />
            </article>
          </section>
          <article className="flex justify-center">
            <CallToActionKnap
              tekst="OPRET FORLØB"
              onClick={() => {
                setVisPopup(true);
              }}
            />
          </article>
          {visPopup && (
            <aside
              className="fixed inset-0 flex items-center justify-center z-50"
              aria-modal="true"
              role="dialog"
            >
              <article className="themable p-8 rounded max-w-sm mx-4 text-center border">
                <h1>Sofies Verden</h1>
                <p>
                  Du er ved at oprette forløbet "Sofies Verden". <br /> Hvem
                  ønsker du at oprette forløbet for?
                </p>
                <form className="flex flex-col justify-start">
                  <aside>
                    <input type="radio" />
                    <label>5.A</label>
                  </aside>
                  <aside>
                    <input type="radio" />
                    <label>5.B</label>
                  </aside>
                  <aside>
                    <input type="radio" />
                    <label>8.B</label>
                  </aside>
                  <aside>
                    <input type="radio" />
                    <label>8.C</label>
                  </aside>
                </form>
                <section className="flex justify-center gap-6">
                  <CallToActionKnap tekst={"AFBRYD"} />
                  <CallToActionKnap tekst={"NÆSTE"} />
                </section>
              </article>
            </aside>
          )}
        </>
      )}
    </>
  );
}
