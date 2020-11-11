import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import store from './store/store';
import Header from './components/Header/Header';
import List from './views/List/List';
import Film from './views/Film/Film';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    fontFamily: [
      'Gilroy-Extra',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
console.log(darkTheme);
darkTheme.palette.background.default = '#191919';
darkTheme.palette.background.paper = '#232323';
darkTheme.palette.text.secondary = '#787878';
darkTheme.typography.h3.fontSize = '2.187rem';
darkTheme.typography.body1.fontSize = '1.062rem';
darkTheme.typography.body2.fontSize = '0.9375rem';
darkTheme.typography.body2.lineHeight = '1.625rem';

export default function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
