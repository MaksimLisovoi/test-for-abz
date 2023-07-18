import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/App/App';
import '@fontsource/nunito/400.css';
import './index.css';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { theme } from './constants/theme';
import { SuccessFormProvider } from './context/submitFormCotext';
import { CardsStateProvider } from './context/UserCardsStateContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CardsStateProvider>
        <SuccessFormProvider>
          <App />
        </SuccessFormProvider>
      </CardsStateProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
