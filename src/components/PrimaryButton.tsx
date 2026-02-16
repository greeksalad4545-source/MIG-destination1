package src/components
import React from 'react';
import styles from './PrimaryButton.module.css';

type PrimaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ className, ...rest }) => (
  <button className={`${styles.primary}${className ? ' ' + className : ''}`} {...rest} />
);

export default PrimaryButton;