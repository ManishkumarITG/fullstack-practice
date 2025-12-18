import { useNavigate } from "react-router-dom";

import { Outlet, Navigate } from "react-router-dom";

export default function LoginProtectedRoute() {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace/>
}


export const isAuthenticated = () => {
  return !!localStorage.getItem("user-data");
};
