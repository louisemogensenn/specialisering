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
import { useNavigate } from "react-router-dom"; // Importerer useNavigate for at navigere til en anden side

export default function SofiesVerden() {
  const [aabenHovedpersonen, setAabenHovedpersonen] = useState(false);
  const [aabenHulen, setAabenHulen] = useState(false);
  const [aabenFilosofi, setAabenFilosofi] = useState(false);
  const [aabenTidsrejse, setAabenTidsrejse] = useState(false);

  const [aabenQuiz, setAabenQuiz] = useState(false);
  const [aabenTegn, setAabenTegn] = useState(false);
  const [klasse, setKlasse] = useState(""); // State for at gemme valgt klasse
  const [elev, setElev] = useState(""); // State for at gemme valgt elev

  const navigate = useNavigate(); // Hook til at navigere til en anden side

  const [visPopup, setVisPopup] = useState(false); // State for at styre visning af popup
  const [opretPopup, setOpretPopup] = useState(false); // State for at styre visning af opret-popup

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

  const handleAfbryd = () => {
    setVisPopup(false); // Lukker popup uden at ændre noget
  };

  const handleOpret = () => {
    setVisPopup(false); // Lukker popup
    setOpretPopup(true);

    setTimeout(() => {
      navigate("/mineforloeb");
    }, 3000); // 3000 ms = 3 sekunder
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
          />
          <br />
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
                <p className="font-bold">Hvad hedder hovedpersonen?</p>
                <input
                  readOnly
                  placeholder="Skriv din besvarelse her..."
                  className="border w-full p-4 rounded"
                />
                <p className="font-bold">
                  Hvordan vil du beskrive hovedpersonen?
                </p>
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
                <p>
                  Forestil dig, at du sidder i hulen ligesom fangerne i Platons
                  fortælling. Du kan kun se skygger på væggen – men du ved ikke,
                  at verden udenfor findes. Pludselig bliver du sluppet fri. Du
                  kan se lyset. Du forstår, at der er en helt anden virkelighed.
                </p>
                <br />
                <p className="font-bold">
                  Skriv, hvad du ville gøre, hvis det var dig.
                </p>
                <aside>
                  <textarea
                    readOnly
                    className="w-full border p-4 h-20 rounded"
                    placeholder="Skriv din besvarelse her..."
                  ></textarea>
                </aside>
                <p>
                  <span className="font-bold">Hint: </span> Ville du blive i
                  hulen, eller gå ud? Ville du vende tilbage for at fortælle de
                  andre, eller gå videre alene?
                </p>
              </section>
            </div>
          </section>

          <section className="mb-[30px]">
            <article
              className=" text-[20px] p-3 border flex justify-between mx-[12.5%] rounded md:text-3xl"
              onClick={() => setAabenFilosofi(!aabenFilosofi)}
            >
              <p>Filosofi</p>
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
                aabenFilosofi ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <section className="text-[16px] p-3 border flex flex-col gap-6 mx-[12.5%] rounded md:text-2xl">
                <p>
                  I denne opgave skal du reflektere over dig selv. Du skal
                  skrive en kort tekst på ca. 5-10 sætninger, hvor du svarer på
                  spørgsmålene.
                </p>
                <p className="font-bold">
                  Hvem er du og hvilke ting betyder mest for dig i livet? Hvad
                  tænker du, når du spørger dig selv: Hvem er jeg egentligt?
                </p>
                <textarea
                  readOnly
                  className="w-full border p-4 h-20 rounded"
                  placeholder="Skriv din besvarelse her..."
                ></textarea>
                <p className="font-bold">
                  Find en ven eller klassekammerat og diskuter jeres svar. Kan I
                  finde nogle fælles træk? Hvad er forskellene?
                </p>
                <textarea
                  readOnly
                  className="w-full border p-4 h-20 rounded"
                  placeholder="Skriv din besvarelse her..."
                ></textarea>
                <p className="font-bold">
                  Kan vi nogensinde helt forstå, hvem vi er?
                </p>
                <textarea
                  readOnly
                  className="w-full border p-4 h-20 rounded"
                  placeholder="Skriv din besvarelse her..."
                ></textarea>
                <p className="font-bold">
                  Er vi bestemt af vores fortid, eller kan vi selv bestemme,
                  hvem vi vil være?
                </p>
                <textarea
                  readOnly
                  className="w-full border p-4 h-20 rounded"
                  placeholder="Skriv din besvarelse her..."
                ></textarea>
                <p className="font-bold">
                  Hvad betyder det at have en fri vilje?
                </p>
                <textarea
                  readOnly
                  className="w-full border p-4 h-20 rounded"
                  placeholder="Skriv din besvarelse her..."
                ></textarea>
              </section>
            </div>
          </section>

          <section className="mb-[30px]">
            <article
              className=" text-[20px] p-3 border flex justify-between mx-[12.5%] rounded md:text-3xl"
              onClick={() => setAabenTidsrejse(!aabenTidsrejse)}
            >
              <p>Tidsrejse</p>
              <img
                className={`transition-transform duration-300 ${
                  aabenTidsrejse ? "rotate-270" : "rotate-90"
                }`}
                src={pil}
                alt="Åbn-pil"
              />
            </article>
            <div
              className={`transition-max-height duration-300 overflow-hidden ease-in-out ${
                aabenTidsrejse ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <section className="text-[16px] p-3 border flex flex-col gap-6 mx-[12.5%] rounded md:text-2xl">
                <p>Indsæt tidsrejse</p>
              </section>
            </div>
          </section>

          <p className="text-[12px] font-bold ml-[12.5%]">Ekstraopgaver</p>

          <section className="mb-[30px]">
            <article
              className=" text-[20px] p-3 border flex justify-between mx-[12.5%] rounded md:text-3xl"
              onClick={() => setAabenQuiz(!aabenQuiz)}
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
            <article
              className=" text-[20px] p-3 border flex justify-between mx-[12.5%] rounded md:text-3xl"
              onClick={() => setAabenTegn(!aabenTegn)}
            >
              <p>Tegn</p>
              <img
                className={`transition-transform duration-300 ${
                  aabenTegn ? "rotate-270" : "rotate-90"
                }`}
                src={pil}
                alt="Åbn-pil"
              />
            </article>
            <div
              className={`transition-max-height duration-300 overflow-hidden ease-in-out ${
                aabenTegn ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <section className="text-[16px] p-3 border flex flex-col gap-6 mx-[12.5%] rounded md:text-2xl">
                <p>
                  I filosofien har vi hørt om Platons hule – en fortælling om
                  nogle mennesker, der kun kan se skygger på en væg og tror, det
                  er hele virkeligheden. <br /> <br /> Tegn, hvordan du
                  forestiller dig hulen og det, der sker i den. Du bestemmer
                  selv, hvad der skal være med. <br /> <br /> Når du er færdig,
                  skal du tage et billede af din tegning og uploade det.
                </p>
                <br />

                <aside className="flex items-center text-2xl p-3 border mx-[12.5%] mb-[30px] md:text-3xl rounded">
                  <svg
                    width="30"
                    height="18"
                    viewBox="0 0 36 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="27.6464"
                      y1="10.3536"
                      x2="17.6464"
                      y2="0.353553"
                      stroke="black"
                    />
                    <line
                      x1="18.3536"
                      y1="0.353553"
                      x2="8.35355"
                      y2="10.3536"
                      stroke="black"
                    />
                    <line y1="24.5" x2="36" y2="24.5" stroke="black" />
                    <line x1="18.5" y1="1" x2="18.5" y2="21" stroke="black" />
                  </svg>
                  <p className="flex-1 text-center text-[20px]">Upload</p>
                </aside>
              </section>
            </div>
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
              <article className="bg-white p-8 rounded max-w-sm mx-4 border">
                <h1 className="text-3xl text-center">Sofies Verden</h1>
                <p className="text-center">
                  Du er ved at oprette forløbet <br /> "Sofies Verden". <br />Hvem
                  ønsker du at oprette forløbet for?
                </p>
                <br />
                <p className="font-bold">Vælg klasse</p>
                <aside>
                  <select
                    value={klasse}
                    onChange={(e) => setKlasse(e.target.value)}
                    style={{ padding: "8px", fontSize: "16px" }}
                  >
                    <option value="" disabled>
                      Intet valgt
                    </option>
                    <option value="5.a">5.a</option>
                    <option value="5.b">5.b</option>
                    <option value="8.b">8.b</option>
                    <option value="8.c">8.c</option>
                  </select>
                </aside>
                <br />
                <p className="font-bold">Vælg elever</p>
                <aside >
                  <select
                    value={elev}
                    onChange={(e) => setElev(e.target.value)}
                    style={{ padding: "8px", fontSize: "16px" }}
                  >
                    <option value="" disabled>
                      Intet valgt
                    </option>
                    <option value="alle">Alle</option>
                    <option value="anne">Anne Hansen</option>
                    <option value="bente">Bente Bentsen</option>
                    <option value="emil">Emil Jørgensen</option>
                    <option value="freja">Freja Sørensen</option>
                    <option value="katja">Katja Kaysen</option>
                  </select>
                </aside>
                <br />
                <section className="flex justify-center gap-6">
                  <CallToActionKnap tekst={"AFBRYD"} onClick={handleAfbryd} />
                  <CallToActionKnap tekst={"OPRET"} onClick={handleOpret}/>
                </section>
              </article>
            </aside>
          )}

          {opretPopup && (
            <aside
            className="fixed inset-0 flex items-center justify-center z-50"
            aria-modal="true"
            role="dialog"
          >
            <article className="p-8 rounded max-w-sm mx-4 text-center border bg-white">
              <h1 className="text-3xl">Dit forløb er oprettet.</h1>
              <br />
              <p> Du sendes nu til "Mine Forløb".</p>
            </article>
          </aside>
          )}
        </>
      )}
    </>
  );
}
