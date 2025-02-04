import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { makeServer } from './mirage/server';

makeServer();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);