import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { signOut, user } = useAuth();
  console.log(user);
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={signOut}>Çıkış</button>
    </div>
  );
}
