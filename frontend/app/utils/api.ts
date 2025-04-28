import axios from 'axios';

const api = axios.create({
  baseURL: 'https://entrepreneur-platform-ot9w.vercel.app/',
});

export default api;