import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/App/App';
import '@fontsource/nunito/400.css';
import './index.css';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

// declare module '@mui/material/styles' {
//   interface SimplePaletteColorOptions {
//     tableBg: string;
//     border: string;
//     accent: string;
//     textColor: string;
//     aqua: string;
//   }
// }

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#05a',
//       tableBg: '#293143',
//       border: '#1d2330',
//       accent: '#343e56',
//       textColor: '#8699b8',
//       aqua: '#47c2be',
//     },

//     common: {
//       black: '#293143',
//     },
//     background: {
//       default: '#171B26',
//     },
//   },
// });

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#f4e041',
    },
    secondary: {
      main: '#00BDD3',
    },
    background: {
      default: '#F8F8F8',
    },
    text: {
      secondary: '#FFF',
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 360,
      md: 768,
      lg: 1024,
      xl: 2560,
    },
  },
  typography: {
    h1: {
      fontSize: 40,
      lineHeight: 1,
      fontWeight: 400,
    },
    body1: {
      fontSize: 16,
      lineHeight: 1.625,
      fontWeight: 400,
    },

    fontFamily: 'Nunito',
    fontSize: 16,
    fontWeightRegular: 400,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
