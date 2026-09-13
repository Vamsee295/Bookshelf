"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 120;
const URL_PREFIX = "https://aardvark-book-club.b-cdn.net/frame_";
const URL_SUFFIX = ".webp";

function getFrameUrl(index: number) {
  // Pad with leading zeros to 3 digits (e.g., 000, 001, 119)
  const paddedIndex = index.toString().padStart(3, "0");
  return `${URL_PREFIX}${paddedIndex}${URL_SUFFIX}`;
}

export default function HeroSequenceCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    // Set canvas internal resolution for high-DPI displays
    const dpr = window.devicePixelRatio || 1;
    let cw = window.innerWidth;
    let ch = window.innerHeight;
    canvas.width = cw * dpr;
    canvas.height = ch * dpr;
    ctx.scale(dpr, dpr);

    // Array to hold the image objects
    const images: HTMLImageElement[] = [];

    // Define the sequence object that GSAP will animate
    const sequence = { frame: 0 };

    // Draw function to render the current frame to the canvas
    const drawFrame = (index: number) => {
      if (!ctx || !canvas) return;
      
      const img = images[index];
      if (!img) return;

      // Clear the canvas
      ctx.clearRect(0, 0, cw, ch);

      // We want to draw the image covering the canvas while maintaining aspect ratio
      const imgRatio = img.width / img.height;
      const canvasRatio = cw / ch;
      
      let drawW = cw;
      let drawH = ch;
      let drawX = 0;
      let drawY = 0;

      if (imgRatio > canvasRatio) {
        // Image is wider than canvas
        drawW = ch * imgRatio;
        drawH = ch;
        drawX = (cw - drawW) / 2;
      } else {
        // Image is taller than canvas
        drawW = cw;
        drawH = cw / imgRatio;
        drawY = (ch - drawH) / 2;
      }

      ctx.drawImage(img, drawX, drawY, drawW, drawH);
    };

    // Preload images
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      img.onload = () => {
        // If this is the first frame, draw it immediately
        if (i === 0) {
          drawFrame(0);
        }
      };
      images.push(img);
    }

    framesRef.current = images;

    // GSAP ScrollTrigger timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
      },
    });

    tl.to(sequence, {
      frame: FRAME_COUNT - 1,
      snap: "frame",
      ease: "none",
      onUpdate: () => {
        // Only draw if the image has loaded
        if (images[sequence.frame] && images[sequence.frame].complete) {
          drawFrame(sequence.frame);
        }
      },
    });

    // Handle resize
    const handleResize = () => {
      if (!canvas || !ctx) return;
      const newDpr = window.devicePixelRatio || 1;
      cw = window.innerWidth;
      ch = window.innerHeight;
      
      canvas.width = cw * newDpr;
      canvas.height = ch * newDpr;
      ctx.scale(newDpr, newDpr);
      
      drawFrame(sequence.frame);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      tl.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
        style={{ display: "block" }}
      />
    </div>
  );
}
