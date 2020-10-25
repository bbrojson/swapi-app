import axios from 'axios';

import { Film } from '../types';

export const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
  timeout: 40000,
  headers: {
    'Content-type': 'application/json',
  },
  method: 'GET',
});

instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      console.log(error.response.data.message);
    } else {
      console.log(error.message);
    }
    return Promise.reject(error);
  },
);

export const API = {
  fetchFilms: () => instance.get<void, [Film]>('/films'),
};
