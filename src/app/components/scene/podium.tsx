import { useGLTF } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import { Color, Group, Mesh, MeshStandardMaterial, Vector3 } from 'three';

export function Podium() {
  const { nodes: podiumNodes } = useGLTF('models/podium.glb');
  const { nodes: ngLogoNodes, materials: ngLogoMaterials } = useGLTF('models/angular-logo.glb');
  const { nodes: reactLogoNodes } = useGLTF('models/react-logo.glb');
  const { nodes: nodeJSLogoNodes } = useGLTF('models/nodejs-logo.glb');
  const { nodes: nestJSLogoNodes } = useGLTF('models/nestjs-logo.glb');
  const { nodes: typescriptLogoNodes } = useGLTF('models/typescript-logo.glb');
  const { nodes: linkedinLogoNodes } = useGLTF('models/linkedin-logo.glb');
  const { nodes: gmailLogoNodes, materials: gmailLogoMaterials } = useGLTF('models/gmail-logo.glb');
  const { nodes: telegramLogoNodes } = useGLTF('models/telegram-logo.glb');
  const { nodes: githubLogoNodes } = useGLTF('models/github-logo.glb');
  const { nodes: weatherProjectLogoNodes } = useGLTF('models/weather-project-logo.glb');
  const { nodes: sassLogoNodes } = useGLTF('models/sass-logo.glb');
  const { nodes: ukraineNodes } = useGLTF('models/ukraine.glb');

  const podiumMeshes = useMemo(() => {
    return Object.values(podiumNodes).filter((node) => {
      return node.type === 'Mesh' && node.name.startsWith('Hexagon');
    });
  }, [ podiumNodes ]);

  const podiumGroup = useRef<Group>(null!);
  // useFrame((_, delta) => (podiumGroup.current.rotation.y += ((delta / 2) % 360)));

  const typescriptMaterial = new MeshStandardMaterial({ color: new Color(0x3178C6) });
  const linkedinMaterial = new MeshStandardMaterial({ color: new Color(0x0A65C1) });
  const telegramMaterial = new MeshStandardMaterial({ color: new Color(0x28A9E9) });
  const sassMaterial = new MeshStandardMaterial({ color: new Color(0xCC6799) });
  const reactMaterial = new MeshStandardMaterial({ color: new Color(0x00D8FF) });
  const githubMaterial = new MeshStandardMaterial({ color: new Color(0x242930) });
  const nodejsMaterial = new MeshStandardMaterial({ color: new Color(0x5FA04E) });
  const nestjsMaterial = new MeshStandardMaterial({ color: new Color(0xE0234D) });

  const podiumMaterial = new MeshStandardMaterial({ color: new Color(0x3e4156) });

  const gmailMaterial = new MeshStandardMaterial().copy(gmailLogoMaterials['Gmail']);
  const ngMaterial = new MeshStandardMaterial().copy(ngLogoMaterials['AngularGradient']);

  const sc = new Vector3(0.5, 1.5, 0.5);

  return (
    <group ref={podiumGroup}>
      {podiumMeshes.map((node) => (
        <mesh
          key={node.name}
          material={podiumMaterial}
          geometry={(node as Mesh).geometry}
        />
      ))}

      <mesh
        geometry={(ukraineNodes['Logo'] as Mesh).geometry}
        position={podiumNodes['Hexagon012Place'].position}
        scale={sc}
      />

      <mesh
        material={typescriptMaterial}
        geometry={(typescriptLogoNodes['Logo'] as Mesh).geometry}
        position={podiumNodes['Hexagon011Place'].position}
        scale={sc}
      />

      <mesh
        material={nestjsMaterial}
        geometry={(nestJSLogoNodes['Logo'] as Mesh).geometry}
        position={podiumNodes['Hexagon010Place'].position}
        scale={sc}
      />

      <mesh
        geometry={(weatherProjectLogoNodes['Logo'] as Mesh).geometry}
        position={podiumNodes['Hexagon009Place'].position}
        scale={sc}
      />

      <mesh
        material={linkedinMaterial}
        geometry={(linkedinLogoNodes['Logo'] as Mesh).geometry}
        position={podiumNodes['Hexagon008Place'].position}
        scale={sc}
      />

      <mesh
        material={gmailMaterial}
        geometry={(gmailLogoNodes['Logo'] as Mesh).geometry}
        position={podiumNodes['Hexagon007Place'].position}
        scale={sc}
      />

      <mesh
        material={telegramMaterial}
        geometry={(telegramLogoNodes['Logo'] as Mesh).geometry}
        position={podiumNodes['Hexagon006Place'].position}
        scale={sc}
      />

      <mesh
        material={githubMaterial}
        geometry={(githubLogoNodes['Logo'] as Mesh).geometry}
        position={podiumNodes['Hexagon005Place'].position}
        scale={sc}
      />

      <mesh
        material={nodejsMaterial}
        geometry={(nodeJSLogoNodes['Logo'] as Mesh).geometry}
        position={podiumNodes['Hexagon004Place'].position}
        scale={sc}
      />

      <mesh
        material={sassMaterial}
        geometry={(sassLogoNodes['Logo'] as Mesh).geometry}
        position={podiumNodes['Hexagon003Place'].position}
        scale={sc}
      />

      <mesh
        material={reactMaterial}
        geometry={(reactLogoNodes['Logo'] as Mesh).geometry}
        position={podiumNodes['Hexagon002Place'].position}
        scale={sc}
      />

      <mesh
        material={ngMaterial}
        geometry={(ngLogoNodes['Logo'] as Mesh).geometry}
        position={podiumNodes['Hexagon001Place'].position}
        scale={sc}
      />
    </group>
  );
}

useGLTF.preload('models/podium.glb');
useGLTF.preload('models/angular-logo.glb');
useGLTF.preload('models/react-logo.glb');
useGLTF.preload('models/nodejs-logo.glb');
useGLTF.preload('models/nestjs-logo.glb');
useGLTF.preload('models/typescript-logo.glb');
useGLTF.preload('models/linkedin-logo.glb');
useGLTF.preload('models/gmail-logo.glb');
useGLTF.preload('models/telegram-logo.glb');
useGLTF.preload('models/github-logo.glb');
useGLTF.preload('models/weather-project-logo.glb');
useGLTF.preload('models/sass-logo.glb');
useGLTF.preload('models/ukraine.glb');
