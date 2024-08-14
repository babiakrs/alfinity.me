import { createContext } from 'react';
import { Object3D } from 'three';

export interface PodiumContextProps {
  places: { [p: string]: Object3D };
}

export const PodiumContext = createContext<PodiumContextProps>(null!);
