import axios from "axios";

const getToken = () => localStorage.getItem('token_ed_globo');
const api = axios.create({
  baseURL: "http://localhost:9000/api",
  headers: {
    "Content-type": "application/json"
  }
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;