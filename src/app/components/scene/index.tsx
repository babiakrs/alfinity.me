import React from 'react';
import { Podium } from './podium';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { BackgroundLight } from './background-light';
import { AnimatedCamera } from './animated-camera';
import { Light } from './light';

export function Scene() {
  return (
    <Canvas camera={{ position: [ 0, 70, 70 ], fov: 50 }}>
      <OrbitControls
        target={[ 0, 5, 0 ]}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 3}
        minDistance={10}
        maxDistance={20}
        enablePan={false}
      />

      <Podium />
      <Light />
      <BackgroundLight />

      <AnimatedCamera />
    </Canvas>
  );
}
