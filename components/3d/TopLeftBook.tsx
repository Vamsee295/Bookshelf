"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Shadow } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// A simple box with a teal cover and a dark spine
function PackageModel() {
  const meshRef = useRef<THREE.Group>(null);

  React.useEffect(() => {
    if (!meshRef.current) return;
    
    // We want the book to enter from the top left and slightly rotate as we scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    // Initial state matching the reference exactly
    // Tilted diagonally, partially off-screen top-left
    gsap.set(meshRef.current.position, { x: -0.5, y: 1.5, z: 0 });
    gsap.set(meshRef.current.rotation, { x: 0.2, y: 0.1, z: -0.4 });

    // As we scroll, it moves slightly and rotates
    tl.to(meshRef.current.position, {
      x: -1.5,
      y: 2.5,
      z: -1,
      ease: "power1.inOut"
    }, 0)
    .to(meshRef.current.rotation, {
      x: 0.3,
      y: 0.2,
      z: -0.6,
      ease: "power1.inOut"
    }, 0);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <group ref={meshRef}>
      {/* Box dimensions: width, height, depth */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[4.2, 5.5, 0.7]} />
        {/* 6 materials for a box: right, left, top, bottom, front, back */}
        <meshStandardMaterial attach="material-0" color="#111111" roughness={0.7} /> {/* Spine/right side depending on rotation */}
        <meshStandardMaterial attach="material-1" color="#111111" roughness={0.7} />
        <meshStandardMaterial attach="material-2" color="#00A5B5" roughness={0.4} /> {/* Top cover */}
        <meshStandardMaterial attach="material-3" color="#00A5B5" roughness={0.4} />
        <meshStandardMaterial attach="material-4" color="#00A5B5" roughness={0.4} /> {/* Front cover */}
        <meshStandardMaterial attach="material-5" color="#00A5B5" roughness={0.4} />
      </mesh>
      
      {/* Fake drop shadow under the book */}
      <Shadow
        color="black"
        colorStop={0}
        opacity={0.3}
        fog={false}
        scale={[6, 8, 1]}
        position={[0.2, -0.2, -0.6]}
        rotation={[0, 0, 0]}
      />
    </group>
  );
}

export default function TopLeftBook() {
  return (
    <div className="absolute top-[-15%] left-[-10%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] min-w-[300px] min-h-[300px] pointer-events-none z-10">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={40} />
        <ambientLight intensity={0.6} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1.5} 
          castShadow 
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} />
        <PackageModel />
      </Canvas>
    </div>
  );
}
