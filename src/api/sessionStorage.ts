/* eslint-disable import/prefer-default-export */
import { Comment, CommentsByFilm } from '../types';

const SESSION_STORAGE_APP_COMMENT_ID = 'SESSION_STORAGE_APP_COMMENT_ID';

export function saveToSessionStorage<T>(key: string, value: T) {
  return new Promise((resolve, reject) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      resolve(value);
    } catch (e) {
      reject();
    }
  });
}

function addCommentToSessionStorage(comment: Comment): Promise<CommentsByFilm> {
  return new Promise((resolve, reject) => {
    try {
      const comments = JSON.parse(localStorage.getItem(SESSION_STORAGE_APP_COMMENT_ID));
      comments[comment.filmId].push(comment);

      localStorage.setItem(SESSION_STORAGE_APP_COMMENT_ID, JSON.stringify(comments));
      resolve(comments);
    } catch (e) {
      reject();
    }
  });
}

function loadFromSessionStorage(key: string): Promise<CommentsByFilm> {
  return new Promise((resolve, reject) => {
    try {
      const value = JSON.parse(localStorage.getItem(key));
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
    loadFromSessionStorage(SESSION_STORAGE_APP_COMMENT_ID)),
};
