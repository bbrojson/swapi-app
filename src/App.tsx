import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import darkTheme from './theme/darkTheme';
import Header from './components/Header/Header';
import List from './views/List/List';
import Film from './views/Film/Film';
import { fetchComments } from './store/commentsSlice';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/list" element={<List />} />
          <Route path="/film/:id" element={<Film />} />
          <Route path="/" element={<List />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
