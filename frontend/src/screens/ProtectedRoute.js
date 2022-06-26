import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = () => {
  const user = useAuth();
  const isAllow = user.role === "user";

  return isAllow ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
