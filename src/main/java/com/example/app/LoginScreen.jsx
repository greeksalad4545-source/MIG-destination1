package com.example.app;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from './PrimaryButton';
import { HOME, LOGIN } from './constants';

function LoginScreen() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate(HOME);
  };
  return (
    <div className="login-screen">
      <header className="app-bar">Login</header>
      <div className="centered">
        <PrimaryButton label={LOGIN} onClick={handleLogin} />
      </div>
    </div>
  );
}

export default LoginScreen;