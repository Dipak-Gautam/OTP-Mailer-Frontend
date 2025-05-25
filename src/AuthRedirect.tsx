import { Navigate } from "react-router-dom";

const AuthRedirect = () => {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/home" />
  );
};

export default AuthRedirect;
