import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import APP_ROUTES from './routes';

const App = () => (
  <BrowserRouter>
    <Routes>
      {Object.entries(APP_ROUTES).map(([path, element]) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  </BrowserRouter>
);

export default App;