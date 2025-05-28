import React, { createContext, useContext, useState, useEffect } from "react"; // Opretter kontekst for at dele elevens fremskridt i appen

const ProgressContext = createContext(); // Opretter en kontekst for at dele fremskridtsdata i appen

export const useProgress = () => useContext(ProgressContext); // Custom hook til at bruge ProgressContext i andre komponenter

export const ProgressProvider = ({ children }) => {
  const [points, setPoints] = useState(0); // State til at vise point, som beregnes dynamisk
  const [faerdigeOpgaver, setFaerdigeOpgaver] = useState([]); // State til at gemme færdige opgaver i et array
  const [svarData, setSvarData] = useState({}); // State til at gemme brugerens svar på opgaver (fx tekstsvar)

  useEffect(() => { // Ved opstart: Hent gemt data fra sessionStorage
    const gemteTasks =
      JSON.parse(sessionStorage.getItem("faerdigeOpgaver")) || []; // Henter færdige opgaver, der er gemt i en JSON fil med sessionStorage
    const gemteSvar =
      JSON.parse(sessionStorage.getItem("svarData")) || {}; // Henter tidligere svar (navn, beskrivelse osv.) i en JSON fil med sessionStorage

    setFaerdigeOpgaver(gemteTasks); // Opdaterer state med opgaver
    setSvarData(gemteSvar); // Opdaterer state med svar

    const beregnedePoint = gemteTasks.length * 100; // Beregn point: 100 point pr. færdig opgave (så hvis længden af færdige opgaver er 3, så er point 300)
    setPoints(beregnedePoint); // Opdaterer point til den nye værdi
  }, []);

  const faerdiggoerOpgaver = (taskName) => { // Funktionen tager et parameter taskName, som er navnet på den opgave, der skal markeres som færdig.
    if (!faerdigeOpgaver.includes(taskName)) { // Den går videre kun hvis opgaven endnu ikke er løst – altså hvis taskName ikke findes i arrayet faerdigeOpgaver.
      const nyeTasks = [...faerdigeOpgaver, taskName]; // Et nyt array nyeTasks bliver lavet med alle de tidligere færdige opgaver plus den nye.
      setFaerdigeOpgaver(nyeTasks); // Opdaterer React state med det nye array over færdige opgaver.
      sessionStorage.setItem("faerdigeOpgaver", JSON.stringify(nyeTasks)); // Gemmer listen af færdige opgaver i sessionStorage, så den ikke går tabt, hvis siden genindlæses i samme session. Den bliver gemt som en streng (via JSON.stringify).

      const nyePoint = nyeTasks.length * 100; // Beregn point
      setPoints(nyePoint); // Opdater point
    }
  };

  const gemSvarData = (opgaveId, data) => { // Funktion til at gemme svar (fx navn og beskrivelse) under en opgave
    const opdateretSvar = { // En funktion, der opdaterer svarData med nye svar
      ...svarData, // Beholder eksisterende svar med spread-operatoren
      [opgaveId]: data, // Gemmer som fx: "hovedpersonen": { navn: "Anna", beskrivelse: "Modig" }
    };
    setSvarData(opdateretSvar); // Opdaterer svarData til opdateret svar, der opdateret ovenover
    sessionStorage.setItem("svarData", JSON.stringify(opdateretSvar)); // sessionStorage sætter svarData med opdateret svar, så det gemmes i browseren i JSON format
  };

  return (
    <ProgressContext.Provider /* Giver adgang til konteksten for at dele data med andre komponenter */ 
      value={{ // Værdien der deles med andre komponenter, så den kan bruges i Header
        points,
        faerdigeOpgaver,
        faerdiggoerOpgaver,
        svarData, // Gør data tilgængelig
        gemSvarData, // Gør funktionen tilgængelig i andre komponenter
      }}
    >
      {children} {/* Giver adgang til alle børn af ProgressProvider, så de kan bruge konteksten */}
    </ProgressContext.Provider>
  );
};
