import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://api.',
  baseURL: 'http://localhost:3000',
});

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default instance;
