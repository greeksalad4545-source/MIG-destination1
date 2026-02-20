package src/components/HomeScreen.jsx
import React from 'react';

/**
 * HomeScreen component renders a static full‑screen page with centered
 * "Welcome Home" text using the default material theme for background and text.
 *
 * @component
 * @returns {JSX.Element}
 */
const HomeScreenComponent = () => (
  <div
    style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'inherit',
      color: 'inherit',
    }}
  >
    Welcome Home
  </div>
);

const HomeScreen = React.memo(HomeScreenComponent);

export default HomeScreen;
export { HomeScreen };