package src/screens
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../components/PrimaryButton';

const LoginScreen = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };

  return (
    <div>
      <header style={{ backgroundColor: '#6200ee', padding: '16px', color: '#fff' }}>
        <h1>Login</h1>
      </header>
      <main
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 64px)',
        }}
      >
        <PrimaryButton label="Login" onClick={handleLogin} />
      </main>
    </div>
  );
};

export default LoginScreen;