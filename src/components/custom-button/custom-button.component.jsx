import React from 'react';

// Styles
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button 
    type="button"
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    { ...otherProps }
  >
    {children}
  </button>
);

export default CustomButton;