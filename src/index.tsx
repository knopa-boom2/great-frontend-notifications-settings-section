import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './css/style.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.tsx';
import { FallbackError } from './components/FallbackError/FallbackError.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={FallbackError}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
