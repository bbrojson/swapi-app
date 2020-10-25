/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Film } from '../types';
import { AppThunk, RootState } from './store';
import { API } from '../api/api';

interface FilmState {
  loading: boolean;
  hasErrors: string | null;
  films: Film[];
}

export const initialState: FilmState = {
  loading: false,
  hasErrors: null,
  films: [],
};

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    getFilmsStart(state) {
      state.loading = true;
      state.hasErrors = null;
    },
    getFilmsSucces(state, action: PayloadAction<Film[]>) {
      state.films = action.payload;
      state.loading = false;
      state.hasErrors = null;
    },
    getFilmsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.hasErrors = action.payload;
    },
  },
});

export const filmsSelector = (state: RootState) => state.films;

export const {
  getFilmsStart,
  getFilmsSucces,
  getFilmsFailure,
} = filmsSlice.actions;

export default filmsSlice.reducer;

export function fetchFilms(): AppThunk {
  return async (dispatch) => {
    try {
      dispatch(getFilmsStart());
      const { results } = await API.fetchFilms();
      dispatch(getFilmsSucces(results));
    } catch (error) {
      dispatch(getFilmsFailure(error));
    }
  };
}
