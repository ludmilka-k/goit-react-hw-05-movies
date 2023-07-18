import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react'
import {theme} from './constants';

import { App } from './components/App'
import './index.css';
// import { GlobalStyle } from './components/styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter basename="goit-react-hw-05-movies">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>
);
