import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

function MyCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const studentId = localStorage.getItem("studentId");
  const navigate = useNavigate();

  useEffect(() => {
    if (!studentId) {
      navigate("/login");
      return;
    }
    fetchMyCourses();
  }, []);

  const fetchMyCourses = async () => {
    try {
      setLoading(true);
      const res = await API.get(`/course/student/${studentId}`);
      setCourses(res.data || []);
      setError("");
    } catch (error) {
      console.error("Error fetching courses:", error);
      setError("Failed to load your courses");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>My Enrolled Courses</h1>
        <p>Track your course progress and continue learning</p>
      </div>

      {error && <div className="alert alert-error">{error}</div>}

      {loading ? (
        <div style={{ textAlign: "center", padding: "3rem" }}>
          <div className="spinner"></div>
          <p style={{ marginTop: "1rem" }}>Loading your courses...</p>
        </div>
      ) : courses.length === 0 ? (
        <div className="empty-state">
          <h3>No Courses Enrolled Yet</h3>
          <p>Explore available courses and start learning today!</p>
          <button
            onClick={() => navigate("/courses")}
            style={{ marginTop: "1rem" }}
          >
            Browse Courses
          </button>
        </div>
      ) : (
        <div className="grid grid-2">
          {courses.map((course) => (
            <div key={course.id} className="item-card fade-in">
              <h3>✓ {course.title}</h3>
              <p>{course.description}</p>
              <div className="meta">
                <span>📚 Course Content</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyCourses;
