import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeContextProvider from './context/themeContext';
import './index.css';
import reportWebVitals from './reportWebVitals';

const theme = createTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeContextProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ThemeContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
