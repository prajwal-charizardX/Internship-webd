import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HelmetProvider}from 'react-helmet-async'
 // eslint-disable-next-line
import {storage} from './firebase'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
    <App />
    </HelmetProvider>
  </React.StrictMode>
);


