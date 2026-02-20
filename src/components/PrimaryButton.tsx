package src/components/PrimaryButton.tsx
import React from 'react';

interface PrimaryButtonProps {
  label: string;
  onClick: () => void;
}

/**
 * PrimaryButton component renders a button with the given label.
 * @param {PrimaryButtonProps} props - Component props.
 * @param {string} props.label - Text to display on the button.
 * @param {() => void} props.onClick - Callback invoked when button is clicked.
 */
const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default PrimaryButton;