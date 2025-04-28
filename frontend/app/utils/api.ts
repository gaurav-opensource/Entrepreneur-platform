import axios from 'axios';

const api = axios.create({
  baseURL: 'https://entrepreneur-platform-iewt.onrender.com',
});

export default api;