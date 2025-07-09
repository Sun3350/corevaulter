import axios from "axios";

const API_BASE_URL = "http://corevaulter-server-6iz8.vercel.app/api";

export const login = async (username: string, password: string) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, {
    username,
    password,
  });
  return response.data;
};

export const register = async (
  name: string,
  username: string,
  email: string,
  password: string
) => {
  const response = await axios.post(`${API_BASE_URL}/auth/register`, {
    name,
    username,
    email,
    password,
  });
  return response.data;
};

export const getCurrentUser = async (token: string) => {
  const response = await axios.get(`${API_BASE_URL}/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
