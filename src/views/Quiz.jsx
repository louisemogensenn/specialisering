import React from "react";
import Overskrift from "../components/Overskrift";
import Lydafspiller from "../components/Lydafspiller";
import CallToActionKnap from "../components/CallToActionKnap";
import erDuSikker from "../assets/flotBrandCharacter.svg"; // Importerer et billede til popup
import { useState } from "react"; // Importerer useState for at håndtere komponentens tilstand
import { useProgress } from "../context/ProgressContext";
import { useNavigate } from "react-router-dom"; // Importer useNavigate for at navigere til en anden side

export default function Quiz() {
  const [visPopup, setVisPopup] = useState(false); // Popup visning
  const [svarEt, setSvarEt] = useState(""); // State til at gemme svar på spørgsmål
  const [svarTo, setSvarTo] = useState(""); // State til at gemme svar på spørgsmål
  const [svarTre, setSvarTre] = useState(""); // State til at gemme svar på spørgsmål
  const [svarFire, setSvarFire] = useState(""); // State til at gemme svar på spørgsmål
  const navigate = useNavigate(); // Bruger useNavigate til at navigere til en anden side
  const { faerdiggoerOpgaver } = useProgress(); // Bruger useProgress for at få adgang til faerdiggoerOpgaver funktionen

  const handleFinalSubmit = () => {
    faerdiggoerOpgaver("quiz", 100); // navn og point
    navigate("/point"); // evt. brug useNavigate()
  };

  const handleSubmitClick = () => {
    if (!svarEt || !svarTo || !svarTre || !svarFire) {
      // Hvis alle svar ikke er besvaret
      alert("Du skal besvare alle spørgsmål før du kan aflevere.");
      return;
    }
    setVisPopup(true); // Viser popup for at bekræfte aflevering
  };

  const handleCancel = () => {
    setVisPopup(false); // Lukker popup uden at ændre noget
  };

  return (
    <>
      <Overskrift tekst={"QUIZ"} />
      <Lydafspiller />
      <br />
      <form className="mx-[12.5%]">
        <fieldset className="text-[12px] md:text-[15px]">
          <h1 className="font-bold text-[14px] md:text-[18px]">
            Hvad mente Platon var den rigtige verden?
          </h1>
          <label>
            <input
              type="radio"
              name="q1"
              value="a"
              onChange={(e) => setSvarEt(e.target.value)}
            />{" "}
            Den verden, vi kan se og røre ved
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="q1"
              value="b"
              onChange={(e) => setSvarEt(e.target.value)}
            />{" "}
            En fantasiverden
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="q1"
              value="c"
              onChange={(e) => setSvarEt(e.target.value)}
            />{" "}
            En verden med perfekte ideer, som vi ikke kan se
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="q1"
              value="d"
              onChange={(e) => setSvarEt(e.target.value)}
            />{" "}
            En verden under jorden
          </label>
        </fieldset>
        <br />
        <fieldset className="text-[12px] md:text-[15px]">
          <h1 className="font-bold text-[14px] md:text-[18px]">
            Hvad handler Platons hule-historie om?
          </h1>
          <label>
            <input
              type="radio"
              name="q2"
              value="a"
              onChange={(e) => setSvarTo(e.target.value)}
            />{" "}
            Mennesker, der leger gemmeleg
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="q2"
              value="b"
              onChange={(e) => setSvarTo(e.target.value)}
            />{" "}
            Mennesker, der sidder fast og kun ser skygger
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="q2"
              value="c"
              onChange={(e) => setSvarTo(e.target.value)}
            />{" "}
            Dyr, der bor i en hule
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="q2"
              value="d"
              onChange={(e) => setSvarTo(e.target.value)}
            />{" "}
            En hule fuld af guld
          </label>
        </fieldset>
        <br />
        <fieldset className="text-[12px] md:text-[15px]">
          <h1 className="font-bold text-[14px] md:text-[18px]">
            Hvad mente Platon om sjælen og kroppen?
          </h1>
          <label>
            <input
              type="radio"
              name="q3"
              value="a"
              onChange={(e) => setSvarTre(e.target.value)}
            />{" "}
            Sjælen og kroppen er det samme
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="q3"
              value="b"
              onChange={(e) => setSvarTre(e.target.value)}
            />{" "}
            Kroppen bestemmer over sjælen
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="q3"
              value="c"
              onChange={(e) => setSvarTre(e.target.value)}
            />{" "}
            Sjælen bor i kroppen, men hører til et bedre sted
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="q3"
              value="d"
              onChange={(e) => setSvarTre(e.target.value)}
            />{" "}
            Kroppen er vigtigere end sjælen
          </label>
        </fieldset>
        <br />
        <fieldset className="text-[12px] md:text-[15px]">
          <h1 className="font-bold text-[14px] md:text-[18px]">
            Hvor kommer vores viden ifølge Platon fra?
          </h1>
          <label>
            <input
              type="radio"
              name="q4"
              value="a"
              onChange={(e) => setSvarFire(e.target.value)}
            />{" "}
            Fra skolen
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="q4"
              value="b"
              onChange={(e) => setSvarFire(e.target.value)}
            />{" "}
            Fra bøger
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="q4"
              value="c"
              onChange={(e) => setSvarFire(e.target.value)}
            />{" "}
            Fra vores sanser
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="q4"
              value="d"
              onChange={(e) => setSvarFire(e.target.value)}
            />{" "}
            Fra at huske noget, vores sjæl allerede ved
          </label>
        </fieldset>
      </form>

      <aside className="flex justify-center mt-[5%]">
        {" "}
        {/* Justerer knappen til at være centreret */}
        <CallToActionKnap tekst="AFLEVER" onClick={handleSubmitClick} />
        {/* Knap der kalder handleSubmitClick funktionen når den klikkes */}
      </aside>

      {visPopup && (
        <aside
          className="fixed inset-0 flex items-center justify-center z-50"
          aria-modal="true"
          role="dialog"
        >
          <article className="themable p-8 rounded max-w-sm mx-4 text-center border">
            <img
              src={erDuSikker}
              alt="Din brand character"
              className="mx-auto"
            />
            <p className="mb-6">
              Er du sikker på, at du vil aflevere? <br /> Dit valg kan ikke
              fortrydes.
            </p>
            <section className="flex justify-center gap-6">
              <CallToActionKnap tekst={"TILBAGE"} onClick={handleCancel} />
              <CallToActionKnap tekst={"AFLEVER"} onClick={handleFinalSubmit} />
            </section>
          </article>
        </aside>
      )}
    </>
  );
}
