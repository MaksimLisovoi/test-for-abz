import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/App/App';
import '@fontsource/nunito/400.css';
import './index.css';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface SimplePaletteColorOptions {
    heroTextColor?: string;
    accent?: string;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    custom: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    custom?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    custom: true;
  }
}

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
      main: '#7E7E7',
    },
    secondary: {
      main: '#fff',
    },
    background: {
      default: '#F8F8F8',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      // secondary: 'rgba(0, 0, 0, 0.87)',
    },
    custom: {
      main: '#F4E041',
      heroTextColor: '#fff',
      accent: '#00BDD3',
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
