import { useFrame, useThree } from '@react-three/fiber';
import {
  BufferAttribute,
  BufferGeometry,
  DoubleSide,
  Group,
  Mesh,
  PerspectiveCamera,
  SpotLight as ThreeSpotLight,
  Vector3
} from 'three';
import React from 'react';
import { Hud, SpotLight, Text } from '@react-three/drei';

class PlaneTrapezoidGeometry extends BufferGeometry {
  constructor(width = 1, height = 1, offset = 0.01) {
    super();

    (this as { type: string }).type = 'PlaneTrapezoidGeometry';

    const vertices = new Float32Array([
      -width, height, 0,
      width, height - offset, 0,
      -width, -height, 0,
      width, -height + offset, 0
    ]);

    const normals = new Float32Array([
      0, 0, 1,
      0, 0, 1,
      0, 0, 1,
      0, 0, 1
    ]);

    const uvs = new Float32Array([
      0, 1,
      1, 1,
      0, 0,
      1, 0
    ]);

    const indices = new Uint16Array([
      0, 2, 1,
      2, 3, 1
    ]);

    this.setIndex(new BufferAttribute(indices, 1));
    this.setAttribute('position', new BufferAttribute(vertices, 3));
    this.setAttribute('normal', new BufferAttribute(normals, 3));
    this.setAttribute('uv', new BufferAttribute(uvs, 2));
  }
}

function getScreenDimensionsInWorldUnits(camera: PerspectiveCamera, zDistance: number) {
  const fovInRadians = (camera.fov * Math.PI) / 180;
  const height = 2 * Math.tan(fovInRadians / 2) * zDistance;
  const width = height * camera.aspect;

  return { width, height };
}

export function HudScene() {
  const panelGeometry = new PlaneTrapezoidGeometry(0.3, 0.2, 0.03);
  const previewGeometry = new PlaneTrapezoidGeometry(0.1, 0.1, 0.01);
  const titleBackgroundGeometry = new PlaneTrapezoidGeometry(0.11, 0.03, 0.009);
  const closeBackgroundGeometry = new PlaneTrapezoidGeometry(0.01, 0.01, 0.001);

  const groupRef = React.useRef<Group>(null!);
  const spotLightRef = React.useRef<ThreeSpotLight>(null!);
  const panelRef = React.useRef<Mesh>(null!);

  const { camera } = useThree();
  const { width, height } = getScreenDimensionsInWorldUnits(camera as PerspectiveCamera, camera.position.z);

  useFrame(({ camera }) => {
    if (groupRef.current) {
      groupRef.current.position.copy(camera.position).add(camera.getWorldDirection(new Vector3()).multiplyScalar(1));
      groupRef.current.lookAt(camera.position);
    }

    if (spotLightRef.current && panelRef.current) {
      spotLightRef.current.target = panelRef.current;
    }
  });

  return (
    <Hud>
      <group ref={groupRef}>
        {/* Backdrop */}
        <mesh position={[ 0, 0, -0.001 ]}>
          <meshBasicMaterial color="#000000" opacity={0.5} transparent side={DoubleSide} />
          <planeGeometry args={[ width, height ]} />
        </mesh>

        {/* Panel */}
        <mesh ref={panelRef} position={[ 0, 0, 0 ]} geometry={panelGeometry} receiveShadow>
          <meshStandardMaterial color="#3e4156" />
        </mesh>

        {/* Preview background */}
        <mesh position={[ -0.1, 0, 0.25 ]} geometry={previewGeometry} castShadow>
          <meshStandardMaterial color="#3e4156" />
        </mesh>

        {/* Title background */}
        <mesh position={[ 0.1, 0.05, 0.2 ]} geometry={titleBackgroundGeometry} castShadow receiveShadow>
          <meshStandardMaterial color="#3e4156" />
        </mesh>

        {/* Close background */}
        <mesh position={[ 0.19, 0.1, 0.3 ]} geometry={closeBackgroundGeometry}>
          <meshStandardMaterial color="#3e4156" />
        </mesh>

        {/* Title */}
        <Text fontSize={0.015} position={[ 0.01, 0.05, 0.21 ]} anchorX="left">Angular Web Framework</Text>

        {/* Description */}
        <Text fontSize={0.01} position={[ 0.01, -0.03, 0.21 ]} anchorX="left" maxWidth={0.2}>
          One of my works. Written on a React library, the application shows weather forecasts in Ukrainian cities.
        </Text>

        {/* Close X */}
        <Text fontSize={0.01} position={[ 0.188, 0.099, 0.31 ]}>x</Text>

        <SpotLight
          ref={spotLightRef}
          castShadow
          color="#dee0f9"
          penumbra={1.5}
          angle={0.8}
          intensity={2}
          position={[ 0, 0, 1 ]}
        />
      </group>
    </Hud>
  );
}
