import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [enrolling, setEnrolling] = useState({});
  const [error, setError] = useState("");
  const studentId = localStorage.getItem("studentId");
  const navigate = useNavigate();

  useEffect(() => {
    if (!studentId) {
      navigate("/login");
      return;
    }
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const res = await API.get("/course/all");
      setCourses(res.data || []);
    } catch (error) {
      console.error("Error fetching courses:", error);
      setError("Failed to load courses");
    } finally {
      setLoading(false);
    }
  };

  const enrollCourse = async (courseId) => {
    setEnrolling((prev) => ({ ...prev, [courseId]: true }));

    try {
      await API.post("/enrollment/add", {
        studentId: parseInt(studentId),
        courceId: courseId,
      });
      setError("");
      await fetchCourses();
    } catch (error) {
      console.error("Enrollment error:", error);
      setError("Enrollment failed. Please try again.");
    } finally {
      setEnrolling((prev) => ({ ...prev, [courseId]: false }));
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Available Courses</h1>
        <p>Browse and enroll in courses to expand your knowledge</p>
      </div>

      {error && <div className="alert alert-error">{error}</div>}

      {loading ? (
        <div style={{ textAlign: "center", padding: "3rem" }}>
          <div className="spinner"></div>
          <p style={{ marginTop: "1rem" }}>Loading courses...</p>
        </div>
      ) : courses.length === 0 ? (
        <div className="empty-state">
          <h3>No Courses Available</h3>
          <p>Check back soon for new courses.</p>
        </div>
      ) : (
        <div className="grid grid-3">
          {courses.map((course) => (
            <div key={course.id} className="item-card fade-in">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button
                onClick={() => enrollCourse(course.id)}
                disabled={enrolling[course.id]}
                style={{ width: "100%" }}
              >
                {enrolling[course.id] ? (
                  <span className="spinner"></span>
                ) : (
                  "Enroll Now"
                )}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Courses;
