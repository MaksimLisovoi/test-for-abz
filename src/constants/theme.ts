import { createTheme } from '@mui/material';

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

export const theme = createTheme({
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
