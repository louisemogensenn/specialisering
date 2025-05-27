import React, { createContext, useContext, useState, useEffect } from "react"; // Opretter kontekst for at dele brugerens fremskridt i appen

const ProgressContext = createContext(); // Opretter en kontekst for at dele fremskridtsdata i appen

export const useProgress = () => useContext(ProgressContext); // Custom hook til at bruge ProgressContext i andre komponenter

export const ProgressProvider = ({ children }) => {
  const [points, setPoints] = useState(0); // State til at vise point, som beregnes dynamisk
  const [faerdigeOpgaver, setFaerdigeOpgaver] = useState([]); // State til at gemme færdige opgaver i et array
  const [svarData, setSvarData] = useState({}); // State til at gemme brugerens svar på opgaver (fx tekstsvar)

  // Ved opstart: Hent gemt data fra sessionStorage
  useEffect(() => {
    const gemteTasks =
      JSON.parse(sessionStorage.getItem("faerdigeOpgaver")) || []; // Henter færdige opgaver
    const gemteSvar =
      JSON.parse(sessionStorage.getItem("svarData")) || {}; // Henter tidligere svar (navn, beskrivelse osv.)

    setFaerdigeOpgaver(gemteTasks); // Opdaterer state med opgaver
    setSvarData(gemteSvar); // Opdaterer state med svar

    // Beregn point: 100 point pr. færdig opgave
    const beregnedePoint = gemteTasks.length * 100;
    setPoints(beregnedePoint); // Opdaterer point
  }, []);

  // Funktion til at markere en opgave som færdig og beregne point
  const faerdiggoerOpgaver = (taskName) => {
    if (!faerdigeOpgaver.includes(taskName)) {
      const nyeTasks = [...faerdigeOpgaver, taskName]; // Tilføj opgave til listen
      setFaerdigeOpgaver(nyeTasks); // Opdater state
      sessionStorage.setItem("faerdigeOpgaver", JSON.stringify(nyeTasks)); // Gem i sessionStorage

      const nyePoint = nyeTasks.length * 100; // Beregn point
      setPoints(nyePoint); // Opdater point
    }
  };

  // Funktion til at gemme svar (fx navn og beskrivelse) under en opgave
  const gemSvarData = (opgaveId, data) => {
    const opdateretSvar = {
      ...svarData,
      [opgaveId]: data, // Gemmer som fx: "hovedpersonen": { navn: "Anna", beskrivelse: "Modig" }
    };
    setSvarData(opdateretSvar); // Opdaterer lokal state
    sessionStorage.setItem("svarData", JSON.stringify(opdateretSvar)); // Gemmer i sessionStorage
  };

  return (
    <ProgressContext.Provider
      value={{
        points,
        faerdigeOpgaver,
        faerdiggoerOpgaver,
        svarData, // Gør data tilgængelig
        gemSvarData, // Gør funktionen tilgængelig i andre komponenter
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};
