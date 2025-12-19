

import { Outlet, Navigate } from "react-router-dom";
import Layout from "./Layout";

export default function LoginProtectedRoute() {
  
    return isAuthenticated() ? <Layout /> : <Navigate to="/sign" replace/>
}

export const isAuthenticated = () =>  localStorage.getItem("user-data");

