import React, { useState, useEffect } from 'react';
import logoFull from '../images/full_logo.png'; // Replace with actual paths to your logos
import logoIcon from '../images/tiny-logo.png';

const Logo = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640); // Adjust the breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <img
      src={isSmallScreen ? logoIcon : logoFull}
      alt="Logo"
      className="h-12 w-auto" // Adjust the class as needed for proper sizing
    />
  );
};

export default Logo;
