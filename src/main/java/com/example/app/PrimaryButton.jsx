package com.example.app;

import React from 'react';
import PropTypes from 'prop-types';

const PrimaryButton = ({ label, onClick }) => (
  <button type="button" onClick={onClick}>
    {label}
  </button>
);

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PrimaryButton;