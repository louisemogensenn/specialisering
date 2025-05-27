import React, { createContext, useContext, useState, useEffect } from "react"; // Opretter kontekst for at dele brugerens fremskridt i appen

const ProgressContext = createContext(); // Opretter en kontekst for at dele fremskridtsdata i appen

export const useProgress = () => useContext(ProgressContext); // Custom hook til at bruge ProgressContext i andre komponenter

export const ProgressProvider = ({ children }) => {
  const [points, setPoints] = useState(0); // State til at vise point, som beregnes dynamisk
  const [faerdigeOpgaver, setFaerdigeOpgaver] = useState([]); // State til at gemme færdige opgaver i et array

  // Hent gemt data fra sessionStorage ved opstart og beregn point
  useEffect(() => {
    const gemteTasks =
      JSON.parse(sessionStorage.getItem("faerdigeOpgaver")) || []; // Henter gemte opgaver fra sessionStorage, eller sætter til tomt array hvis ikke fundet
    setFaerdigeOpgaver(gemteTasks); // Opdaterer state med gemte opgaver

    // Beregn point: 100 point pr. færdig opgave
    const beregnedePoint = gemteTasks.length * 100;
    setPoints(beregnedePoint); // Opdaterer point ud fra antal opgaver
  }, []);

  // Funktion til at markere en opgave som færdig og genberegne point
  const faerdiggoerOpgaver = (taskName) => {
    if (!faerdigeOpgaver.includes(taskName)) {
      const nyeTasks = [...faerdigeOpgaver, taskName]; // Tilføj ny opgave til array
      setFaerdigeOpgaver(nyeTasks); // Opdaterer state
      sessionStorage.setItem("faerdigeOpgaver", JSON.stringify(nyeTasks)); // Gem i sessionStorage

      // Beregn point på ny: 100 point pr. opgave
      const nyePoint = nyeTasks.length * 100;
      setPoints(nyePoint); // Opdaterer point i state
    }
  };

  return (
    // .Provider er en indbygget egenskab på det, der laves med createContext() – ProgressContext.Provider bruges til at dele data ud
    <ProgressContext.Provider
      value={{ points, faerdigeOpgaver, faerdiggoerOpgaver }} // Giver adgang til points, faerdigeOpgaver og faerdiggoerOpgaver-funktionen via konteksten
    >
      {children} {/* Renderer children komponenter, der bruger denne kontekst*/}
    </ProgressContext.Provider>
  );
};
