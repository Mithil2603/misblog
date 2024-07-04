import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Ensure the root is created only once
const container = document.getElementById('root');
let root;

if (!container._reactRootContainer) {
  root = ReactDOM.createRoot(container);
} else {
  root = container._reactRootContainer._internalRoot;
}

// Use root.render() to render or update the component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
