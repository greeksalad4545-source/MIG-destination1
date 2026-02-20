package com.example.app;

import React from 'react';

const WELCOME_HOME = "Welcome Home";

function HomeScreen() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <p>{WELCOME_HOME}</p>
    </div>
  );
}

export default HomeScreen;