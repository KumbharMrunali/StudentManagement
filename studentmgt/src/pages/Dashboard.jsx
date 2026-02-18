import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Dashboard() {
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem("studentId");
    if (!id) {
      navigate("/login");
    } else {
      setStudentId(id);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("studentId");
    navigate("/login");
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Welcome to Student Dashboard</h1>
        <p>Manage your courses and learning journey</p>
      </div>

      <div className="nav-buttons">
        <button
          onClick={() => navigate("/courses")}
          style={{
            background: "linear-gradient(135deg, #2563eb, #1e40af)",
          }}
        >
          📚 View All Courses
        </button>

        <button
          onClick={() => navigate("/mycourses")}
          style={{
            background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
          }}
        >
          ✓ My Courses
        </button>

        <button
          onClick={handleLogout}
          style={{
            background: "linear-gradient(135deg, #ef4444, #dc2626)",
          }}
        >
          🚪 Logout
        </button>
      </div>

      <div className="card" style={{ marginTop: "2rem" }}>
        <h3 style={{ color: "#0f172a", fontWeight: "800" }}>Getting Started</h3>
        <p style={{ color: "#1e293b", fontWeight: "600", fontSize: "1.05rem" }}>
          Browse all available courses and enroll in topics that interest you. Track your progress and manage your learning journey from your personal dashboard.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
