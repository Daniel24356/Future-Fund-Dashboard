import React, { useState } from 'react';

const Button = ({ btnName, width, height, borderRadius, padding }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      style={{
        width: width,
        height: height,
        borderRadius: borderRadius,
        padding: padding,
        backgroundColor: hover ? '#180892' : '#2C14DD', // Change color on hover
        color: 'white',
        border: 'none',
        transition: 'background-color 1s', // Smooth transition
        cursor: 'pointer'
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {btnName}
    </button>
  );
};

export default Button;
