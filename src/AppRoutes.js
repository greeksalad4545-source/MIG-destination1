package src/AppRoutes.js
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';

const AppRoutes = Object.freeze({
  Home: () => <HomeScreen />,
  Profile: () => <ProfileScreen />,
  Settings: () => <SettingsScreen />,
});

export { AppRoutes };