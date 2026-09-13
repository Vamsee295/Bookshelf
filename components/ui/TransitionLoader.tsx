"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function TransitionLoader() {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Premium GSAP animation sequence for the loader
    const tl = gsap.timeline({
      onComplete: () => {
        setLoading(false);
      },
    });

    // 1. Initial pulse of the logo
    tl.to(logoRef.current, {
      scale: 1.05,
      duration: 0.8,
      ease: "power2.inOut",
      yoyo: true,
      repeat: 1,
    });

    // 2. Fade out logo
    tl.to(
      logoRef.current,
      {
        opacity: 0,
        scale: 0.9,
        duration: 0.4,
        ease: "power2.in",
      },
      "+=0.2"
    );

    // 3. Slide up the entire transition wrapper
    tl.to(
      containerRef.current,
      {
        yPercent: -100,
        duration: 1,
        ease: "power4.inOut",
      },
      "-=0.2"
    );

    return () => {
      tl.kill();
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      ref={containerRef}
      data-transition-wrap=""
      className="transition"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#A4F6F8",
        color: "#3B308F",
      }}
    >
      <div
        className="transition__shape"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1080 1080"
          fill="none"
          preserveAspectRatio="none"
          className="transition__svg"
          style={{
            width: "100%",
            height: "100%",
            color: "#A4F6F8",
          }}
        >
          <path
            d="M66.858-19C57.597 196.452 127.164 482.585 206.5 464.5c125.428-28.592 52.293-293.51 200.001-339 568.234-175-241.425 712.6 15.5 803.02C645 1007 629.398 499 810.5 499c113.398 0 106.54 189.465 164.235 429.52 48.005 199.72 89.415 213.09 105.265 173.78"
            stroke="currentColor"
            strokeWidth="70%"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div
        ref={logoRef}
        data-load-reset=""
        data-transition-logo=""
        className="transition__logo"
        style={{
          position: "relative",
          zIndex: 2,
          width: "180px",
          height: "180px",
          color: "#3B308F",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 300 300"
          width="100%"
          className="transition__logo-svg"
        >
          <path
            fill="currentColor"
            d="m199.994 209.658-36.789-82.687c4.7-11.517 16.632-47.147 4.249-91.594a3.17 3.17 0 0 0-2.26-2.25c-1.085-.27-2.26 0-3.073.9-.362.45-9.943 10.167-16.903 23.214-9.672 17.995-9.491 33.2.452 44.177 10.937 11.967 11.479 20.334 10.846 24.113l-2.079.18c-3.705-7.917-16.089-30.231-46.912-51.825-.813-.54-1.807-.63-2.621-.27-.904.36-1.446 1.26-1.536 2.16-1.176 14.395 2.711 42.377 25.851 45.796 14.553 2.16 19.434 6.299 20.97 8.008-.452 3.059-1.536 7.018-3.706 12.147l-27.297 62.442h-.091c-.09.36-.271.72-.452 1.08l-.361.72c-4.339 9.267-19.976 25.373-26.213 31.671-1.537 1.619-2.621 2.699-2.983 3.149-.361.45-1.446 2.159.633 4.409 2.892 3.149 11.931 7.108 16.179 4.139 1.266-.9 1.989-1.8 2.803-2.88 2.35-3.059 15.004-17.095 35.342-34.73 0 0 6.598-8.188 16.631-9.447h6.056c4.52 0 8.135 1.079 10.214 5.668l3.345 7.648c3.163 7.288 3.163 11.247-7.502 12.956v4.859h43.658v-4.679c-8.859-1.619-10.757-6.478-16.451-19.074m-49.624-27.263c-4.7 0-8.587-3.779-8.587-8.547 0-4.679 3.796-8.548 8.587-8.548 4.7 0 8.587 3.779 8.587 8.548 0 4.678-3.887 8.547-8.587 8.547"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M153.456 0C238.208 0 300 69.006 300 154.128 300 239.251 238.208 300 153.456 300 68.705 300 0 239.251 0 154.128 0 69.006 68.705 0 153.456 0m85.715 58.863c-51.815-50.528-135.876-51.577-186.636 0S7.633 188.921 59.447 239.45c51.814 50.526 138.641 59.833 189.401 8.256s42.137-138.316-9.677-188.843"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
