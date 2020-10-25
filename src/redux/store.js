/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import filmsReducer from './filmsReducer';

export const store = configureStore({
  reducer: {
    films: filmsReducer,
  },
});
