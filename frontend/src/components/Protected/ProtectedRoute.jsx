import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect } from "react";

const ProtectedRoute = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      const timer = setTimeout(() => {
        navigate(`/dashboard`); // ✅ Correct path
      }, 3000);

      return () => clearTimeout(timer); // ✅ Cleanup timeout on unmount
    }
  }, [loading, user, navigate]);

  if (loading) return <p>Loading...</p>;

  // ✅ If user is not logged in, redirect to login instead of /unauthorized
  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
