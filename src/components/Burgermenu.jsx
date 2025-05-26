import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase";

export default function Burgermenu() {
  const { role } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };

  if (!role) {
    return null; // Eller en spinner / "Loading..."
  }

  return (
    <>
      {role === "elev" ? (
        <nav className="themable text-2xl flex flex-col justify-center align-center text-center gap-12 mt-[-10%] md:mt-[-5%] h-screen">
          <Link to="/">Log Ind</Link>
          <Link to="/mineforloeb">Se mine forløb</Link>
          <Link to="/shop">Gå til shop</Link>
          <Link to="#">Indstillinger</Link>
          <button onClick={handleLogout}>Log ud</button>
        </nav>
      ) : (
        <nav className="themable text-2xl flex flex-col justify-center align-center text-center gap-12 mt-[-10%] md:mt-[-5%] h-screen">
          <Link to="/udforskalleforloeb">Udforsk alle forløb</Link>
          <Link to="/mineforloeb">Se mine forløb</Link>
          <Link to="#">Indstillinger</Link>
          <button onClick={handleLogout}>Log ud</button>
        </nav>
      )}
    </>
  );
}
