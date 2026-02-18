import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h1>Student Management System</h1>
        <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)", marginBottom: "3rem" }}>
          Your learning platform for course management and enrollment
        </p>
      </div>

      <div className="nav-buttons" style={{ maxWidth: "400px", margin: "0 auto" }}>
        <button onClick={() => navigate("/login")}>
          🔐 Sign In
        </button>

        <button
          onClick={() => navigate("/signup")}
          style={{
            background: "linear-gradient(135deg, #10b981, #059669)",
          }}
        >
          ✨ Create Account
        </button>
      </div>

      <div className="card" style={{ marginTop: "3rem" }}>
        <h3>Welcome</h3>
        <p>
          Access a wide range of courses and manage your learning journey. Sign in to explore available courses or create a new account to get started.
        </p>
      </div>
    </div>
  );
}

export default Home;
