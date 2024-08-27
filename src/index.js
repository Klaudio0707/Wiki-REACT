import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Pages/App.js';

import GlobalStyles from "./styles.js";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles/>
    <App />
  </React.StrictMode>
);


