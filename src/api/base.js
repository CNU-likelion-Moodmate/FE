import axios from 'axios';

export const API_BASE = 'https://moodmate-app-d57dc9f1306a.herokuapp.com/';

const axiosClient = axios.create({
  baseURL: API_BASE,
  timeout: 5000,
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

export const del = async (url, data) => {
  const response = await axiosClient.delete(url, { data });
  return response;
}