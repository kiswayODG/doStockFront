import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LinearProgress } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <Suspense fallback={<LinearProgress />}>
  <ToastContainer  autoClose={8000}/>
  <App />
  </Suspense>
  </BrowserRouter>
);

reportWebVitals();
