import React from "react";
import Overskrift from "../components/Overskrift";
import Beskrivelse from "../components/Beskrivelse";
import pil from "../assets/pil.svg"; // Importerer pil-ikonet
import { useState } from "react"; // Importerer useState for at håndtere komponentens tilstand
import { useProgress } from "../context/ProgressContext";

export default function Elev() {
  const [aabenHovedpersonen, setAabenHovedpersonen] = useState(false); // Bruges til at åbne og lukke sektionen for hovedpersonen
  const [aabenHulen, setAabenHulen] = useState(false); // Bruges til at åbne og lukke sektionen for hulen
  const [aabenFilosofi, setAabenFilosofi] = useState(false); // Bruges til at åbne og lukke sektionen for filosofi
  const [aabenQuiz, setAabenQuiz] = useState(false); // Bruges til at åbne og lukke sektionen for quiz

  const { svarData } = useProgress(); // Bruges til at indsætte svar. Svarene hentes fra ProgressContext, som indeholder data om elevens besvarelser
  const hovedpersonSvar = svarData?.["hovedpersonen"]; // Henter besvarelsen for hovedpersonen fra svarData. Undersøger, om svarData eksisterer, og hvis det gør, henter den besvarelsen for hovedpersonen
  const hulenSvar = svarData?.["hulen"]?.svar || "Intet at vise";
  const filosofiSvar = svarData?.["filosofi"]; // Henter besvarelsen for filosofi fra svarData. Hvis der ikke er nogen besvarelse, vises "Intet at vise"

  return (
    <>
      <Overskrift tekst={"Sofies Verden"} />
      <Beskrivelse tekst={"Dette er besvarelser for:"} />
      <aside className="font-bold">
        <Beskrivelse tekst={"Freja Sørensen"} />
      </aside>

      <section className="mb-[30px]">
        <article
          className=" text-[20px] p-3 border flex justify-between mx-[12.5%] rounded md:text-3xl" /* 2px i skriftstørrelse, paddingomkring, afrundede kanter og større skrift i større skærm */
          onClick={() => setAabenHovedpersonen(!aabenHovedpersonen)} // Åbner og lukker sektionen ved at ændre tilstanden
        >
          <p>Hovedpersonen</p>
          <img
            className={`transition-transform duration-300 ${
              aabenHovedpersonen ? "rotate-270" : "rotate-90" // Hvis en knap er åben skal pilen roteres yderligere
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
            <p className="text-bold">Hvad hedder hovedpersonen?</p>
            <input
              readOnly
              value={hovedpersonSvar?.navn || "Intet at vise"}
              className="border w-full p-4 rounded"
            />
            <p className="text-bold">Hvordan vil du beskrive hovedpersonen?</p>
            <textarea
              readOnly
              className="border p-4 h-20 rounded"
              value={hovedpersonSvar?.beskrivelse || "Intet at vise"}
            ></textarea>
          </section>
        </div>
      </section>

      <section className="mb-[30px]">
        <article
          className=" text-[20px] p-3 border flex justify-between mx-[12.5%] rounded md:text-3xl" /* 2px i skriftstørrelse, paddingomkring, afrundede kanter og større skrift i større skærm */
          onClick={() => setAabenHulen(!aabenHulen)} // Åbner og lukker sektionen ved at ændre tilstanden
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
            <p>
              Forestil dig, at du sidder i hulen ligesom fangerne i Platons
              fortælling. Du kan kun se skygger på væggen – men du ved ikke, at
              verden udenfor findes. Pludselig bliver du sluppet fri. Du kan se
              lyset. Du forstår, at der er en helt anden virkelighed.
            </p>
            <br />
            <p className="font-bold">
              Skriv, hvad du ville gøre, hvis det var dig.
            </p>
            <aside>
              <textarea
                readOnly
                className="w-full border p-4 h-20 rounded"
                value={hulenSvar}
              ></textarea>
            </aside>
            <p>
              <span className="font-bold">Hint: </span> Ville du blive i hulen,
              eller gå ud? Ville du vende tilbage for at fortælle de andre,
              eller gå videre alene?
            </p>
          </section>
        </div>
      </section>

      <section className="mb-[30px]">
        <article
          className=" text-[20px] p-3 border flex justify-between mx-[12.5%] rounded md:text-3xl" /* 2px i skriftstørrelse, paddingomkring, afrundede kanter og større skrift i større skærm */
          onClick={() => setAabenFilosofi(!aabenFilosofi)} // Åbner og lukker sektionen ved at ændre tilstanden
        >
          <p>Filosofi</p>
          <img
            className={`transition-transform duration-300 ${
              aabenFilosofi ? "rotate-270" : "rotate-90"
            }`}
            src={pil}
            alt="Åbn-pil"
          />
        </article>
        <div
          className={`transition-max-height duration-300 overflow-hidden ease-in-out ${
            aabenFilosofi ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          <section className="text-[16px] p-3 border flex flex-col gap-6 mx-[12.5%] rounded md:text-2xl">
            <p>
              I denne opgave skal du reflektere over dig selv. Du skal skrive en
              kort tekst på ca. 5-10 sætninger, hvor du svarer på spørgsmålene.
            </p>
            <p className="font-bold">
              Hvem er du og hvilke ting betyder mest for dig i livet? Hvad
              tænker du, når du spørger dig selv: Hvem er jeg egentligt?
            </p>
            <textarea
              readOnly
              className="w-full border p-4 h-20 rounded"
              value={filosofiSvar?.opgaveEt || "Intet at vise"}
            ></textarea>
            <p className="font-bold">
              Find en ven eller klassekammerat og diskuter jeres svar. Kan I
              finde nogle fælles træk? Hvad er forskellene?
            </p>
            <textarea
              readOnly
              className="w-full border p-4 h-20 rounded"
              value={filosofiSvar?.opgaveTo || "Intet at vise"}
            ></textarea>
            <p className="font-bold">
              Kan vi nogensinde helt forstå, hvem vi er?
            </p>
            <textarea
              readOnly
              className="w-full border p-4 h-20 rounded"
              value={filosofiSvar?.opgaveTre || "Intet at vise"}
            ></textarea>
            <p className="font-bold">
              Er vi bestemt af vores fortid, eller kan vi selv bestemme, hvem vi
              vil være?
            </p>
            <textarea
              readOnly
              className="w-full border p-4 h-20 rounded"
              value={filosofiSvar?.opgaveFire || "Intet at vise"}
            ></textarea>
            <p className="font-bold">Hvad betyder det at have en fri vilje?</p>
            <textarea
              readOnly
              className="w-full border p-4 h-20 rounded"
              value={filosofiSvar?.opgaveFem || "Intet at vise"}
            ></textarea>
          </section>
        </div>
      </section>

      <section className="mb-[30px]">
        <article className=" text-[20px] p-3 border flex justify-between mx-[12.5%] rounded md:text-3xl">
          <p>Tidsrejse</p>
          <img className="rotate-90" src={pil} alt="Åbn-pil" />
        </article>
      </section>

      <section className="mb-[30px]">
        <article
          className=" text-[20px] p-3 border flex justify-between mx-[12.5%] rounded md:text-3xl" /* 2px i skriftstørrelse, paddingomkring, afrundede kanter og større skrift i større skærm */
          onClick={() => setAabenQuiz(!aabenQuiz)} // Åbner og lukker sektionen ved at ændre tilstanden
        >
          <p>Quiz</p>
          <img
            className={`transition-transform duration-300 ${
              aabenQuiz ? "rotate-270" : "rotate-90"
            }`}
            src={pil}
            alt="Åbn-pil"
          />
        </article>
        <div
          className={`transition-max-height duration-300 overflow-hidden ease-in-out ${
            aabenQuiz ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          <section className="text-[16px] p-3 border flex flex-col gap-6 mx-[12.5%] rounded md:text-2xl">
            <p> Indsæt quiz </p>
          </section>
        </div>
      </section>

      <section className="mb-[30px]">
        <article className=" text-[20px] p-3 border flex justify-between mx-[12.5%] rounded md:text-3xl">
          <p>Tegn</p>
          <img className="rotate-90" src={pil} alt="Åbn-pil" />
        </article>
      </section>
    </>
  );
}
