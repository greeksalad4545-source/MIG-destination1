package src/App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routeMap from './routes';

const App: React.FC = () => {
  useEffect(() => {
    document.title = 'Flutter Migration Demo';
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {routeMap.map(({ path, component: Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export { App };
export default App;