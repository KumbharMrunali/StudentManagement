import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/api";

function Signup() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    if (!student.name || !student.email || !student.password) {
      setError("Please fill in all fields");
      return;
    }

    setError("");
    setLoading(true);

    try {
      await API.post("/student/signup", student);
      navigate("/login");
    } catch (error) {
      console.error(error);
      setError("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !loading) {
      handleSignup();
    }
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <div className="form-header">
          <h2>Create Account</h2>
          <p>Join us to access all courses</p>
        </div>

        {error && <div className="alert alert-error">{error}</div>}

        <form onKeyPress={handleKeyPress}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="John Doe"
              value={student.name}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={student.email}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="••••••••"
              value={student.password}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <button
            type="button"
            onClick={handleSignup}
            disabled={loading}
            style={{ width: "100%" }}
          >
            {loading ? <span className="spinner"></span> : "Create Account"}
          </button>
        </form>

        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <p style={{ color: "var(--text-secondary)" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ fontWeight: "700" }}>
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
