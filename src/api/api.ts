import axios from 'axios';

import { FilmsResponse } from '../types';

export const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
  timeout: 30000,
  headers: {
    'Content-type': 'application/json',
  },
  method: 'GET',
});

instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      // eslint-disable-next-line no-console
      console.log(error.response.data.message);
    } else {
      // eslint-disable-next-line no-console
      console.log(error.message);
    }
    return Promise.reject(error);
  },
);

export const API = {
  fetchFilms: () => instance.get<void, FilmsResponse>('/films/'),
};
