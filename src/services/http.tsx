import axios from 'axios';

import {API_URL, API_TOKEN} from '../constants';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: '',
};

if (API_TOKEN) {
  headers.Authorization = `Bearer ${API_TOKEN}`;
}

const http = axios.create({
  baseURL: API_URL,
  withCredentials: false, // This is the default
  headers,
});
http.interceptors.request.use(
  async function (config) {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
export default http;
