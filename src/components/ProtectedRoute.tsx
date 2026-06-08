import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../context/AuthContext";

const ProtectedRoute = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? <Outlet></Outlet> : <Navigate to="/login" />;
};

export default ProtectedRoute;
