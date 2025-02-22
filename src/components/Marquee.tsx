import React from 'react';

const Marquee = () => {
  return (
    <marquee style={{ backgroundColor: '#f0f0f0', color: '#333', padding: '10px', fontFamily: 'Arial', fontSize: '16px' }}>
      🎉 Elevate your senses! Explore our exquisite candle collection for captivating aromas.
      🎉 <a href="/candles" style={{ color: '#333', textDecoration: 'underline' }}>🕯️ Click here for more! 🕯️ </a> 🎉  
    </marquee>
  );
};

export default Marquee;
