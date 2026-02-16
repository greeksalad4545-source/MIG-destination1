package HomeView
import React from 'react';
import { HOME_WELCOME_TEXT } from '../constants';
import './HomeView.css';

const HomeView = () => (
  <div className="full-screen">
    <main className="centered">
      {HOME_WELCOME_TEXT}
    </main>
  </div>
);

export default HomeView;