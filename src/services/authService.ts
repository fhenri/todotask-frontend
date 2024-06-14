// src/services/authService.ts
import axios from 'axios';

const API_URL = 'https://api.todotask.cloud06.io/api';

export interface SignInResponse {
  accessToken: string;
}

export interface User {
  id: string;
  username: string;
  name: string;
  email: string;
}

export const signIn = async (login: string, password: string): Promise<SignInResponse> => {
  const response = await axios.post<SignInResponse>(`${API_URL}/auth/signin`, { login, password });
  return response.data;
};

export const getUser = async (token: string): Promise<User> => {
  const response = await axios.get<User>(`${API_URL}/user/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};
