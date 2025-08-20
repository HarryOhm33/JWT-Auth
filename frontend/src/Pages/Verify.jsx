// src/pages/Verify.jsx
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Verify = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { verify } = useAuth();

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const token = query.get("token");
    const email = query.get("email");

    const verifyAccount = async () => {
      try {
        const res = await verify(token, email);

        // console.log(res.data);

        if (res.data.valid) {
          setMessage(res.data.message || "✅ Account verified successfully!");
          setTimeout(() => navigate("/auth/login"), 3000); // redirect after 3s
        } else {
          setMessage(
            res.data.message || "❌ Verification failed. Please try again."
          );
          setTimeout(() => navigate("/auth/signup"), 3000); // redirect to signup
        }
      } catch (error) {
        setMessage(error.response?.data?.message || "❌ Verification failed.");
        setTimeout(() => navigate("/auth/signup"), 3000); // redirect to signup
      } finally {
        setLoading(false);
      }
    };

    if (token && email) {
      verifyAccount();
    } else {
      setMessage("Invalid verification link ❌");
      setLoading(false);
      setTimeout(() => navigate("/auth/signup"), 3000); // redirect to signup
    }
  }, [location, verify, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? <p>⏳ Verifying your account...</p> : <h2>{message}</h2>}
    </div>
  );
};

export default Verify;
