import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import Overskrift from "../components/Overskrift";
import gyldendallogo from "../assets/gyldendal.svg";
import CallToActionKnap from "../components/CallToActionKnap";
import { useAuth } from "../context/AuthContext"; // Importer AuthContext for at få adgang til brugerens rolle

export default function LogInd() {
  const { setCurrentUser, setUserRole } = useAuth(); // Brug AuthContext til at opdatere brugerens rolle
  const [email, setEmail] = useState(""); // Initialiser email state
  const [password, setPassword] = useState(""); // Initialiser password state
  const navigate = useNavigate(); // Brug useNavigate til at navigere efter login

  const handleLogin = async (e) => {
    e.preventDefault(); // Undgår, at default-værdien træder i kraft, når man trykket på knappen

    try { // Prøv at logge ind med email og adgangskode
      const userCredential = await signInWithEmailAndPassword( // opretter en konstant, der venter på signInWithEmailAndPassword
        auth, // Tager auth fra firebase
        email, // Tager email fra state
        password // Tager password fra state
      );
      const uid = userCredential.user.uid; // Opretter en konstant uid, der tager brugeren uid

      // Hent rolle fra Firestore
      const docRef = doc(db, "users", uid); // Opretter en reference til dokumentet i Firestore
      const docSnap = await getDoc(docRef); // Henter dokumentet fra Firestore

      if (docSnap.exists()) { // Hvis dokumentet findes (med dokumentet menes brugerens uid)
        const role = docSnap.data().role; // Så oprettes en konstant rolle, der tager data fra dokumentet. Denne data omhandler brugerens rolle
        // console.log("Brugerens rolle:", role); // 

        setCurrentUser(userCredential.user); // opdater context til brugeren
        setUserRole(role); // opdater context til brugerens rolle

        navigate("/mineforloeb", { state: { fromLogin: true } }); // Navigerer til "mineforloeb" siden, når login er succesfuldt - altså når state er opdateret og når brugeren komer fra logind-siden
      } else {
        alert("Brugerens rolle blev ikke fundet.");
      }
    } catch (error) {
      console.error("Login-fejl:", error.message);
      alert("Forkert email eller adgangskode");
    }
  };

  return (
    <section className="themable">
      <img
        className="w-[300px] h-[60px] mx-auto mb-16 mt-5"
        src={gyldendallogo}
        alt="Gyldendal Logo"
      />

      <Overskrift tekst="LOG IND" />

      <section className="flex flex-col mx-[12.5%] my-8">
        <form className="flex flex-col gap-6" onSubmit={handleLogin}>
          <aside>
            <label htmlFor="email" className="text-lg mb-2">
              Brugernavn
            </label>
            <input
              className="w-full h-12 border px-3 rounded"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Indtast email"
              required
            />
          </aside>

          <aside>
            <label className="text-lg mb-2">Adgangskode</label>
            <input
              className="w-full h-12 border px-3 rounded"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Indtast adgangskode"
              required
            />
          </aside>

          <aside className="mt-[5%] flex justify-center items-center">
            <button type="submit">
              <CallToActionKnap tekst={"LOG IND"} />
            </button>
          </aside>
        </form>

        <aside className="flex flex-col text-center gap-6 mt-[10%]">
          <p className="text-[20px] underline">Glemt kodeord?</p>
          <p className="text-[20px] underline">Ikke medlem? Opret dig</p>
        </aside>
      </section>
    </section>
  );
}
