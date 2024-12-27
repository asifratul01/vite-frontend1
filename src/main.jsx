import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure this path is correct for your project
import App from './App.jsx'; // Ensure this path is correct for your project

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>
);
