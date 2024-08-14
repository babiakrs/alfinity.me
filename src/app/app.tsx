import React from 'react';
import { Scene } from './components/Scene';
import { Splash } from './components/Splash';

export function App() {
  return (
    <React.Suspense fallback={<Splash />}>
      <Scene />
    </React.Suspense>
  );
}
