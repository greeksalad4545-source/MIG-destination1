package src/screens/HomeScreen.jsx
import React from 'react';
import { LABEL_WELCOME_TEXT } from '../constants';

function HomeScreen() {
  return (
    <div className="home-screen-container">
      <h2>{LABEL_WELCOME_TEXT}</h2>
    </div>
  );
}

export default HomeScreen;
export const route = { path: '/home', element: <HomeScreen /> };