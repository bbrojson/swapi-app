import axios from 'axios';
import {
  FilmsResponse,
  Film,
  Comment,
  CommentsByFilm,
} from '../types';

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
  fetchFilm: (id: string) => instance.get<void, Film>(`/films/${id}/`),
  // ! absolutly faked
  fetchAddComment: (comment: Comment): Promise<Comment> => new Promise(
    (resolve, reject) => setTimeout(() => {
      try {
        const newComment = {
          ...comment,
          id: Date(),
        };
        let comments = JSON.parse(
          sessionStorage.getItem(process.env.REACT_APP_SESSION_STORAGE_KEY),
        );
        if (!comments) {
          comments = {};
        }
        if (!comments[comment.filmId]) {
          comments[comment.filmId] = [];
        }
        comments[comment.filmId].push(newComment);

        sessionStorage.setItem(process.env.REACT_APP_SESSION_STORAGE_KEY, JSON.stringify(comments));
        resolve(newComment);
      } catch (error) {
        reject(error);
        // do nothiong, probably storage is blocked by browser settings
      }
    }, 500),
  ),
  // ! faked delay
  fetchComments: (): Promise<CommentsByFilm> => new Promise(
    (resolve, reject) => setTimeout(() => {
      try {
        const session = window.sessionStorage.getItem(process.env.REACT_APP_SESSION_STORAGE_KEY);
        const commentsByFilm = JSON.parse(session);
        resolve(commentsByFilm || {});
      } catch (error) {
        reject();
      }
    }, 500),
  ),
};
