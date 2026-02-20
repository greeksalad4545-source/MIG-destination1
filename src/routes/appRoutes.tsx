package src/routes/appRoutes.tsx
import React from 'react';
import { LoginScreen } from '../screens/LoginScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { ROUTE_LOGIN, ROUTE_HOME } from '../constants';

/**
 * Global routing map for the application.
 * Mirrors the Flutter `appRoutes` map and is consumed by the root router configuration.
 */
export const appRoutes: Record<string, React.ComponentType> = {
  [ROUTE_LOGIN]: LoginScreen,
  [ROUTE_HOME]: HomeScreen,
};