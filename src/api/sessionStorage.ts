/* eslint-disable import/prefer-default-export */
import { Comment, CommentsByFilm } from '../types';

export function saveToSessionStorage<T>(key: string, value: T) {
  return new Promise((resolve, reject) => {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
      resolve(value);
    } catch (e) {
      reject();
    }
  });
}

function addCommentToSessionStorage(comment: Comment): Promise<CommentsByFilm> {
  return new Promise((resolve, reject) => {
    try {
      let comments = JSON.parse(sessionStorage.getItem(process.env.REACT_APP_SESSION_STORAGE_KEY));
      if (!comments) {
        comments = [];
      }
      comments[comment.filmId].push(comment);

      sessionStorage.setItem(process.env.REACT_APP_SESSION_STORAGE_KEY, JSON.stringify(comments));
      resolve(comments);
    } catch (e) {
      reject();
    }
  });
}

function loadFromSessionStorage(key: string): Promise<CommentsByFilm> {
  return new Promise((resolve, reject) => {
    try {
      const value = JSON.parse(sessionStorage.getItem(key));
      resolve(value);
    } catch (e) {
      reject();
    }
  });
}

export const LocalDB = {
  saveComments: (comment: Comment): Promise<CommentsByFilm> => (
    addCommentToSessionStorage(comment)),
  loadComments: (): Promise<CommentsByFilm> => (
    loadFromSessionStorage(process.env.REACT_APP_SESSION_STORAGE_KEY)),
};
