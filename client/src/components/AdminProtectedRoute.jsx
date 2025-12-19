import { Outlet, Navigate } from "react-router-dom";
import Layout from "./Layout";

export default function AdminProtectedRoute() {
    console.log(isAuthenticated());
    
    return isAuthenticated() ==="admin" ? <Layout /> : <Navigate to="/sign" replace/>
}


export const isAuthenticated = () => {
  const user = localStorage.getItem("user-data");
  if (!user) return null;

  return JSON.parse(user).role;
};

