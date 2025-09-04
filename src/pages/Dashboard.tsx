
import { useAuth } from "../context/AuthContext";
import Table from "../components/Table";
import { Divider } from "@mui/material";

export default function Dashboard() {
  const { signOut, user } = useAuth();
  console.log(user);
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={signOut}>Çıkış</button>
      <Divider></Divider>
      <Table></Table>
    </div>
  );
}
