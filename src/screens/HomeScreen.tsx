package src/screens/HomeScreen.tsx
import React from 'react';
import { TEXT_WELCOME_HOME } from '../constants';

/**
 * HomeScreen component represents the home screen shown after successful login.
 * It contains only static centered text.
 */
const HomeScreen: React.FC = () => {
  return (
    <div className="centered">
      <h2>{TEXT_WELCOME_HOME}</h2>
    </div>
  );
};

export default HomeScreen;