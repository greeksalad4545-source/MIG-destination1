package com.example.app;

import React from 'react';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import { LOGIN_ROUTE, HOME_ROUTE } from './routes';

const AppRoutes = {
  [LOGIN_ROUTE]: () => <LoginScreen />,
  [HOME_ROUTE]: () => <HomeScreen />,
};

export { AppRoutes };