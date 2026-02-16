import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE, APP_BAR_TITLE_LOGIN, LOGIN_BUTTON_LABEL } from '../constants';
import PrimaryButton from '../components/PrimaryButton';

const LoginView = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate(HOME_ROUTE);
  };

  return (
    <div className="login-view" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <header style={{ padding: '1rem', textAlign: 'center' }}>{APP_BAR_TITLE_LOGIN}</header>
      <main style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <PrimaryButton label={LOGIN_BUTTON_LABEL} onPressed={handleNavigateHome} />
      </main>
    </div>
  );
};

export default LoginView;