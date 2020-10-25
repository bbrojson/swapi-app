import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header/Header';
import List from './views/List/List';
import Film from './views/Film/Film';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export default function App() {
  return (
    <div>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/list" element={<List />} />
            <Route path="/film/:id" element={<Film />} />
            <Route path="/" element={<List />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}
