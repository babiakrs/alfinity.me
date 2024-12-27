import React from 'react';
import { Canvas } from '@react-three/fiber';
import { MainScene } from './components/MainScene';
import { Splash } from './components/Splash';
import { Modal } from './components/Modal';

export function App() {
  const [ isModalOpen, setModalOpen ] = React.useState(false);

  return (
    <>
      <React.Suspense fallback={<Splash />}>
        <Canvas camera={{ position: [ 0, 70, 70 ], fov: 50 }}>
          <MainScene onPlaceClick={() => setModalOpen(true)} />
        </Canvas>
      </React.Suspense>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
