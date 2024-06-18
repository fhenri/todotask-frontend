// src/services/authService.ts
import axios from 'axios';
import { config } from '../Constants'

//const API_URL = 'https://api.todotask.cloud06.io/api';
//const API_URL = 'http://localhost:8080/api';

const instance = axios.create({
  baseURL: config.url.API_BASE_URL
})

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
    console.log(process.env.NODE_ENV)
  const response = await instance.post<SignInResponse>('/auth/signin', { login, password });
  return response.data;
};

export const getUser = async (token: string): Promise<User> => {
  const response = await instance.get<User>('/user/me', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};
