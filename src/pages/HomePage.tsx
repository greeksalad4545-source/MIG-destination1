package src/pages
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import PrimaryButton from '../components/PrimaryButton';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.greeting}>Hello, {user?.name || 'User'}!</h1>
      <PrimaryButton onClick={handleLogout}>Logout</PrimaryButton>
    </div>
  );
};

export default HomePage;