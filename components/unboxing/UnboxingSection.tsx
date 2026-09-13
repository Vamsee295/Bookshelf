"use client";

import React, { useRef, useEffect } from "react";
import PopUpEasterEgg from "../ui/PopUpEasterEgg";
import dynamic from "next/dynamic";

const UnboxingCanvas = dynamic(() => import("../3d/UnboxingCanvas"), {
  ssr: false,
});

export default function UnboxingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Canvas image sequence loader for scrolling frame animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const frameCount = 120;
    const images: HTMLImageElement[] = [];
    let currentFrame = 0;

    // Load initial frame
    const baseImg = new Image();
    baseImg.src =
      "https://aardvark-book-club.b-cdn.net/box/frame-000.webp";
    baseImg.onload = () => {
      canvas.width = baseImg.naturalWidth || 800;
      canvas.height = baseImg.naturalHeight || 600;
      ctx.drawImage(baseImg, 0, 0);
    };

    // Preload frames incrementally
    for (let i = 0; i < frameCount; i += 3) {
      const img = new Image();
      const padded = String(i).padStart(3, "0");
      img.src = `https://aardvark-book-club.b-cdn.net/box/frame-${padded}.webp`;
      images.push(img);
    }

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const totalScroll = rect.height - window.innerHeight;
      if (totalScroll <= 0) return;
      const progress = Math.max(0, Math.min(1, -rect.top / totalScroll));
      const frameIdx = Math.min(
        images.length - 1,
        Math.floor(progress * images.length)
      );

      if (images[frameIdx] && images[frameIdx].complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(images[frameIdx], 0, 0, canvas.width, canvas.height);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="box">
      <div
        data-scroll-start="top 85%"
        data-box-sequence=""
        data-scroll-end="bottom 80%"
        className="box__wrap"
      >
        <div className="box__sticky">
          <div data-box-sequence-element="" className="box__element">
            <canvas
              ref={canvasRef}
              data-box-sequence-canvas=""
              data-desktop-src="https://aardvark-book-club.b-cdn.net/box/frame-"
              data-static-src="https://aardvark-book-club.b-cdn.net/box/frame-000.webp"
              data-filetype="webp"
              data-frames="120"
              data-digits="3"
              data-index-start="0"
              data-mobile-src="https://aardvark-book-club.b-cdn.net/box-mobile/frame-"
              className="box__canvas"
            />
            <div className="box__logo-easter-egg">
              <div className="box__logo-easter-egg-inner">
                <PopUpEasterEgg variant="left" />
              </div>
            </div>
          </div>

          <div className="box__text-wrap">
            <div className="box__text-outer">
              <p
                data-box-sequence-handwritten-text=""
                className="box__text u-handwritten-regular"
              >
                Each box includes a bookmark per book and postcard with a
                challenge to win a free credit!
              </p>
            </div>
          </div>

          <div data-box-sequence-content="" className="box__content">
            <div className="box__header">
              <img
                src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69c6d9f6cb0f4ec3190ce451_box-title.svg"
                loading="lazy"
                width={1000}
                height={227}
                alt="box-title"
                data-box-sequence-title=""
                className="box__header-img"
              />
            </div>
            <div className="box__content-text-wrap">
              <div className="box__content-text-outer">
                <p
                  data-box-sequence-text-final=""
                  className="box__content-text u-handwritten-regular"
                >
                  Made for readers by readers
                </p>
              </div>
            </div>
            <div className="box__action">
              <div
                data-box-sequence-button=""
                className="box__button-wrap transition-transform duration-300 hover:scale-105"
              >
                <a
                  aria-label="Download on the App Store"
                  data-wf--button-app-store--variant="base"
                  href="https://apps.apple.com/us/app/aardvark-book-club/id6443419435"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button is--app w-inline-block"
                >
                  <img
                    width={300}
                    height={100}
                    alt="AppStore Button"
                    src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69960373d1c35e0dd8ec560d_button-app-store.svg"
                    loading="lazy"
                    className="button__bg is--app"
                  />
                </a>
              </div>
              <div
                data-box-sequence-button=""
                className="box__button-wrap transition-transform duration-300 hover:scale-105"
              >
                <a
                  aria-label="Get it on Google Play"
                  data-wf--button-google-play--variant="base"
                  href="https://play.google.com/store/apps/details?id=com.aardvark.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button is--app w-inline-block"
                >
                  <img
                    width={300}
                    height={100}
                    alt="Google Play Button"
                    src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6996037302aa4574b3eecab8_button-google-play.svg"
                    loading="lazy"
                    className="button__bg is--app"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
