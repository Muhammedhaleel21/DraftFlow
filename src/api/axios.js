import axios from "axios";

const api = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
//  withCredentials: true, // useful if you add auth later
});

export default api;
