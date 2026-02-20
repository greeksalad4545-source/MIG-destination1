/**
 * RootApp component sets up the global routing configuration.
 * It mirrors Flutter's MaterialApp.routes behavior, references the centralized `appRoutes` mapping,
 * validates the presence of `INITIAL_ROUTE`, and sets the document title.
 */
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {
  appRoutes,
  APP_TITLE,
  INITIAL_ROUTE,
  // other route constants can be imported as needed
} from './constants';

const RootApp: React.FC = () => {
  document.title = APP_TITLE;

  if (!appRoutes[INITIAL_ROUTE]) {
    throw new Error('Configuration error: INITIAL_ROUTE is not defined in appRoutes');
  }

  return (
    <BrowserRouter>
      <Routes>
        {Object.entries(appRoutes).map(([path, Component]) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<Navigate to={INITIAL_ROUTE} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export { RootApp };