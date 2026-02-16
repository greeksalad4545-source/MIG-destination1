package src/routes/AppRoutes.tsx
import React from 'react';
import { LoginScreen } from '../screens/LoginScreen';
import { HomeScreen } from '../screens/HomeScreen';

type RouteMap = {
  [path: string]: React.ComponentType<any>;
};

export const appRoutes: RouteMap = {
  '/': LoginScreen,
  '/home': HomeScreen,
};