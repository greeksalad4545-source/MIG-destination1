package src/RootApp.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { title } from './constants';

const RootApp = ({ routingMap, initialRoute }) => {
  if (!routingMap || !routingMap.has(initialRoute)) {
    throw new Error(`Routing map must contain an entry for the initial route: "${initialRoute}"`);
  }

  document.title = title;

  return (
    <BrowserRouter>
      <Routes>
        {[...routingMap.entries()].map(([path, builder]) => (
          <Route key={path} path={path} element={builder()} />
        ))}
        <Route path="*" element={<Navigate to={initialRoute} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootApp;