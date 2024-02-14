// Step-1
// index.js

// Import necessary modules from React and React DOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import CSS file for styling
import './index.css';

// Import main App component
import App from './App';

// Import BrowserRouter for routing
import { BrowserRouter } from 'react-router-dom';

// Create a root for rendering React elements
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped in BrowserRouter within StrictMode
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Code by Ajay Shankar
