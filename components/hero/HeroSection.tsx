"use client";

import React, { useRef } from "react";
import PopUpEasterEgg from "../ui/PopUpEasterEgg";
import dynamic from "next/dynamic";

const HeroSequenceCanvas = dynamic(() => import("./HeroSequenceCanvas"), { ssr: false });
const TopLeftBook = dynamic(() => import("../3d/TopLeftBook"), { ssr: false });

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={containerRef}
      data-intro-home=""
      className="hero is--bg-yellow relative w-full h-[300vh] min-h-[800px] bg-[#FFD24A]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        {/* HERO BACKGROUND ORGANIC CURVED SVGS (z-0) */}
        <div
          data-hero-bg-intro=""
          data-hero-bg=""
          data-load-reset=""
          className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 1920 1403"
            className="w-full h-full object-cover hidden md:block opacity-90"
            preserveAspectRatio="xMidYMin slice"
          >
            <path
              d="M1695.07 151.632c64.24-31.904 131.73-7.088 176.11 42.102 40.17 44.528 55.82 98.753 61.56 156.949 6.14 62.16-2.03 123.84-5.58 185.677-3.39 59.179-3.64 118.025 17.39 174.679 10.72 28.85 25.42 55.218 51.77 73.069 37.97 25.728 81.74 25.202 122.06-1.291 30.97-20.344 55.08-47.559 77.62-76.157v264.039c-58.87 19.501-116.27 43.421-174.84 63.861-44.23 15.43-89.54 27.89-136.8 29.55-56.61 1.99-105.94-14-133.74-67.126-13.24-25.298-23.19-53.745-27.66-81.867-8.42-53.005-10.61-106.956-17.74-160.196-3.59-26.806-9.33-54.115-19.35-79.093-19.69-49.067-66.48-65.165-114.61-43.224-29.94 13.641-55.74 33.151-80.62 54.275-37 31.428-73.18 64.005-112.05 92.942-22.25 16.551-48.12 29.623-74.19 39.345-41.28 15.384-78.24 2.614-110.36-26.124-31.39-28.102-50.42-64.67-70.05-100.935-11.96-22.103-24.51-43.883-37.17-65.587-3.23-5.562-7.57-10.586-11.94-15.365-27.98-30.646-58.88-30.767-82.42 3.757-19.89 29.17-34.427 61.976-51.488 93.082-21.019 38.326-40.302 77.781-63.758 114.584-39.329 61.713-97.979 101.491-163.715 129.981-59.999 26.005-121.922 47.501-182.611 71.931-42.824 17.23-83.179 39.5-118.338 69.59-34.021 29.14-59.637 64.2-65.374 110.44-3.776 30.48 4.892 57.48 24.129 81.15 36.407 44.77 86.741 62.81 141.012 73.57 59.97 11.89 120.728 11.08 181.378 12.17 61.192 1.09 122.363 2.43 181.917 18.66 37.051 10.09 72.202 24.64 102.005 49.74 39.753 33.48 57.763 73.94 57.933 120.19H226.533c-32.085-15.58-61.858-36.47-89.169-62.36-48.299-45.77-73.99-103.5-81.404-168.72-13.75-120.96 23.385-223.39 117.115-302.9 47.855-40.585 105.059-63.358 164.62-80.624 55.764-16.161 111.972-30.874 167.344-48.27 81.076-25.473 126.787-83.135 138.108-165.858 7.617-55.667 10.094-112.134 12.801-168.345 3.398-70.665 5.964-141.34 26.451-209.729 14.422-48.177 37.313-91.294 76.771-124.226 54.474-45.449 114.019-50.265 177.528-22.453 57.146 25.041 98.342 69.929 140.732 113.528 45.29 46.59 90.28 93.645 138.12 137.532 35.4 32.486 79.11 50.935 127.66 56.479 46.17 5.271 86.45-6.277 120.85-38.421 37.86-35.39 61.71-79.931 84.98-125.169 20.81-40.424 41.24-81.195 64.93-119.919 19.97-32.658 45.75-61.364 81.1-78.913"
              fill="#FFF09A"
              transform="translate(-100, -80) scale(1.05)"
            />
          </svg>
  
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 402 874"
            className="w-full h-full object-cover md:hidden"
            preserveAspectRatio="xMidYMin slice"
          >
            <path
              d="M189.759 317.853c25.652-21.403 53.691-23.67 83.597-10.574 26.911 11.792 46.31 32.93 66.272 53.461 21.327 21.939 42.513 44.098 65.039 64.764A100 100 0 0 0 422 438.279v159.838c-9.837-1.862-19.006-7.076-27.461-14.641-14.783-13.233-23.743-30.453-32.984-47.531-5.632-10.408-11.546-20.664-17.503-30.884-1.525-2.619-3.567-4.985-5.625-7.236-13.174-14.431-27.725-14.489-38.812 1.769-9.366 13.736-16.212 29.185-24.246 43.833-9.898 18.048-18.977 36.628-30.022 53.958-18.521 29.061-46.139 47.792-77.095 61.208-28.254 12.246-57.414 22.369-85.992 33.874-20.166 8.115-39.169 18.597-55.725 32.769-16.02 13.72-28.084 30.233-30.785 52.008-1.778 14.352 2.303 27.067 11.362 38.211 17.145 21.084 40.847 29.577 66.404 34.644 28.239 5.6 56.85 5.22 85.41 5.73 28.815.513 57.621 1.146 85.665 8.788 17.447 4.754 34.001 11.605 48.035 23.424a91 91 0 0 1 7.403 6.959H-28V661.367c6.342-2.235 12.783-4.262 19.285-6.147 26.26-7.61 52.728-14.539 78.803-22.731 38.178-11.995 59.704-39.148 65.035-78.102 3.587-26.214 4.754-52.805 6.028-79.275 1.601-33.276 2.808-66.557 12.455-98.761 6.792-22.687 17.572-42.991 36.153-58.498"
              fill="#FFF09A"
            />
            <path
              d="M283.204 609.36c9.513-8.112 18.797-8.554 28.662-.753 11.425 9.035 18.539 21.531 26.503 33.325 9.871 14.623 20.709 28.191 36.309 37.333 16.136 9.457 32.242 10.494 47.322 3.269V895h-16.915c-8.518-26.74-26.169-46.384-48.396-62.676-36.293-26.602-77.416-33.146-120.871-27.742-29.518 3.67-58.748 9.716-88.226 13.803-13.235 1.836-26.807 2.388-40.167 1.919-25.04-.881-35.948-23.829-25.715-46.703 5.914-13.215 17.482-21.284 29.743-28.174 18.949-10.646 40.112-13.255 61.021-16.795 13.867-2.344 27.924-4.006 41.487-7.542 30.315-7.909 47.278-28.157 51.663-59.109 1.426-10.091 2.84-20.197 4.774-30.2 1.705-8.801 5.765-16.42 12.806-22.421"
              fill="#F9A220"
            />
          </svg>
        </div>
  
        {/* TOP LEFT TEAL PACKAGE (z-10) */}
        <TopLeftBook />
  
        {/* HERO IMAGE SEQUENCE CANVAS (z-10) - shifted slightly right & smaller */}
        <div className="absolute inset-0 z-10 pointer-events-none translate-x-[2%] translate-y-[5%] scale-[0.95]">
          <HeroSequenceCanvas />
        </div>
  
        {/* TYPOGRAPHY AND CONTENT (z-20) */}
        <div data-load-reset="" className="hero__container u-container relative z-20 w-full h-full flex flex-col justify-center pointer-events-none">
          
          {/* HEADLINE & COPY */}
          <div className="hero__content w-full flex flex-col gap-6 md:gap-8 pt-24 md:-mt-10 lg:-mt-20">
            <div className="hero__header ml-2 md:ml-4">
              <h1 
                data-hero-title="" 
                className="text-display-hero text-[#0E0E10]"
              >
                Unbox stories
                <br />
                worth talking
                <br />
                about
              </h1>
            </div>
  
            <p
              data-hero-paragraph=""
              className="text-body-lg text-[#0E0E10] max-w-[28rem] mt-6 pointer-events-auto ml-2 md:ml-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "clamp(1.1rem, 1.8vw, 1.3rem)" }}
            >
              Join the book club that's anything but traditional. Choose up to 3 new reads every month, delivered to your door. Then dive into the stories, and the conversations.
            </p>
  
            <div className="mt-4 pointer-events-auto flex items-start ml-2 md:ml-4">
              <a
                href="https://app.aardvarkbookclub.com/books"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#FF0FA8] text-white px-8 py-[18px] rounded-full border-[2.5px] border-[#0E0E10] shadow-[4px_6px_0_0_rgba(14,14,16,1)] hover:shadow-[6px_8px_0_0_rgba(14,14,16,1)] hover:-translate-y-[2px] transition-all group"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <span className="font-bold text-[1.05rem] tracking-wide">Log-in / Sign-up now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 14 13"
                  fill="none"
                  aria-hidden="true"
                  className="ml-3 transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M13.58 5.66v.845l-5.994 5.66-1.71-2.063a61.427 61.427 0 0 1 4.265-2.988l-.02-.078c-1.828.196-4.107.294-6.387.294H0V4.835h3.734c2.28 0 4.56.098 6.387.294l.02-.059a67.638 67.638 0 0 1-4.265-3.006L7.586 0l5.994 5.66Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
  
          {/* FLOATING SHIPPING ANNOTATION (z-30) */}
          <div className="absolute right-[5%] top-[60%] lg:right-[8%] lg:top-[55%] transform -rotate-3 pointer-events-none z-30">
            <p
              data-hero-handwritten-text=""
              className="text-[#3B308F] leading-[1.1] text-center text-3xl lg:text-[2.2rem] font-medium"
              style={{ fontFamily: "var(--font-handwritten)" }}
            >
              Shipping to
              <br />
              the USA &amp;
              <br />
              Canada
            </p>
          </div>
  
        </div>
  
        {/* EASTER EGG MASCOT (z-50) */}
        <div data-hero-easter-egg="" className="absolute bottom-8 left-8 z-50 pointer-events-auto">
          <PopUpEasterEgg variant="left" />
        </div>
  
        {/* BOTTOM RIGHT WHITE AARDVARK SYMBOL */}
        <div className="absolute bottom-12 right-12 z-30 pointer-events-none hidden md:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 100 100"
            fill="none"
            className="opacity-95"
          >
            <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="2.5" />
            <path d="M48 25 L65 70 H52 L48 55 L40 70 H28 Z M45 42 L48 30 L52 42 Z" fill="white" />
          </svg>
        </div>
      </div>
    </section>
  );
}
