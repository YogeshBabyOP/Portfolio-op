import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Generate random sparkle positions on the client only (avoid SSR mismatch)
function generateSparkles(count) {
  return Array.from({ length: count }, () => ({
    left: Math.random() * 100,   // random horizontal position (0-100%)
    top: Math.random() * 100,    // random vertical position (0-100%)
    delay: Math.random() * 2,    // random animation delay
  }));
}

const IntroBanner = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    // 1) Generate random sparkles on the client
    setSparkles(generateSparkles(50));

    // 2) Hide the intro after 5 seconds
    const timer = setTimeout(() => setShowIntro(false), 2350);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 9999,
              background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)',
              overflow: 'hidden',
            }}
          >
            {/* Sparkles (no images) */}
            {sparkles.map((sparkle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                transition={{
                  duration: 2,
                  ease: 'easeInOut',
                  delay: sparkle.delay,
                  repeat: Infinity,
                }}
                style={{
                  position: 'absolute',
                  borderRadius: '50%',
                  width: '4px',
                  height: '4px',
                  background: '#ffffff',
                  left: `${sparkle.left}%`,
                  top: `${sparkle.top}%`,
                }}
              />
            ))}

            {/* Drifting Cloud #1 */}
            <motion.div
              initial={{ x: '-50%' }}
              animate={{ x: '50%' }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{
                position: 'absolute',
                top: '10%',
                left: '10%',
                width: '200px',
                height: '100px',
              }}
            >
              <Image
                src="/images/moon.png" // Replace with your cloud image
                alt="Cloud"
                layout="fill"
                objectFit="contain"
              />
            </motion.div>

            {/* Drifting Cloud #2 */}
            <motion.div
              initial={{ x: '60%' }}
              animate={{ x: '-30%' }}
              transition={{
                duration: 12,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{
                position: 'absolute',
                top: '20%',
                right: '10%',
                width: '250px',
                height: '120px',
              }}
            >
              <Image
                src="/images/moon.png"  // Replace with another cloud image
                alt="Cloud"
                layout="fill"
                objectFit="contain"
              />
            </motion.div>

            {/* Slowly Rotating Moon */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                top: '5%',
                left: '5%',
                width: '120px',
                height: '120px',
              }}
            >
              <Image
                src="/images/moon.png" // Replace with your moon image
                alt="Moon"
                layout="fill"
                objectFit="contain"
              />
            </motion.div>

            {/* Rocket Launch */}
            <motion.div
              initial={{ y: '100vh' }}
              animate={{ y: '-150vh' }}
              transition={{ duration: 5, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '150px',
              }}
            >
              <Image
                src="/images/rocket-grow.png" // Replace with your rocket image
                alt="Rocket"
                layout="fill"
                objectFit="contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Website Content */}
      {/* {!showIntro && (
        <div
          style={{
            padding: '40px',
            minHeight: '100vh',
            background: '#fff',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          <h1>Main Content</h1>
          <p>Your website content goes here.</p>
        </div>
      )} */}
    </>
  );
};

export default IntroBanner;
