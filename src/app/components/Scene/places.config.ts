import { useGLTF } from '@react-three/drei';
import { Color, MeshStandardMaterial } from 'three';
import { PlaceProps } from '../Podium';

export const placesConfig: PlaceProps[] = [
  {
    place: 1,
    gltfPath: 'models/angular-logo.glb',
    material: (materials) => materials['AngularGradient'],
  },
  {
    place: 2,
    gltfPath: 'models/react-logo.glb',
    material: new MeshStandardMaterial({ color: new Color(0x00D8FF) }),
  },
  {
    place: 3,
    gltfPath: 'models/sass-logo.glb',
    material: new MeshStandardMaterial({ color: new Color(0xCC6799) }),
  },
  {
    place: 4,
    gltfPath: 'models/nodejs-logo.glb',
    material: new MeshStandardMaterial({ color: new Color(0x5FA04E) }),
  },
  {
    place: 5,
    gltfPath: 'models/github-logo.glb',
    material: new MeshStandardMaterial({ color: new Color(0x242930) }),
  },
  {
    place: 6,
    gltfPath: 'models/gmail-logo.glb',
    material: (materials) => materials['Gmail'],
  },
  {
    place: 7,
    gltfPath: 'models/typescript-logo.glb',
    material: new MeshStandardMaterial({ color: new Color(0x3178C6) })
  },
  {
    place: 8,
    gltfPath: 'models/weather-project-logo.glb',
    material: (materials) => materials['LooseCoarseFabric'],
  },
  {
    place: 9,
    gltfPath: 'models/nestjs-logo.glb',
    material: new MeshStandardMaterial({ color: new Color(0xE0234D) }),
  },
  {
    place: 10,
    gltfPath: 'models/linkedin-logo.glb',
    material: new MeshStandardMaterial({ color: new Color(0x0A65C1) }),
  },
  {
    place: 11,
    gltfPath: 'models/ukraine.glb',
    material: new MeshStandardMaterial({ color: new Color(0xFFD800) }),
  },
  {
    place: 12,
    gltfPath: 'models/cv.glb',
    material: (materials) => materials['WrinkledPaper'],
  },
  {
    place: 13,
    gltfPath: 'models/telegram-logo.glb',
    material: new MeshStandardMaterial({ color: new Color(0x28A9E9) }),
  },
];

placesConfig.forEach((place) => useGLTF.preload(place.gltfPath));
