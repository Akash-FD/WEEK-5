import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("user"); // Check if user data exists in localStorage

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;