/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Film } from '../types';
import { AppThunk, RootState } from './store';
import { API } from '../api/api';

export interface FilmState {
  loading: boolean;
  hasErrors: string | null;
  films: Film[];
  filterText: string;
}

export const initialState: FilmState = {
  loading: false,
  hasErrors: null,
  films: [],
  filterText: '',
};

const getIdFromUrl = (url: string) => (url.split('/').slice(-2, -1)[0]);

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    getFilmsStart(state) {
      state.loading = true;
      state.hasErrors = null;
    },
    getFilmsSucces(state, action: PayloadAction<Film[]>) {
      state.films = action.payload.map((film) => ({
        ...film,
        id: getIdFromUrl(film.url),
      }));
      state.loading = false;
      state.hasErrors = null;
    },
    getFilmsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.hasErrors = action.payload;
    },

    getFilmSucces(state, action: PayloadAction<Film>) {
      const index = state.films.findIndex((film) => film.url === action.payload.url);
      action.payload.id = getIdFromUrl(action.payload.url);
      if (index !== -1) {
        state.films[index] = action.payload;
      } else {
        state.films.push(action.payload);
      }
      state.loading = false;
      state.hasErrors = null;
    },

    setFilter(state, action: PayloadAction<string>) {
      state.filterText = action.payload;
    },
  },
});

export const filmsSelector = (state: RootState) => state.films;
export const filmSelector = (id: string) => (state: RootState) => {
  const currentFilm = state.films.films.find((film) => film.id === id);
  return {
    film: currentFilm,
    loading: state.films.loading,
    hasErrors: state.films.hasErrors,
  };
};

export const {
  getFilmsStart,
  getFilmsSucces,
  getFilmsFailure,
  getFilmSucces,
  setFilter,
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

export function fetchFilm(id: string): AppThunk {
  return async (dispatch) => {
    try {
      dispatch(getFilmsStart());
      const film = await API.fetchFilm(id);
      dispatch(getFilmSucces(film));
    } catch (error) {
      dispatch(getFilmsFailure(error));
    }
  };
}
