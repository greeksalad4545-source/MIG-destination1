import React from 'react';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import ProfileScreen from './ProfileScreen';

const AppRoutes: ReadonlyMap<string, React.ComponentType> = new Map([
  ['home', HomeScreen],
  ['settings', SettingsScreen],
  ['profile', ProfileScreen],
]);

export { AppRoutes };