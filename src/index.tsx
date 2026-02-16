package src/Index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

export const Index: React.FC = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Index />);