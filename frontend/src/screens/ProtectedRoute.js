import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Dashboard from "../pages/Dashboard/Dashboard";

const ProtectedRoute = () => {
  const user = useAuth();
  const isAllow = user.role === "admin";

  return isAllow ? <Dashboard /> : <Navigate to="/" />;
};

export default ProtectedRoute;
