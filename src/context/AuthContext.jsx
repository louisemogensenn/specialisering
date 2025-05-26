import React, { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useContext } from "react";

export const AuthContext = createContext(); // Opretter AuthContext ved brug af createContext, der kan bruges til at dele autentificeringsdata i hele applikationen

// Provider-komponent, der wrapper resten af appen og gør auth-data tilgængelig
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // Gemmer den aktuelle bruger (Firebase-user object)
  const [role, setRole] = useState(null); //// Gemmer brugerens rolle (elev / underviser)
  const [loading, setLoading] = useState(true); // // Indikerer om brugerdata stadig indlæses (er ved at blive hentet)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => { // En funktion der lytter efter ændringer i autentificeringstilstanden
      if (firebaseUser) { // Hvis en bruger er logget ind
        setUser(firebaseUser); // Opdaterer state med den aktuelle Firebase-bruger
        const docRef = doc(db, "users", firebaseUser.uid); // Hent rollen fra Firestore
        const docSnap = await getDoc(docRef); // Henter dokumentet for den aktuelle bruger baseret på UID
        if (docSnap.exists()) { // Hvis dokumentet findes
          setRole(docSnap.data().role); // Opdaterer rollen i state baseret på data fra Firestore
        }
      } else { // Hvis ingen bruger er logget ind
        setUser(null); // Opdaterer state til null, da der ikke er nogen bruger
        setRole(null); // Opdaterer rollen til null, da der ikke er nogen bruger
      }
      setLoading(false); // Sætter loading til false, da data nu er hentet (eller ingen bruger er logget ind)
    });

    return () => unsubscribe(); // Rydder op ved at afmelde lytteren, når komponenten unmountes
  }, []);

  // Gør user, role, loading og mulighed for at ændre user/role tilgængelig for børn-komponenter
  return (
    <AuthContext.Provider
    value={{
      user,
      role,
      loading,
      setCurrentUser: setUser,
      setUserRole: setRole,
    }}
  >
    {children}
  </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext); // Custom hook til nem adgang til konteksten i andre komponenter

/*
AuthProvider – hvad gør den?
AuthProvider er en kontekstkomponent, som bruges til at håndtere brugerens loginstatus og rolle i applikationen. Den gør det muligt at dele information om, hvem der er logget ind, og hvilken rolle brugeren har (fx elev eller underviser) – på tværs af hele React-applikationen.

Når appen starter, lytter AuthProvider til Firebase for at se, om en bruger er logget ind. Hvis der er en bruger, hentes der også data fra Firestore for at finde ud af, hvilken rolle brugeren har. Hvis ingen bruger er logget ind, sættes både bruger og rolle til null.

Konteksten stiller disse oplysninger til rådighed for andre komponenter:

user: den aktuelle bruger (eller null, hvis ingen er logget ind)
role: brugerens rolle (hentes fra Firestore)
loading: en indikator for, om data stadig er ved at blive hentet
Disse data bruges f.eks. til at vise forskelligt indhold afhængigt af, om en bruger er elev eller underviser, og til at beskytte sider, som kun må vises for loggede brugere.
*/
