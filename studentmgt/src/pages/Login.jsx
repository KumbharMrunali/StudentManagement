import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await API.post(
        `/student/login?email=${email}&password=${password}`
      );

      if (res.data) {
        localStorage.setItem("studentId", res.data.id);
        navigate("/dashboard");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error(error);
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !loading) {
      handleLogin();
    }
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <div className="form-header">
          <h2>Student Login</h2>
          <p>Sign in to your account to access courses</p>
        </div>

        {error && <div className="alert alert-error">{error}</div>}

        <form onKeyPress={handleKeyPress}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>

          <button
            type="button"
            onClick={handleLogin}
            disabled={loading}
            style={{ width: "100%" }}
          >
            {loading ? <span className="spinner"></span> : "Sign In"}
          </button>
        </form>

        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <p style={{ color: "var(--text-secondary)" }}>
            Don't have an account?{" "}
            <Link to="/signup" style={{ fontWeight: "700" }}>
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
