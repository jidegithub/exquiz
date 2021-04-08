import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:3000',
  baseURL: 'https://jidegithub.github.io/exquiz-api/data'
});

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default instance;
