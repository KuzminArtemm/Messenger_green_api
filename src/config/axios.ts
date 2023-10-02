import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.green-api.com/',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;
