import axios from 'axios';

export const API_BASE = "http://localhost:8080";

const axiosClient = axios.create({
  baseURL: API_BASE,
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const get = async (url) => {
  const response = await axiosClient.get(url);
  return response;
}

export const post = async (url, data) => {
  const response = await axiosClient.post(url, data);
  return response;
}
