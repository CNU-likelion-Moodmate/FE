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
  try {
    const response = await axiosClient.get(url);
    return response.data;
  } catch (error) {
    console.error(`GET ${url} failed:`, error);
    throw error;
  }
}

export const post = async (url, data) => {
  try {
    const response = await axiosClient.post(url, data);
    return response.data;
  } catch (error) {
    console.error(`POST ${url} failed:`, error);
    throw error;
  }
}

export const del = async (url, data) => {
  const response = await axiosClient.delete(url, { data });
  return response;
}