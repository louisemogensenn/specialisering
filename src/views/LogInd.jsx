import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

import Overskrift from "../components/Overskrift";
import gyldendallogo from "../assets/gyldendal.svg";
import CallToActionKnap from "../components/CallToActionKnap";

export default function LogInd() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      // Hent rolle fra Firestore
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const role = docSnap.data().role;
        console.log("Brugerens rolle:", role);

        // Naviger til en rollebaseret side
        navigate("/", { state: { role } }); // eller gem i context/global state
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
