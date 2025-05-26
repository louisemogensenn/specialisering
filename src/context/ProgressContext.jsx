import React, { createContext, useContext, useState, useEffect } from "react"; // Opretter kontekst for at dele brugerens fremskridt i appen

const ProgressContext = createContext(); // Opretter en kontekst for at dele fremskridtsdata i appen

export const useProgress = () => useContext(ProgressContext); // Custom hook til at bruge ProgressContext i andre komponenter

export const ProgressProvider = ({ children }) => {
  const [points, setPoints] = useState(0); // State til at gemme point, som brugeren optjener. Point er i default 0
  const [faerdigeOpgaver, setFaerdigeOpgaver] = useState([]); // State til at gemme færdige opgaver i et array

  // Hent gemt data fra localStorage ved opstart og kun ved opstart
  useEffect(() => {
    const gemtePoints = parseInt(localStorage.getItem("points")) || 0; // Henter gemte point fra localStorage, eller sætter til 0 hvis ikke fundet
    const gemteTasks =
      JSON.parse(localStorage.getItem("faerdigeOpgaver")) || []; // Henter gemte opgaver fra localStorage, eller sætter til tom array hvis ikke fundet
    setPoints(gemtePoints); // Opdaterer state med gemte point
    setFaerdigeOpgaver(gemteTasks); // Opdaterer state med gemte opgaver
  }, []);

  // Opdater localStorage, når der gives point eller løses opgave
  const faerdiggoerOpgaver = (taskName, taskPoints) => {
    // En funktion der håndterer færdiggørelse af opgaver. Den tager to parametre: taskName (navnet på opgaven) og taskPoints (point for opgaven)
    if (!faerdigeOpgaver.includes(taskName)) {
      // Hvis opgaven ikke allerede er færdiggjort (hvis ikke arrayet faerdigeOpgaver indeholder taskName)
      const newTasks = [...faerdigeOpgaver, taskName]; // Oprettes et nyt array newTasks, der indeholder alle tidligere færdige opgaver plus den nye opgave (taskName)
      const newPoints = points + taskPoints; // Opdateres point ved at lægge de nuværende point sammen med pointene for den nye opgave (taskPoints)

      setFaerdigeOpgaver(newTasks); // Opdaterer state med de nye færdige opgaver
      setPoints(newPoints); // Opdaterer state med de nye point

      localStorage.setItem("faerdigeOpgaver", JSON.stringify(newTasks)); // Gemmer de nye færdige opgaver i localStorage som en JSON-streng
      localStorage.setItem("points", newPoints.toString()); // Gemmer de nye point i localStorage som en streng
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
