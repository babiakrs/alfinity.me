// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { Suspense } from 'react';
import { Overlay } from './components/overlay';
import { Scene } from './components/scene';
import { Splash } from './components/splash';

export function App() {
  return (
    <Suspense fallback={<Splash />}>
      <Scene />
      <Overlay />
    </Suspense>
  );
}
