"use client";
import React, { useEffect, useState } from 'react';

const SparklesComponent = () => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    // This runs only on the client
    const generateSparkles = (count) =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 2,
      }));
    
    // Now set your random sparkles
    setSparkles(generateSparkles(50));
  }, []);

  return (
    <div>
      {/* Render sparkles */}
      {sparkles.map((sparkle, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            // ...other sparkle styles
          }}
        />
      ))}
    </div>
  );
};

export default SparklesComponent;
