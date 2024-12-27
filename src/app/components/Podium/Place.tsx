import React from 'react';
import { DoubleSide, Group, Material, Mesh, Object3D, Vector3 } from 'three';
import { useGLTF } from '@react-three/drei';
import { PodiumContext } from './context';
import { PlaceAnimation } from './PlaceAnimation';

export type PlaceProps = Omit<JSX.IntrinsicElements['mesh'], 'material' | 'geometry'> & {
  place: number;
  gltfPath: string;
  material?: JSX.IntrinsicElements['mesh']['material'] | ((materials: {
    [p: string]: Material
  }) => JSX.IntrinsicElements['mesh']['material']);
  geometry?: JSX.IntrinsicElements['mesh']['geometry'] | ((nodes: {
    [p: string]: Object3D
  }) => JSX.IntrinsicElements['mesh']['geometry']);
  meta: {
    title: string;
    description: string;
    link?: string;
  };
  onPlaceClick?: () => void;
};

export const Place = React.forwardRef<Mesh, PlaceProps>(
  function Place({ gltfPath, place, material, geometry, onPlaceClick, ...props }, ref) {
    const gltf = useGLTF(gltfPath);
    const { places } = React.useContext(PodiumContext);

    const localRef = React.useRef<Mesh>(null!);
    React.useImperativeHandle(ref, () => localRef.current, []);

    const placeAnimationRef = React.useRef<any>(null!);
    const groupRef = React.useRef<Group>(null!);

    const getPosition = React.useCallback<() => Vector3>(() => {
      const index = place.toString().padStart(3, '0');
      return places[`Place${index}`].position;
    }, [ places, place ]);

    const getMaterial = React.useCallback(() => {
      return typeof material === 'function' ? material(gltf.materials) : material;
    }, [ material, gltf ]);

    const getGeometry = React.useCallback(() => {
      return typeof geometry === 'function' ? geometry(gltf.nodes) : (gltf.nodes['Logo'] as Mesh).geometry;
    }, [ geometry, gltf ]);

    const scale = new Vector3(0.5, 1.5, 0.5);

    return (
      <group
        ref={groupRef}
        position={getPosition()}
        onPointerOver={() => placeAnimationRef.current.onPointerOver()}
        onPointerOut={() => placeAnimationRef.current.onPointerOut()}
        onClick={() => onPlaceClick?.()}
      >
        {/* Transparent plane to increase pointer trigger area */}
        <mesh rotation={[ -Math.PI / 2, 0, 0 ]}>
          <planeGeometry args={[ 2, 2 ]}></planeGeometry>
          <meshBasicMaterial opacity={0} transparent side={DoubleSide} />
        </mesh>

        <mesh
          {...props}
          ref={localRef}
          geometry={getGeometry()}
          position={[ 0, -0.1, 0 ]}
          material={getMaterial()}
          scale={scale}
        ></mesh>

        <PlaceAnimation ref={placeAnimationRef} targetRef={localRef} />
      </group>
    );
  }
);
