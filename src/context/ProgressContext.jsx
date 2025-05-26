import React, { createContext, useContext, useState, useEffect } from "react";

const ProgressContext = createContext();

export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider = ({ children }) => {
  const [points, setPoints] = useState(0);
  const [completedTasks, setCompletedTasks] = useState([]);

  // Hent gemt data fra localStorage ved opstart
  useEffect(() => {
    const storedPoints = parseInt(localStorage.getItem("points")) || 0;
    const storedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];
    setPoints(storedPoints);
    setCompletedTasks(storedTasks);
  }, []);

  // Opdater localStorage, når der gives point eller løses opgave
  const completeTask = (taskName, taskPoints) => {
    if (!completedTasks.includes(taskName)) {
      const newTasks = [...completedTasks, taskName];
      const newPoints = points + taskPoints;

      setCompletedTasks(newTasks);
      setPoints(newPoints);

      localStorage.setItem("completedTasks", JSON.stringify(newTasks));
      localStorage.setItem("points", newPoints.toString());
    }
  };

  return (
    <ProgressContext.Provider value={{ points, completedTasks, completeTask }}>
      {children}
    </ProgressContext.Provider>
  );
};
