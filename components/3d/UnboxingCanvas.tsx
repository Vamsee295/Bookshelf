"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import * as THREE from "three";

interface UnboxingProps {
  scrollProgress: React.MutableRefObject<number>;
  mouseX: React.MutableRefObject<number>;
  mouseY: React.MutableRefObject<number>;
}

function BoxLid({ progress }: { progress: number }) {
  const lidRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!lidRef.current) return;
    // Lid opens as scroll progresses
    const angle = THREE.MathUtils.lerp(0, -Math.PI * 0.65, progress);
    lidRef.current.rotation.x = angle;
  });

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#00B5B5"),
        roughness: 0.8,
        metalness: 0.1,
      }),
    []
  );

  return (
    <group ref={lidRef} position={[0, 0.82, -1]}>
      {/* Lid top */}
      <mesh position={[0, 0, 0.5]} material={material}>
        <boxGeometry args={[2.4, 0.08, 1.1]} />
      </mesh>
      {/* Lid front flap */}
      <mesh position={[0, -0.04, 1.05]} material={material}>
        <boxGeometry args={[2.4, 0.08, 0.06]} />
      </mesh>
    </group>
  );
}

function BoxBody() {
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#00B5B5"), // A bit richer turquoise
        roughness: 0.8,
        metalness: 0.1,
      }),
    []
  );

  const innerMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#FFD24A"),
        roughness: 0.9,
        metalness: 0,
      }),
    []
  );

  return (
    <group>
      {/* Box walls */}
      {/* Front */}
      <mesh position={[0, 0, 0.5]} material={material}>
        <boxGeometry args={[2.4, 1.6, 0.06]} />
      </mesh>
      {/* Logo on Front */}
      <mesh position={[0, 0.2, 0.531]}>
        <circleGeometry args={[0.2, 32]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.2, 0.533]}>
        <circleGeometry args={[0.08, 5]} />
        <meshStandardMaterial color="#0E0E10" roughness={0.3} />
      </mesh>

      {/* Back */}
      <mesh position={[0, 0, -0.5]} material={material}>
        <boxGeometry args={[2.4, 1.6, 0.06]} />
      </mesh>
      {/* Left */}
      <mesh position={[-1.2, 0, 0]} material={material}>
        <boxGeometry args={[0.06, 1.6, 1.0]} />
      </mesh>
      {/* Right */}
      <mesh position={[1.2, 0, 0]} material={material}>
        <boxGeometry args={[0.06, 1.6, 1.0]} />
      </mesh>
      {/* Bottom */}
      <mesh position={[0, -0.8, 0]} material={innerMaterial}>
        <boxGeometry args={[2.4, 0.06, 1.0]} />
      </mesh>
      {/* Inner lining sides */}
      <mesh position={[0, 0, 0.44]} material={innerMaterial}>
        <boxGeometry args={[2.3, 1.5, 0.02]} />
      </mesh>
    </group>
  );
}

function InnerBook({ progress }: { progress: number }) {
  const bookRef = useRef<THREE.Group>(null);

  const coverMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#FD48F2"),
        roughness: 0.35,
        metalness: 0.05,
      }),
    []
  );

  const pageMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#FAF3E8"),
        roughness: 0.9,
        metalness: 0,
      }),
    []
  );

  useFrame(() => {
    if (!bookRef.current) return;
    // Book rises as scroll progresses
    const y = THREE.MathUtils.lerp(-0.5, 0.4, Math.min(progress * 1.5, 1));
    bookRef.current.position.y = y;
    bookRef.current.rotation.y = progress * 0.2;
  });

  return (
    <group ref={bookRef} position={[0, -0.5, 0]} rotation={[0, 0.1, 0]}>
      {/* Front cover */}
      <mesh position={[0, 0, 0.12]} material={coverMat}>
        <boxGeometry args={[1.4, 2.0, 0.03]} />
      </mesh>
      {/* Back cover */}
      <mesh position={[0, 0, -0.12]} material={coverMat}>
        <boxGeometry args={[1.4, 2.0, 0.03]} />
      </mesh>
      {/* Pages */}
      <mesh material={pageMat}>
        <boxGeometry args={[1.35, 1.95, 0.2]} />
      </mesh>
      {/* Spine */}
      <mesh position={[-0.7, 0, 0]} material={coverMat}>
        <boxGeometry args={[0.03, 2.0, 0.24]} />
      </mesh>
    </group>
  );
}

function TissuePaper({ progress }: { progress: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#FFFFFF"),
        roughness: 0.8,
        metalness: 0,
        transparent: true,
        opacity: 0.7,
        side: THREE.DoubleSide,
      }),
    []
  );

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.z = progress * 0.3;
    meshRef.current.position.y = THREE.MathUtils.lerp(-0.3, 0.6, Math.min(progress * 1.2, 1));
  });

  return (
    <mesh ref={meshRef} position={[0, -0.3, 0.15]} rotation={[0, 0, -0.05]} material={material}>
      <planeGeometry args={[2.0, 2.2]} />
    </mesh>
  );
}

function UnboxingScene({ scrollProgress, mouseX, mouseY }: UnboxingProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const scale = Math.min(viewport.width / 10, 1);

  useFrame(() => {
    if (!groupRef.current) return;
    const progress = scrollProgress.current;

    // Subtle mouse influence
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouseX.current * 0.15 - 0.3,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouseY.current * 0.08 + 0.2,
      0.05
    );

    // Scale up as we scroll in
    const s = THREE.MathUtils.lerp(0.85, 1, Math.min(progress * 2, 1));
    groupRef.current.scale.setScalar(s * scale);
  });

  const progress = scrollProgress.current;

  return (
    <group ref={groupRef} position={[0, -0.2, 0]} scale={scale}>
      <ambientLight intensity={0.5} color="#F0FFFF" />
      <directionalLight position={[4, 8, 5]} intensity={1.3} color="#FFFFFF" castShadow />
      <directionalLight position={[-3, 5, -3]} intensity={0.4} color="#A4F6F8" />
      <pointLight position={[0, 3, 3]} intensity={0.5} color="#FFD24A" />

      <BoxBody />
      <BoxLid progress={progress} />
      <TissuePaper progress={progress} />
      <InnerBook progress={progress} />

      <ContactShadows
        position={[0, -0.85, 0]}
        opacity={0.35}
        scale={6}
        blur={2}
        far={3}
        color="#1a4a4b"
      />
    </group>
  );
}

export default function UnboxingCanvas() {
  const scrollProgress = useRef(0);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      // Progress: 0 when section enters bottom, 1 when section center hits viewport center
      const progress = 1 - (rect.top / viewportHeight);
      scrollProgress.current = Math.max(0, Math.min(1, progress * 0.8));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.current = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    mouseY.current = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[500px]"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        mouseX.current = 0;
        mouseY.current = 0;
      }}
    >
      <Canvas
        camera={{ position: [0, 1.5, 5], fov: 35 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <UnboxingScene
          scrollProgress={scrollProgress}
          mouseX={mouseX}
          mouseY={mouseY}
        />
      </Canvas>
    </div>
  );
}
