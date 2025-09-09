import React from 'react';
import logoImage from '../assets/Cognivus.png';

const Logo = ({ size = 'medium', className = '' }) => {
  const sizeClasses = {
    small: 'h-12',
    medium: 'h-16', 
    large: 'h-20',
    xlarge: 'h-22'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoImage} 
        alt="Cognivus" 
        className={`${sizeClasses[size]} w-auto`}
      />
    </div>
  );
};

export default Logo;