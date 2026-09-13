"use client";

import React from "react";

export default function PromoStrip() {
  const promoText = "1st book only $4 w/ code SUMMER (USA-only)! • ";

  return (
    <section className="badge">
      <div className="badge__container">
        <div data-badge="" className="badge__inner">
          <div data-badge-item="" className="badge__item is--first">
            <div className="badge__item-title-outer overflow-hidden whitespace-nowrap flex">
              <span className="badge__item-title inline-block animate-marquee">
                {promoText.repeat(8)}
              </span>
            </div>
            <div className="badge__item-bg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 2011 145"
                width="100%"
                className="badge__item-bg-svg"
              >
                <g fill="currentColor" clipPath="url(#badge-clip-1)">
                  <path d="M522.714 32.133C534.929-7.994 565.736-17.48 603.542 2.98c5.886 3.193 11.838 6.62 16.876 10.891 19.662 16.71 39.246 33.517 58.324 50.81 31.328 28.382 62.157 57.239 102.545 74.207a178 178 0 0 0 16.8 6.112l-297.999.001q.803-4.204 1.63-8.401c6.872-34.866 10.678-70.564 20.996-104.467M1304.23 0c13.85 30.538 27.44 61.18 43.29 90.735 10.34 19.282 23.9 37.752 39.21 54.266L1227.85 145c-12.02-12.149-25.07-23.381-39.89-33.111-49.63-32.602-124.63-32.93-168.83 18.126-4.2 4.853-8.08 9.857-11.72 14.985H871.583c9.615-3.528 18.995-8.649 28.068-15.546 22.791-17.333 44.297-37.79 61.068-60.43C977.283 46.647 992.605 23.429 1007.61 0zM2056.78 0c5.35 17.74 8.57 36.296 11.93 54.504 1.02 5.551 1.67 11.168 2.15 16.81l-37 73.686h-400.09c16.99-10.341 33.39-21.603 49.44-33.287 50.15-36.51 98.13-75.785 148.68-111.712z" />
                </g>
                <defs>
                  <clipPath id="badge-clip-1">
                    <path
                      fill="currentColor"
                      d="m.042 0 2010.74.578-.042 144L0 144z"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <div data-badge-item="" className="badge__item is--second">
            <div className="badge__item-title-outer overflow-hidden whitespace-nowrap flex">
              <span className="badge__item-title inline-block animate-marquee">
                {promoText.repeat(8)}
              </span>
            </div>
            <div className="badge__item-bg is--blue">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 2011 145"
                width="100%"
                className="badge__item-bg-svg"
              >
                <g fill="currentColor" clipPath="url(#badge-clip-2)">
                  <path d="M522.714 32.133C534.929-7.994 565.736-17.48 603.542 2.98c5.886 3.193 11.838 6.62 16.876 10.891 19.662 16.71 39.246 33.517 58.324 50.81 31.328 28.382 62.157 57.239 102.545 74.207a178 178 0 0 0 16.8 6.112l-297.999.001q.803-4.204 1.63-8.401c6.872-34.866 10.678-70.564 20.996-104.467M1304.23 0c13.85 30.538 27.44 61.18 43.29 90.735 10.34 19.282 23.9 37.752 39.21 54.266L1227.85 145c-12.02-12.149-25.07-23.381-39.89-33.111-49.63-32.602-124.63-32.93-168.83 18.126-4.2 4.853-8.08 9.857-11.72 14.985H871.583c9.615-3.528 18.995-8.649 28.068-15.546 22.791-17.333 44.297-37.79 61.068-60.43C977.283 46.647 992.605 23.429 1007.61 0zM2056.78 0c5.35 17.74 8.57 36.296 11.93 54.504 1.02 5.551 1.67 11.168 2.15 16.81l-37 73.686h-400.09c16.99-10.341 33.39-21.603 49.44-33.287 50.15-36.51 98.13-75.785 148.68-111.712z" />
                </g>
                <defs>
                  <clipPath id="badge-clip-2">
                    <path
                      fill="currentColor"
                      d="m.042 0 2010.74.578-.042 144L0 144z"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
