import React, { useRef, useState, useEffect } from "react";
import lydfil from "../assets/hulelignelsen.mp3";

export default function Lydafspiller() {
  const lydRef = useRef(null); // Oprettelse af en reference til lyd-elementet
  const [afspiller, setAfspiller] = useState(false); // En state til at holde styr på, om lydafspilleren er i afspilningstilstand eller ej
  const [progress, setProgress] = useState(0); // En state til at holde styr på afspilningsprocenten
  const [duration, setDuration] = useState(0); // En state til at holde styr på lydens samlede varighed

  const togglePlay = () => {
    // En funktion til at skifte mellem play og pause (også mellem de to ikoner, der vises)
    const lyd = lydRef.current; // Der oprettes en konstant
    if (lyd) { // Hvis der er en lyd
      // Hvis lyd-elementet findes, så skifter vi til play eller pause
      if (afspiller) { // Hvis afspiller er true, så skal vi pause
        lyd.pause(); // Vi pauser lydafspilleren ved brug af .pause, der er en metode på lyd-elementet (useRef)
      } else { // Hvis afspiller er false, så skal vi spille
        lyd.play(); // Vi spiller lydafspilleren ved brug af .play, der er en metode på lyd-elementet (useRef)
      }
      setAfspiller(!afspiller); // Vi skifter afspiller state til det modsatte af, hvad den er nu
    }
  };

  useEffect(() => { // useEffect bruges til at håndtere sideeffekter i komponenten, herunder opdatering af afspilningsprocent og varighed, hver gang komponenten opdateres
    const lyd = lydRef.current; // Vi henter lyd-elementet fra referencen

    const updateProgress = () => {
      // En funktion til at opdatere afspilningsprocenten
      if (lyd && duration) { // Hvis lyd-elementet findes og varigheden er sat, så opdateres progress
        setProgress((lyd.currentTime / duration) * 100); // Vi sætter progress til den nuværende tid divideret med varigheden ganget med 100 for at få procentdelen
      }
    };

    const handleLoadedMetadata = () => { // En funktion, der håndterer, når metadata for lydfilen er indlæst
      setDuration(lyd.duration); // Varigheden sættes til lydfilens samlede varighed, når metadata er indlæst
    };

    lyd.addEventListener("timeupdate", updateProgress); // Vi tilføjer en event listener, der opdaterer afspilningsprocenten, når tiden opdateres
    lyd.addEventListener("loadedmetadata", handleLoadedMetadata); // Vi tilføjer en event listener, der håndterer, når metadata er indlæst

    return () => {
      lyd.removeEventListener("timeupdate", updateProgress); // Vi fjerner event listeneren for timeupdate, når komponenten unmountes
      lyd.removeEventListener("loadedmetadata", handleLoadedMetadata); // Vi fjerner event listeneren for loadedmetadata, når komponenten unmountes
    };
  }, [duration]); // useEffect afhænger af duration, så den kører igen, når varigheden ændres

  return (
    <>
      <section className="themable flex items-center justify-between border rounded p-3 mx-[12.5%] relative">
        <p>0:00</p> {/* Angiver tiden */}

        {/* Custom Progressbar */}
        <article className="relative w-full h-2 mx-4 bg-gray-300 rounded overflow-hidden">
          <section
            className="h-full bg-black transition-all"
            style={{ width: `${progress}%` }} // En template literal som indsætter værdien af variablen progress, efterfulgt af procent-tegnet %.
          ></section>
        </article>

        <p>3:02</p>

        {/* Play / Pause toggle */}
        <button onClick={togglePlay} className="ml-4"> {/* Ved klik skifter den mellem af afspille eller stop */}
          {afspiller ? (
            // Pause ikon
            <svg
              width="15"
              height="18"
              viewBox="0 0 13 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="1" x2="1" y2="15" stroke="black" strokeWidth="4" />
              <line x1="12" x2="12" y2="15" stroke="black" strokeWidth="4" />
            </svg>
          ) : (
            // Play ikon
            <svg
              width="15"
              height="18"
              viewBox="0 0 15 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 9L-8.15666e-07 17.6603L-5.85621e-08 0.339745L15 9Z"
                fill="black"
              />
            </svg>
          )}
        </button>
      </section>

      {/* Skjult lyd-element */}
      <audio ref={lydRef} src={lydfil} /> {/* Referencen til lyden */}

      <p className="underline text-right mr-[12.5%] text-[12px] mt-[10px]">
        Læs teksten
      </p>
    </>
  );
}
