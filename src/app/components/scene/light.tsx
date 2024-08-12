import React, { useRef } from 'react';
import { Color, DirectionalLight } from 'three';
import { useFrame, useThree } from '@react-three/fiber';

export function Light() {
  const light = useRef<DirectionalLight>(null!);
  const spotLightColor = new Color(0xdee0f9);
  const { camera } = useThree();

  // useHelper(light, DirectionalLightHelper, 1, 'red');

  useFrame(() => {
    light.current.position.set(
      camera.position.x * -1,
      light.current.position.y,
      camera.position.z * -1
    );
  });

  return <>
    <directionalLight
      ref={light}
      intensity={2}
      position={[ 0, 20, -10 ]}
      color={spotLightColor}
    />

    <ambientLight intensity={0.5} />
  </>;
}
