import axios from "axios";

const API = axios.create({
  baseURL: "https://student-backend-9lph.onrender.com",
});

export default API;
