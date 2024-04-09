import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// const ... require
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Importing the functional component App  */}
    {/* App(); */}
    <App />
  </React.StrictMode>
);

