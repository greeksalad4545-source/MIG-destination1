package src/screens/LoginScreen.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../components/PrimaryButton';

const LoginScreen = () => {
  const navigate = useNavigate();

  const onLoginClick = () => {
    navigate('/home');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <header style={{ padding: '16px', backgroundColor: '#6200ee', color: '#fff' }}>
        <h1 style={{ margin: 0 }}>Login</h1>
      </header>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <PrimaryButton label="Login" onClick={onLoginClick} />
      </div>
    </div>
  );
};

export default LoginScreen;