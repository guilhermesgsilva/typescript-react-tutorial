import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // https://github.com/atlassian/react-beautiful-dnd/issues/2396
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);