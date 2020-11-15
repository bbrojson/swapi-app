/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment, CommentsByFilm } from '../types';
import { LocalDB } from '../api/sessionStorage';
import { AppThunk, RootState } from './store';
import { API } from '../api/api';

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
    addCommentSuccess(state, action: PayloadAction<Comment>) {
      const comment = action.payload;
      const filmsComments = state.commentsByFilm[comment.filmId];
      if (!filmsComments) {
        state.commentsByFilm[action.payload.filmId] = [];
      }
      state.commentsByFilm[action.payload.filmId].push(comment);
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
  addCommentSuccess,
  fetchCommentsFailure,
} = comments.actions;
export default comments.reducer;

export const commentsSelector = (state: RootState) => state.comments;

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
    const newComment = await API.fetchAddComment(comment);
    dispatch(addCommentSuccess(newComment));
  } catch (err) {
    dispatch(fetchCommentsFailure(err));
  }
};
