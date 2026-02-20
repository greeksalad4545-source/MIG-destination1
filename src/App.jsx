import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTE_HOME } from './constants';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_HOME} element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;