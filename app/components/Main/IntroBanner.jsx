import React, { useState, useMemo } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useMotionValue,
} from "framer-motion";
import Image from "next/image";

// Generate sparkles with positions and delays.
function generateSparkles(count) {
  return Array.from({ length: count }, () => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 2,
  }));
}

// Memoized Sparkle component to avoid unnecessary re-renders.
const Sparkle = React.memo(({ sparkle }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
    transition={{
      duration: 2,
      ease: "easeInOut",
      delay: sparkle.delay,
      repeat: Infinity,
    }}
    style={{
      position: "absolute",
      borderRadius: "50%",
      width: "4px",
      height: "4px",
      background: "#ffffff",
      left: `${sparkle.left}%`,
      top: `${sparkle.top}%`,
      willChange: "transform, opacity",
    }}
  />
));

const IntroBanner = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [rocketLaunched, setRocketLaunched] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const controls = useAnimation();
  const rocketY = useMotionValue(0);

  // Use current viewport height for numeric calculations.
  const viewportHeight =
    typeof window !== "undefined" ? window.innerHeight : 800;

  // Generate sparkles only once.
  const sparkles = useMemo(() => generateSparkles(30), []);

  const rocketVariants = {
    initial: { y: 0, x: -45, opacity: 1 },
    launch: {
      y: -viewportHeight, // animate upward to the top of the viewport
      x: -45,
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  // Trigger rocket launch.
  const handleLaunch = () => {
    setRocketLaunched(true);
    controls.start("launch");
  };

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            animate={{ opacity: fadeOut ? 0 : 1 }}
            onAnimationComplete={() => {
              if (fadeOut) setShowIntro(false);
            }}
            transition={{ duration: 1 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 9999,
              background:
                "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)",
              overflow: "hidden",
              willChange: "opacity",
            }}
          >
            {/* Render sparkles */}
            {sparkles.map((sparkle, index) => (
              <Sparkle key={index} sparkle={sparkle} />
            ))}

            {/* Drifting Cloud (Moon Image) */}
            <motion.div
              initial={{ x: "60%" }}
              animate={{ x: "-30%" }}
              transition={{
                duration: 12,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                position: "absolute",
                top: "20%",
                right: "10%",
                width: "250px",
                height: "120px",
                willChange: "transform",
              }}
            >
              <Image
                src="/images/moon.png"
                alt="Cloud"
                layout="fill"
                objectFit="contain"
              />
            </motion.div>

            {/* Rocket */}
            <motion.div
              initial="initial"
              animate={controls}
              variants={rocketVariants}
              style={{
                position: "absolute",
                bottom: "80px",
                left: "50%",
                transform: "translateX(-50%)",
                willChange: "transform, opacity",
                y: rocketY, // bind the motion value
              }}
              onUpdate={() => {
                // When the rocket reaches 60% upward (i.e. y <= -60% of viewport height)
                if (!fadeOut && rocketY.get() <= -viewportHeight * 0.6) {
                  setFadeOut(true);
                }
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100px",
                  height: "100px",
                }}
              >
                <Image
                  src="/images/rocket-grow.png"
                  alt="Rocket"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
            </motion.div>

            {/* Launch Button */}
            {!rocketLaunched && (
              <div
                className="pulsa"
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 10000,
                }}
              >
                <button className="cta" onClick={handleLaunch}>
                  Launch
                  <div className="star a"></div>
                  <div className="star b"></div>
                  <div className="star c"></div>
                  <div className="star d"></div>
                  <div className="star e"></div>
                  <div className="star f"></div>
                  <div className="star g"></div>
                  <svg
                    version="1.1"
                    viewBox="0 0 1024 1024"
                    width="24px"
                    className="rocket"
                  >
                    <path
                      fill="#3A7EB9"
                      d="M662.72 462.784l136.448 169.408v173.248l-136.448-48.32zM342.72 457.344L206.272 626.816v173.248l136.448-48.384z"
                    ></path>
                    <path
                      fill="#D48171"
                      d="M570.688 418.688l-142.848 1.152a266.496 266.496 0 0 1-20.288-0.576l3.712 448.64c0.256 28.928 94.272 130.048 94.272 130.048s93.888-102.656 93.632-131.584l-3.712-448.96a344.64 344.64 0 0 1-24.768 1.28z"
                    ></path>
                    <path
                      fill="#E9DF92"
                      d="M531.456 599.296l-63.04 0.576c-3.008 0-5.952-0.064-8.96-0.384l2.176 257.792c0.128 16.64 41.728 74.816 41.728 74.816s41.344-58.944 41.28-75.52l-2.176-257.92c-3.648 0.384-7.296 0.64-11.008 0.64z"
                    ></path>
                    <path
                      fill="#B5D5EB"
                      d="M554.304 93.568a324.352 324.352 0 0 0-110.592 1.728L342.72 240.768v584.512c13.824-0.96 27.968-1.536 42.368-1.536h245.248c11.84 0 23.36 0.384 34.816 1.024V253.312L554.304 93.568z"
                    ></path>
                    <path
                      fill="#3A7EB9"
                      d="M541.44 94.144L500.416 35.008l-45.696 59.136v29.504h89.024v-29.504zM459.456 288.64h88.96v88.896h-88.96zM459.456 467.456h88.96v88.96h-88.96zM459.456 634.176h88.96v88.896h-88.96zM364.928 788.736h277.76v44.352h-277.76z"
                    ></path>
                  </svg>
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default IntroBanner;
