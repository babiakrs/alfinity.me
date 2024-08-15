import { useGLTF } from '@react-three/drei';
import { Color, MeshStandardMaterial } from 'three';
import { PlaceProps } from '../Podium';

export const placesConfig: PlaceProps[] = [
  {
    place: 1,
    gltfPath: 'models/angular-logo.glb',
    material: (materials) => materials['AngularGradient'],
    tooltip: {
      title: 'Angular Web Framework',
      description: 'This is my primary expertise. I have about 4 years of experience in this (since 2020-2021)'
    }
  },
  {
    place: 2,
    gltfPath: 'models/react-logo.glb',
    material: new MeshStandardMaterial({ color: new Color(0x00D8FF) }),
    tooltip: {
      title: 'React Web Library',
      description: 'This is my secondary expertise. I have about 6 years of experience in this (since 2018-2019)'
    }
  },
  {
    place: 3,
    gltfPath: 'models/sass-logo.glb',
    material: new MeshStandardMaterial({ color: new Color(0xCC6799) }),
    tooltip: {
      title: 'SASS / SCSS',
      description: 'Additional skill. I have about 4 years of experience in this (since 2020-2021)'
    }
  },
  {
    place: 4,
    gltfPath: 'models/nodejs-logo.glb',
    material: new MeshStandardMaterial({ color: new Color(0x5FA04E) }),
    tooltip: {
      title: 'Node.js',
      description: 'Additional skill. I have about 3 years of experience in this (since 2022)'
    }
  },
  {
    place: 5,
    gltfPath: 'models/github-logo.glb',
    material: new MeshStandardMaterial({ color: new Color(0x242930) }),
    tooltip: {
      title: 'GitHub',
      description: 'You can get my works on my GitHub profile',
      link: 'https://github.com/Almost-Infinity'
    }
  },
  {
    place: 6,
    gltfPath: 'models/gmail-logo.glb',
    material: (materials) => materials['Gmail'],
    tooltip: {
      title: 'Gmail',
      description: 'You can email me',
      link: 'mailto:its.alfinity@gmail.com'
    }
  },
  {
    place: 7,
    gltfPath: 'models/typescript-logo.glb',
    material: new MeshStandardMaterial({ color: new Color(0x3178C6) }),
    tooltip: {
      title: 'TypeScript',
      description: 'Additional skill. I have about 5 years of experience in this (since 2019-2020)'
    }
  },
  {
    place: 8,
    gltfPath: 'models/weather-project-logo.glb',
    material: (materials) => materials['LooseCoarseFabric'],
    tooltip: {
      title: 'Weather Project App',
      description: 'One of my work. Written on a React library, the application shows weather forecasts in Ukrainian cities.'
    }
  },
  {
    place: 9,
    gltfPath: 'models/nestjs-logo.glb',
    material: new MeshStandardMaterial({ color: new Color(0xE0234D) }),
    tooltip: {
      title: 'Nest.js',
      description: 'Additional skill. I have about 3 years of experience in this (since 2022)'
    }
  },
  {
    place: 10,
    gltfPath: 'models/linkedin-logo.glb',
    material: new MeshStandardMaterial({ color: new Color(0x0A65C1) }),
    tooltip: {
      title: 'LinkedIn',
      description: 'You can reach me on LinkedIn',
      link: 'https://www.linkedin.com/in/roman-babyak/'
    }
  },
  {
    place: 11,
    gltfPath: 'models/ukraine.glb',
    material: new MeshStandardMaterial({ color: new Color(0xFFD800) }),
    tooltip: {
      title: 'Kyiv, Ukraine',
      description: 'I am originally from and still living in Kyiv, Ukraine',
      link: 'https://maps.app.goo.gl/PGp25Qa6afio1UUP6'
    }
  },
  {
    place: 12,
    gltfPath: 'models/cv.glb',
    material: (materials) => materials['WrinkledPaper'],
    tooltip: {
      title: 'CV',
      description: 'Download my CV for more information'
    }
  },
  {
    place: 13,
    gltfPath: 'models/telegram-logo.glb',
    material: new MeshStandardMaterial({ color: new Color(0x28A9E9) }),
    tooltip: {
      title: 'Telegram',
      description: 'You can text me on Telegram',
      link: 'https://t.me/alfinity'
    }
  }
];

placesConfig.forEach((place) => useGLTF.preload(place.gltfPath));
