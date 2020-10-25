/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment, CommentsByFilm } from '../types';
import { LocalDB } from '../api/sessionStorage';
import { AppThunk } from './store';

interface CommentsState {
  commentsByFilm: CommentsByFilm
  loading: boolean;
  hasErrors: string | null;
}

const initialState: CommentsState = {
  commentsByFilm: {},
  loading: false,
  hasErrors: null,
};

const comments = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    fetchCommentsStart(state) {
      state.loading = true;
      state.hasErrors = null;
    },
    getCommentsSuccess(state, action: PayloadAction<CommentsByFilm>) {
      state.commentsByFilm = action.payload;
      state.loading = false;
      state.hasErrors = null;
    },
    fetchCommentsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.hasErrors = action.payload;
    },
  },
});

export const {
  fetchCommentsStart,
  getCommentsSuccess,
  fetchCommentsFailure,
} = comments.actions;
export default comments.reducer;

export const fetchComments = (): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchCommentsStart());
    const commentsByFilm = await LocalDB.loadComments() as CommentsByFilm;
    dispatch(getCommentsSuccess(commentsByFilm));
  } catch (err) {
    dispatch(fetchCommentsFailure(err));
  }
};

export const fetchAddComment = (comment: Comment): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchCommentsStart());
    const commentsByFilm = await LocalDB.saveComments(comment) as CommentsByFilm;
    dispatch(getCommentsSuccess(commentsByFilm));
  } catch (err) {
    dispatch(fetchCommentsFailure(err));
  }
};
