import React from 'react';
import { Material, Mesh, Vector3 } from 'three';
import { useGLTF } from '@react-three/drei';
import { PodiumContext } from './context';

export type PlaceProps = Omit<JSX.IntrinsicElements['mesh'], 'material'> & {
  place: number;
  gltfPath: string;
  material?: JSX.IntrinsicElements['mesh']['material'] | ((materials: {
    [p: string]: Material
  }) => JSX.IntrinsicElements['mesh']['material']);
};

export const Place = React.forwardRef<Mesh, PlaceProps>(function({ gltfPath, place, material, ...props }, ref) {
  const gltf = useGLTF(gltfPath);
  const { places } = React.useContext(PodiumContext);

  const getPosition = React.useCallback<() => Vector3>(() => {
    const index = place.toString().padStart(3, '0');
    return places[`Place${index}`].position;
  }, [ places, place ]);

  const getMaterial = React.useCallback(() => {
    return typeof material === 'function' ? material(gltf.materials) : material;
  }, [ material, gltf ]);

  const scale = new Vector3(0.5, 1.5, 0.5);

  return (
    <mesh
      ref={ref}
      geometry={(gltf.nodes['Logo'] as Mesh).geometry}
      material={getMaterial()}
      position={getPosition()}
      scale={scale}
    ></mesh>
  );
});
