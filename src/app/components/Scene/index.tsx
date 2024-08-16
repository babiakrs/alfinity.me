import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Podium } from '../Podium';
import { AnimatedCamera } from './AnimatedCamera';
import { Light } from './Light';
import { placesConfig } from './places.config';
import { BackgroundLight } from './BackgroundLight';

export function Scene() {
  return (
    <Canvas camera={{ position: [ 0, 70, 70 ], fov: 50 }} style={{ position: 'absolute' }}>
      <Light />
      <BackgroundLight />
      <AnimatedCamera />

      <OrbitControls
        target={[ 0, 5, 0 ]}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 3}
        minDistance={10}
        maxDistance={20}
        enablePan={false}
      />

      <Podium>
        {placesConfig.map((place, idx) => <Podium.Place key={idx} {...place} />)}
      </Podium>
    </Canvas>
  );
}
