import React from 'react';
import { createRoot } from 'react-dom/client';
import RootApp from './RootApp';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element with id "root" not found');
}

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>
);