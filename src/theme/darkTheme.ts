import { createMuiTheme } from '@material-ui/core/styles';

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
darkTheme.palette.background.default = '#191919';
darkTheme.palette.background.paper = '#232323';
darkTheme.palette.text.secondary = '#787878';
darkTheme.typography.h3.fontSize = '2.187rem';
darkTheme.typography.body1.fontSize = '1.062rem';
darkTheme.typography.body2.fontSize = '0.9375rem';
darkTheme.typography.body2.lineHeight = '1.625rem';

export default darkTheme;
