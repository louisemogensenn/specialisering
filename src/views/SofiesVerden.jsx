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
  const [aabenHovedpersonen, setAabenHovedpersonen] = useState(false); // Når underviseren skal se eksempler på opgaverne bruges denne til at vise og skjule "Hovedpersonen"
  const [aabenHulen, setAabenHulen] = useState(false); // Når underviseren skal se eksempler på opgaverne bruges denne til at vise og skjule "Hulen"
  const [aabenFilosofi, setAabenFilosofi] = useState(false); // Når underviseren skal se eksempler på opgaverne bruges denne til at vise og skjule "Filosofi"
  const [aabenTidsrejse, setAabenTidsrejse] = useState(false); // Når underviseren skal se eksempler på opgaverne bruges denne til at vise og skjule "Tidsrejse"

  const [aabenQuiz, setAabenQuiz] = useState(false); // Når underviseren skal se eksempler på opgaverne bruges denne til at vise og skjule "Quiz"
  const [aabenTegn, setAabenTegn] = useState(false); // Når underviseren skal se eksempler på opgaverne bruges denne til at vise og skjule "Tegn"
  const [klasse, setKlasse] = useState(""); // State for at gemme valgt klasse - dette kan bruges til at oprette forløbet for den bestemte elev
  const [elev, setElev] = useState(""); // State for at gemme valgt elev, der kan bruges til at vise forløbet for eleven

  const navigate = useNavigate(); // Hook til at navigere til en anden side

  const [visPopup, setVisPopup] = useState(false); // State for at styre visning af popup
  const [opretPopup, setOpretPopup] = useState(false); // State for at styre visning af opret-popup

  const { role } = useAuth(); // Importerer rollen fra Auth og gør det muligt at ændre indholdet baseret på brugeren
  const { faerdigeOpgaver } = useProgress(); // Hook bruges  til at hente den aktuelle liste af opgaver, som brugeren har løst. Denne liste bruges til at tjekke, hvilke opgaver brugeren allerede har færdiggjort.

  const erHovedpersonenLøst = faerdigeOpgaver.includes("hovedpersonen"); // Hvis "hovedpersonen" findes i faerdigeOpgaver, er erHovedpersonenLøst lig med true. Ellers er den false.
  const erHulenLøst = faerdigeOpgaver.includes("hulen"); // Hvis "hulen" findes i faerdigeOpgaver, er erHulenLøst lig med true. Ellers er den false.
  const erFilosofiLøst = faerdigeOpgaver.includes("filosofi"); // Samme logik
  const erTidsrejseLøst = faerdigeOpgaver.includes("tidsrejse"); // Samme logik
  const erQuizLøst = faerdigeOpgaver.includes("quiz"); // Samme logik
  const erTegnLøst = faerdigeOpgaver.includes("tegn"); // Samme logik

  if (!role) {
    return <p>Indlæser...</p>; // Hvis rollen ikke findes
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
  };

  return (
    <>
      <Overskrift tekst={"SOFIES VERDEN"} /> {/* Overskrift for siden */}
      {role === "elev" && ( // Indholdet herunder er synligt, hvis brugeren er elev
        <>
          <Beskrivelse tekst={"Her er en oversigt over dine opgaver."} />{" "}
          {/* Beskrivelse af siden */}
          <br />
          <Underoverskrift tekst={"Opgaver"} />
          {/* Underoverskrift for kapitler */}
          <Knap
            til={erHovedpersonenLøst ? "#" : "/hovedpersonen"} // Hvis parameteren er true (og altså findes i færdigeoOpgaver) skal der ikke ske noget - ellers linkes der til siden
            tekst="Hovedpersonen"
            point="100 POINT"
            disabled={erHovedpersonenLøst} // Knappen sættes som diabled, hvis opgaven allerede er løst
          />
          <Knap
            til={erHulenLøst ? "#" : "/hulen"} // Hvis parameteren er true (og altså findes i færdigeoOpgaver) skal der ikke ske noget - ellers linkes der til siden
            tekst="Hulen"
            point="100 POINT"
            disabled={erHulenLøst} // Knappen sættes som diabled, hvis opgaven allerede er løst
          />
          <Knap
            til={erFilosofiLøst ? "#" : "/filosofi"} // Hvis parameteren er true (og altså findes i færdigeoOpgaver) skal der ikke ske noget - ellers linkes der til siden
            tekst="Filosofi"
            point="100 POINT"
            disabled={erFilosofiLøst} // Knappen sættes som diabled, hvis opgaven allerede er løst
          />
          <Knap
            til={erTidsrejseLøst ? "#" : "#"} // Hvis parameteren er true (og altså findes i færdigeoOpgaver) skal der ikke ske noget - ellers linkes der til siden
            tekst="Tidsrejse"
            point="100 POINT"
            disabled={erTidsrejseLøst} // Knappen sættes som diabled, hvis opgaven allerede er løst
          />
          <br />
          <Underoverskrift tekst={"Ekstraopgaver"} />
          <Knap
            til={erQuizLøst ? "#" : "/quiz"} // Hvis parameteren er true (og altså findes i færdigeoOpgaver) skal der ikke ske noget - ellers linkes der til siden
            tekst="Quiz"
            point="100 POINT"
            disabled={erQuizLøst} // Knappen sættes som diabled, hvis opgaven allerede er løst
          />
          <Knap
            til={erTegnLøst ? "#" : "/tegn"} // Hvis parameteren er true (og altså findes i færdigeoOpgaver) skal der ikke ske noget - ellers linkes der til siden
            tekst="Tegn"
            point="100 POINT"
            disabled={erTegnLøst} // Knappen sættes som diabled, hvis opgaven allerede er løst
          />
        </>
      )}
      {role === "underviser" && ( // Indholdet herunder er synligt, hvis brugeren er underviser
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
                  aabenHovedpersonen ? "rotate-270" : "rotate-90" // Pilen skal roteres alt efter om den er åben eller lukket
                }`}
                src={pil}
                alt="Åbn-pil"
              />
            </article>
            <div
              className={`transition-max-height duration-300 overflow-hidden ease-in-out ${
                aabenHovedpersonen ? "max-h-[1000px]" : "max-h-0" // Styling for "popnedboksen", hvis den er åben
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
              onClick={() => setAabenHulen(!aabenHulen)} // Bruges til at vise opgave indholdet ved at sætte værdien til det modsatte ved klik (toggle)
            >
              <p>Hulen</p>
              <img
                className={`transition-transform duration-300 ${
                  aabenHulen ? "rotate-270" : "rotate-90" // Pilen skal roteres alt efter om den er åben eller lukket
                }`}
                src={pil}
                alt="Åbn-pil"
              />
            </article>
            <div
              className={`transition-max-height duration-300 overflow-hidden ease-in-out ${
                aabenHulen ? "max-h-[1000px]" : "max-h-0" // Styling for "popnedboksen", hvis den er åben
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
              onClick={() => setAabenFilosofi(!aabenFilosofi)} // Bruges til at vise opgave indholdet ved at sætte værdien til det modsatte ved klik (toggle)
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
              onClick={() => setAabenTidsrejse(!aabenTidsrejse)} // Bruges til at vise opgave indholdet ved at sætte værdien til det modsatte ved klik (toggle)
            >
              <p>Tidsrejse</p>
              <img
                className={`transition-transform duration-300 ${
                  aabenTidsrejse ? "rotate-270" : "rotate-90" // Pilen skal roteres alt efter om den er åben eller lukket
                }`}
                src={pil}
                alt="Åbn-pil"
              />
            </article>
            <div
              className={`transition-max-height duration-300 overflow-hidden ease-in-out ${
                aabenTidsrejse ? "max-h-[1000px]" : "max-h-0" // Styling for "popnedboksen", hvis den er åben
              }`}
            >
              <section className="text-[16px] p-3 border flex flex-col gap-6 mx-[12.5%] rounded md:text-2xl">
                <p>Intet at vise</p>
              </section>
            </div>
          </section>

          <p className="text-[12px] font-bold ml-[12.5%]">Ekstraopgaver</p>

          <section className="mb-[30px]">
            <article
              className=" text-[20px] p-3 border flex justify-between mx-[12.5%] rounded md:text-3xl"
              onClick={() => setAabenQuiz(!aabenQuiz)} // Bruges til at vise opgave indholdet ved at sætte værdien til det modsatte ved klik (toggle)
            >
              <p>Quiz</p>
              <img
                className={`transition-transform duration-300 ${
                  aabenQuiz ? "rotate-270" : "rotate-90" // Pilen skal roteres alt efter om den er åben eller lukket
                }`}
                src={pil}
                alt="Åbn-pil"
              />
            </article>
            <div
              className={`transition-max-height duration-300 overflow-hidden ease-in-out ${
                aabenQuiz ? "max-h-[1000px]" : "max-h-0" // Styling for "popnedboksen", hvis den er åben
              }`}
            >
              <section className="text-[16px] p-3 border flex flex-col gap-6 mx-[12.5%] rounded md:text-2xl">
                <p> Intet at vise </p>
              </section>
            </div>
          </section>

          <section className="mb-[30px]">
            <article
              className=" text-[20px] p-3 border flex justify-between mx-[12.5%] rounded md:text-3xl"
              onClick={() => setAabenTegn(!aabenTegn)} // Bruges til at vise opgave indholdet ved at sætte værdien til det modsatte ved klik (toggle)
            >
              <p>Tegn</p>
              <img
                className={`transition-transform duration-300 ${
                  aabenTegn ? "rotate-270" : "rotate-90" // Pilen skal roteres alt efter om den er åben eller lukket
                }`}
                src={pil}
                alt="Åbn-pil"
              />
            </article>
            <div
              className={`transition-max-height duration-300 overflow-hidden ease-in-out ${
                aabenTegn ? "max-h-[1000px]" : "max-h-0" // Styling for "popnedboksen", hvis den er åben
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
                  Du er ved at oprette forløbet <br /> "Sofies Verden". <br />
                  Hvem ønsker du at oprette forløbet for?
                </p>
                <br />
                <p className="font-bold">Vælg klasse</p>
                <aside>
                  <select
                    value={klasse}
                    onChange={(e) => setKlasse(e.target.value)} // Værdien for den valgte klasse sættes
                    style={{ padding: "8px", fontSize: "16px" }}
                  >
                    <option value="" disabled> {/* Default er intet valgt, men dette er ikke en mulighed */}
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
                <aside>
                  <select
                    value={elev}
                    onChange={(e) => setElev(e.target.value)} // Giver værdien for eleven, der oprettes et forløb for
                    style={{ padding: "8px", fontSize: "16px" }}
                  >
                    <option value="" disabled> {/* Default er intet valgt, men dette er ikke en mulighed */}
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
                  <CallToActionKnap tekst={"OPRET"} onClick={handleOpret} />
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
