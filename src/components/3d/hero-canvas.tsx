"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Particles({ count = 1500 }) {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.02;
      ref.current.rotation.y -= delta * 0.03;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.5}
        />
      </Points>
    </group>
  );
}

function FloatingCode({ position, scale = 1 }: {
  position: [number, number, number];
  scale?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#6366f1"
        wireframe
        transparent
        opacity={0.2}
      />
    </mesh>
  );
}

function GridLines() {
  const ref = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.position.z += delta * 0.1;
      if (ref.current.position.z > 2) {
        ref.current.position.z = -2;
      }
    }
  });

  return (
    <group ref={ref} position={[0, -2, -1]}>
      {[...Array(10)].map((_, i) => (
        <mesh key={i} position={[i * 0.5 - 2.25, 0, 0]} rotation={[0, 0, 0]}>
          <planeGeometry args={[0.02, 4]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.1} />
        </mesh>
      ))}
      {[...Array(20)].map((_, i) => (
        <mesh key={`h-${i}`} position={[0, i * 0.2 - 2, 0]} rotation={[0, 0, 0]}>
          <planeGeometry args={[4, 0.02]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.1} />
        </mesh>
      ))}
    </group>
  );
}

export function HeroCanvas() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#3b82f6" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#6366f1" />
        <Particles />
        <FloatingCode position={[3, 1, -2]} scale={0.4} />
        <FloatingCode position={[-3, -1, -1]} scale={0.25} />
        <FloatingCode position={[2, -2, 1]} scale={0.35} />
        <GridLines />
      </Canvas>
    </div>
  );
}