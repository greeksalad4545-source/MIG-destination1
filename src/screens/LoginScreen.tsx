package src/screens/LoginScreen.tsx
/**
 * LoginScreen component implements the login screen and triggers navigation to '/home' when the button is pressed.
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../components/PrimaryButton';
import { LABEL_LOGIN, ROUTE_HOME } from '../constants';

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();

  const onLoginPressed = () => {
    navigate(ROUTE_HOME);
  };

  return (
    <div>
      <header className="app-bar">
        <h1>Login</h1>
      </header>
      <div className="centered">
        <PrimaryButton label={LABEL_LOGIN} onClick={onLoginPressed} />
      </div>
    </div>
  );
};

export default LoginScreen;