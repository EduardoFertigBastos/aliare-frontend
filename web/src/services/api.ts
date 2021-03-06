import axios from 'axios';
import * as dotenv from 'dotenv';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export default api;
