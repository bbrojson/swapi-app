/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import filmsReducer from './filmsSlice';
import commentsReducer from './commentsSlice';

const store = configureStore({
  reducer: {
    films: filmsReducer,
    comments: commentsReducer,
  },
});

store.subscribe(() => {
  window.sessionStorage.setItem(
    process.env.REACT_SESSION_STORAGE_KEY,
    JSON.stringify(store.getState()),
  );
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export default store;
