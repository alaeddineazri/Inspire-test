import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// create theme and apply it to the app
import { ThemeProvider } from '@mui/material';
import theme from './theme/Theme';
import {Provider} from 'react-redux'
import store from './redux/store/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
