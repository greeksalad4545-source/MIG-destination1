package com.example.app;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppRoutes from './AppRoutes';

const App = () => (
  <BrowserRouter>
    <Routes>
      {Object.entries(AppRoutes).map(([path, componentFactory]) => (
        <Route key={path} path={path} element={componentFactory()} />
      ))}
    </Routes>
  </BrowserRouter>
);

export default App;