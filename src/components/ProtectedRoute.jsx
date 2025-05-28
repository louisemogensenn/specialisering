import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ children }) { // Komponent til at beskytte ruter, så kun brugere, der er logget ind, kan tilgå dem
  const { user, loading } = useAuth(); // Bruger useAuth hook til at få adgang til brugerens information og loading status fra AuthContext

  if (loading) return <p>Indlæser...</p>; // Hvis auth-status stadig indlæses, vis en simpel loading-tekst
  if (!user) return <Navigate to="/" />;   // Hvis ingen bruger er logget ind, omdirigér til logind-siden ("/")

  return children; // Hvis bruger er logget ind og data er hentet, vis det beskyttede indhold
}
