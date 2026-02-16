package src/widgets
import React from 'react';
import styles from './PrimaryButton.module.css';

type PrimaryButtonProps = {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label, onClick }) => (
  <button type="button" className={styles.button} onClick={onClick}>
    {label}
  </button>
);

export default PrimaryButton;