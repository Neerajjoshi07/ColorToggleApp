
import React, { useState } from 'react';

const BackgroundToggle = () => {
  const colors = [
    { background: 'white', text: 'black' },
    { background: 'black', text: 'white' },
    { background: 'blue', text: 'white' },
    { background: 'green', text: 'white' },
    { background: 'yellow', text: 'black' },
   
  ];

  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const { background, text } = colors[currentColorIndex];

  const handleToggleBackground = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: background,
        color: text,
        transition: 'background-color 0.5s ease',
        margin: '0'
      }}
      onClick={handleToggleBackground}
    >
      <h1 style={{ textAlign: "center", margin: '0' }}>Click to Toggle Background</h1>
      <h3 style={{ textAlign: "center" }}>Current background color: {background}</h3>
      <h3 style={{ textAlign: "center" }}>Current text color: {text}</h3>
    </div>
  );
};

export default BackgroundToggle;
