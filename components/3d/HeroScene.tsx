"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// ── Fresnel glass sphere with enhanced iridescence ─────────────────────────
function GlassSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const { pointer } = useThree();

  const vertexShader = `
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec2 vUv;
    uniform float uTime;

    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);

      // Organic vertex displacement
      vec3 pos = position;
      float wave = sin(pos.x * 3.0 + uTime * 0.4)
                 * sin(pos.y * 2.5 + uTime * 0.25)
                 * sin(pos.z * 2.8 + uTime * 0.35);
      pos += normal * wave * 0.045;

      vPosition = (modelViewMatrix * vec4(pos, 1.0)).xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const fragmentShader = `
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec2 vUv;
    uniform float uTime;

    void main() {
      vec3 viewDir = normalize(-vPosition);
      float fresnel = pow(1.0 - abs(dot(viewDir, vNormal)), 3.0);

      // Enhanced iridescent color shift
      vec3 cyan   = vec3(0.0, 0.83, 1.0);
      vec3 indigo = vec3(0.263, 0.22, 0.79);
      vec3 gold   = vec3(0.79, 0.65, 0.36);
      vec3 violet = vec3(0.5, 0.2, 0.85);

      float shift = sin(vUv.y * 6.28 + uTime * 0.2) * 0.5 + 0.5;
      float shift2 = cos(vUv.x * 4.0 + uTime * 0.15) * 0.5 + 0.5;
      vec3 color  = mix(cyan, mix(indigo, mix(gold, violet, shift2 * 0.2), shift * 0.35), fresnel * 0.5);

      // Edge glow - sharper and brighter
      float alpha = fresnel * 0.95 + 0.012;

      // Inner ambient glow
      float innerGlow = smoothstep(0.45, 0.0, fresnel) * 0.03;
      color += cyan * innerGlow;
      alpha += innerGlow;

      gl_FragColor = vec4(color, alpha);
    }
  `;

  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.elapsedTime * 0.045;
      meshRef.current.rotation.y = clock.elapsedTime * 0.075;

      // Smooth mouse parallax
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        1.0 + pointer.x * 0.4,
        0.02
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        pointer.y * 0.25,
        0.02
      );
    }
    if (matRef.current && matRef.current.uniforms.uTime) {
      matRef.current.uniforms.uTime.value = clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef} position={[1.0, 0, 0]} scale={2.2}>
      <icosahedronGeometry args={[1, 24]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}

// ── Inner wireframe core ─────────────────────────────────────────────────────
function InnerCore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const s = 0.42 + Math.sin(clock.elapsedTime * 0.7) * 0.04;
    meshRef.current.scale.setScalar(s);
    meshRef.current.rotation.y = clock.elapsedTime * 0.18;
    meshRef.current.rotation.x = -clock.elapsedTime * 0.1;
  });

  return (
    <mesh ref={meshRef} position={[1.0, 0, 0]}>
      <icosahedronGeometry args={[1, 2]} />
      <meshBasicMaterial color="#00D4FF" wireframe transparent opacity={0.1} />
    </mesh>
  );
}

// ── Orbital rings with varied styling ────────────────────────────────────────
function OrbitalRing({
  radius,
  color,
  opacity,
  tiltX,
  rotSpeed,
}: {
  radius: number;
  color: string;
  opacity: number;
  tiltX: number;
  rotSpeed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = tiltX + Math.sin(clock.elapsedTime * 0.15) * 0.05;
    meshRef.current.rotation.z = clock.elapsedTime * rotSpeed;
  });

  return (
    <mesh ref={meshRef} position={[1.0, 0, 0]}>
      <torusGeometry args={[radius, 0.004, 16, 128]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

// ── Floating satellite octahedrons ──────────────────────────────────────────
function Satellites() {
  const groupRef = useRef<THREE.Group>(null);

  const items = useMemo(
    () => [
      { pos: [3.8, 1.1, -0.4] as [number, number, number], s: 0.1, speed: 1.4 },
      { pos: [-0.5, 2.0, 0.7] as [number, number, number], s: 0.06, speed: 2.0 },
      { pos: [2.6, -1.4, 1.1] as [number, number, number], s: 0.08, speed: 1.1 },
      { pos: [0.1, -1.0, -1.3] as [number, number, number], s: 0.12, speed: 0.85 },
      { pos: [4.1, -0.6, 0.4] as [number, number, number], s: 0.05, speed: 2.3 },
      { pos: [-1.2, -0.3, 1.8] as [number, number, number], s: 0.07, speed: 1.7 },
    ],
    []
  );

  useFrame(({ clock }) => {
    if (groupRef.current) groupRef.current.rotation.y = clock.elapsedTime * 0.015;
  });

  return (
    <group ref={groupRef}>
      {items.map((item, i) => (
        <Float key={i} speed={item.speed} rotationIntensity={1} floatIntensity={0.3}>
          <mesh position={item.pos} scale={item.s}>
            <octahedronGeometry args={[1, 0]} />
            <meshBasicMaterial
              color={i % 2 === 0 ? "#00D4FF" : "#C9A55C"}
              transparent
              opacity={i % 2 === 0 ? 0.5 : 0.35}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

// ── Ambient particle field with depth ─────────────────────────────────────────
function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  const { positions, sizes } = useMemo(() => {
    const count = 1500;
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 28;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
      sz[i] = Math.random() * 0.015 + 0.008;
    }
    return { positions: pos, sizes: sz };
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.elapsedTime * 0.006;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#ffffff" transparent opacity={0.18} sizeAttenuation />
    </points>
  );
}

// ── Main exported scene ─────────────────────────────────────────────────────
export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 55 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      dpr={[1, 1.5]}
    >
      {/* Atmospheric lighting */}
      <ambientLight intensity={0.05} />
      <pointLight position={[5, 3, 4]} color="#00D4FF" intensity={2.5} distance={16} />
      <pointLight position={[-4, -2, 3]} color="#C9A55C" intensity={0.8} distance={12} />
      <pointLight position={[0, 5, -3]} color="#5E3AEE" intensity={0.5} distance={10} />
      <spotLight
        position={[0, 7, 5]}
        angle={0.35}
        penumbra={0.9}
        intensity={1.5}
        color="#ffffff"
      />

      {/* Scene elements */}
      <ParticleField />
      <OrbitalRing radius={3.1} color="#00D4FF" opacity={0.25} tiltX={Math.PI / 2.2} rotSpeed={0.04} />
      <OrbitalRing radius={3.5} color="#C9A55C" opacity={0.1} tiltX={Math.PI / 3} rotSpeed={-0.03} />
      <OrbitalRing radius={2.6} color="#5E3AEE" opacity={0.08} tiltX={Math.PI / 4} rotSpeed={0.02} />
      <GlassSphere />
      <InnerCore />
      <Satellites />
    </Canvas>
  );
}
