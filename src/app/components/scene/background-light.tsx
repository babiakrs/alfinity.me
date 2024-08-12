import { Color, Group, MeshStandardMaterial, PlaneGeometry, Vector3 } from 'three';
import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Plane } from '@react-three/drei';

export function BackgroundLight() {
  const geo = new PlaneGeometry(200, 200);
  const mat = new MeshStandardMaterial({ color: new Color(0x3e4156) });
  const spotLightColor = new Color(0xffffff);
  const planeRef = useRef<any>(null!);
  const lightRef = useRef(null!);
  const gRef = useRef<Group>(null!);
  const { camera } = useThree();

  useFrame(() => {
    gRef.current.position.copy(camera.position).add(camera.getWorldDirection(new Vector3()).multiplyScalar(50)).sub(new Vector3(0, 5, 0));
    gRef.current.lookAt(camera.position);
  });

  return (
    <group ref={gRef}>
      <Plane ref={planeRef} position={[ 0, 0, -20 ]} geometry={geo} material={mat} />

      <spotLight
        intensity={1000}
        ref={lightRef}
        position={[ 0, 0, -10 ]}
        color={spotLightColor}
        target={planeRef.current}
        angle={Math.PI}
      />
    </group>
  );
}
