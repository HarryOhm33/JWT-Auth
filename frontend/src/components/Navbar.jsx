// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/">Home</Link> |{" "}
      {user ? (
        <>
          <Link to="/dashboard">Dashboard</Link> |{" "}
          <Link onClick={() => logout()}>Logout</Link>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
