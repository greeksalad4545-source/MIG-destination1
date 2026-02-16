package src/screens/LoginScreen.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../components/PrimaryButton';
import styles from './LoginScreen.module.css';

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };

  return (
    <div className={styles.container}>
      <header className={styles.appBar}>
        <h1>Login</h1>
      </header>
      <PrimaryButton label="Login" onClick={handleLogin} />
    </div>
  );
};

export default LoginScreen;