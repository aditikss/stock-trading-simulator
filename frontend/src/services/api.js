import axios from 'axios';

// Create base Axios instance
const api = axios.create({
  baseURL: 'http://localhost:5000', // Flask backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
