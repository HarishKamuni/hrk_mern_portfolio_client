import axios from 'axios';

const API = axios.create({
  baseURL: 'https://hrk-mern-portfolio-server.onrender.com', // ← your Render backend URL
});

// (Optional but recommended)
// Automatically attach headers
API.interceptors.request.use((req) => {
  req.headers['Content-Type'] = 'application/json';
  return req;
});

export default API;
