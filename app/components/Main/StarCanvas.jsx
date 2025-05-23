import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { inSphere } from "maath/random";

function StarBackground(props) {
  const ref = useRef();
  
  const sphere = useMemo(() => {
    const positions = new Float32Array(2000 * 3); 
    return inSphere(positions, { radius: 1.2 }).slice();
  }, []);

  console.log("Sphere Data:", sphere);
  console.log("Has NaN:", sphere.some((val) => isNaN(val))); 

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial transparent color="#fff" size={0.002} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  );
}

function StarsCanvas() {
  return (
    <div className="w-full h-full fixed inset-0 z-[10] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}

export default StarsCanvas;
