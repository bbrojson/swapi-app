/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
// import { Film } from '../types';
import { API } from '../api/api';

export const initialState = {
  loading: false,
  hasErrors: null,
  films: [],
};

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    fetchFilmsStart(state) {
      state.loading = true;
      state.hasErrors = null;
    },
    fetchFilmsSucces(state) {
      state.loading = false;
      state.hasErrors = null;
    },
    fetchFilmsFailure(state, { payload }) {
      state.loading = false;
      state.hasErrors = payload.toString();
    },
    listFilms(state, { payload }) {
      state.films = payload;
      state.loading = false;
      state.hasErrors = null;
    },
  },
});

export const filmsSelector = (state) => state.films;

export const {
  fetchFilmsStart,
  fetchFilmsSucces,
  fetchFilmsFailure,

  listFilms,
} = filmsSlice.actions;

export default filmsSlice.reducer;

export function fetchFilms() {
  return async (dispatch) => {
    try {
      dispatch(fetchFilmsStart());

      const { results } = await API.fetchFilms();

      dispatch(listFilms(results));
    } catch (error) {
      dispatch(fetchFilmsFailure(error));
    }
  };
}
