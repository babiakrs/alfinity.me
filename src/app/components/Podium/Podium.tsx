import React from 'react';
import { Group, Mesh, Object3DEventMap } from 'three';
import { useGLTF } from '@react-three/drei';
import { Place } from './Place';
import { GroupProps } from '@react-three/fiber';
import { PodiumContext } from './context';

type PodiumComponent =
  React.ForwardRefExoticComponent<Omit<GroupProps, 'ref'> & React.RefAttributes<Group<Object3DEventMap>>>
  & {
  Place: typeof Place;
}

export type PodiumProps = JSX.IntrinsicElements['group'];

export const Podium = React.forwardRef<Group, PodiumProps>(function Podium({ children, ...props }, ref) {
  const { nodes: podiumNodes } = useGLTF('models/podium.glb');

  const hexagons = React.useMemo(() => {
    return Object.values(podiumNodes).filter((node) => {
      return node.type === 'Mesh' && node.name.startsWith('Hexagon');
    });
  }, [ podiumNodes ]);

  const places = React.useMemo(() => {
    return Object.fromEntries(
      Object.values(podiumNodes).filter((node) => {
        return node.type === 'Object3D' && node.name.startsWith('Place');
      }).map((node) => ([ node.name, node ]))
    );
  }, [ podiumNodes ]);

  return (
    <group ref={ref} {...props}>
      {hexagons.map((node) => (
        <mesh key={node.name} geometry={(node as Mesh).geometry}>
          <meshStandardMaterial color="#3e4156" />
        </mesh>
      ))}

      <PodiumContext.Provider value={{ places }}>
        {children}
      </PodiumContext.Provider>
    </group>
  );
}) as PodiumComponent;

Podium.Place = Place;

useGLTF.preload('models/podium.glb');
