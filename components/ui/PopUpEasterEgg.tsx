"use client";

import React, { useState } from "react";

interface PopUpEasterEggProps {
  variant?: "left" | "right" | "right-bottom";
  className?: string;
}

export default function PopUpEasterEgg({
  variant = "left",
  className = "",
}: PopUpEasterEggProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      data-pop-up=""
      data-wf--logo-pop-up--variant={variant}
      className={`pop-up ${isOpen ? "is--active" : ""} ${className}`}
    >
      <button
        type="button"
        data-pop-up-button=""
        aria-label="Show Sign up"
        className="pop-up__button"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
      >
        <span className="pop-up__button-inner">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 80 80"
            width="100%"
            className="pop-up__button-svg"
          >
            <path
              fill="currentColor"
              d="m53.332 55.909-9.81-22.05c1.253-3.071 4.434-12.573 1.132-24.425a.845.845 0 0 0-.602-.6.82.82 0 0 0-.82.24c-.096.12-2.651 2.711-4.507 6.19-2.58 4.799-2.531 8.854.12 11.78 2.917 3.192 3.062 5.423 2.893 6.431l-.555.048c-.988-2.111-4.29-8.062-12.51-13.82a.734.734 0 0 0-.698-.072c-.242.096-.386.336-.41.576-.314 3.839.723 11.3 6.893 12.212 3.881.576 5.183 1.68 5.593 2.136-.121.816-.41 1.871-.989 3.239l-7.28 16.651h-.023a1.456 1.456 0 0 1-.12.288l-.097.192c-1.157 2.471-5.327 6.766-6.99 8.446-.41.431-.7.72-.796.84-.096.12-.385.575.169 1.175.771.84 3.182 1.895 4.315 1.104.337-.24.53-.48.747-.768.627-.816 4.001-4.559 9.424-9.261 0 0 1.76-2.184 4.435-2.52h1.616c1.205 0 2.169.288 2.723 1.512l.892 2.04c.844 1.943.844 2.998-2 3.454v1.296h11.642v-1.248c-2.363-.432-2.869-1.727-4.387-5.086Zm-13.233-7.27a2.284 2.284 0 0 1-2.29-2.28 2.284 2.284 0 0 1 2.29-2.279 2.284 2.284 0 0 1 2.29 2.28c0 1.247-1.037 2.279-2.29 2.279Z"
            />
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M40.922 0C63.522 0 80 18.401 80 41.1 80 63.8 63.522 80 40.922 80S0 63.8 0 41.1C0 18.402 18.321 0 40.922 0Zm22.857 15.697c-13.817-13.474-36.234-13.754-49.77 0C.473 29.45 2.035 50.379 15.852 63.853 29.67 77.327 52.823 79.81 66.36 66.055c13.537-13.754 11.237-36.884-2.58-50.358Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      <div
        className="pop-up__overlay"
        style={{
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transform: isOpen ? "scale(1)" : "scale(0.85)",
          transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="pop-up__overlay-inner">
          <div className="pop-up__overlay-bg-wrap">
            <div className="pop-up__overlay-ears">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 44 45"
                width="100%"
                className="pop-up__overlay-left-ear"
              >
                <path
                  fill="currentColor"
                  d="M1.335.198c.671-.316 1.5-.254 2.186.187C27.678 16.847 39.839 36.953 44 45h-6.048c-2.382-1.604-6.964-3.674-15.652-4.814C2.999 37.666-.665 14.174.09 2.04.152 1.28.589.515 1.335.198Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 29 80"
                width="100%"
                className="pop-up__overlay-right-ear"
              >
                <path
                  fill="currentColor"
                  d="M19.388.879c.667-.771 1.647-1.018 2.559-.807.912.21 1.682.956 1.926 1.861C34.595 38.09 25.79 69.237 21.823 80h-4.188c-.17-4.22-2.739-13.318-10.975-22.064-8.493-9.099-8.88-21.913-1.063-37.23C11.221 9.603 19.091 1.266 19.388.879Z"
                />
              </svg>
            </div>
            <div className="pop-up__overlay-bg" />
          </div>
          <div className="pop-up__overlay-content">
            <h3 className="pop-up__overlay-title u-heading-xs">
              Want to join the Club?
            </h3>
            <div className="pop-up__overlay-content-action">
              <a
                data-button-alt=""
                data-wf--button-alt--variant="small"
                href="https://app.aardvarkbookclub.com/books"
                target="_blank"
                rel="noopener noreferrer"
                className="button-alt w-inline-block"
              >
                <span className="button-alt__text-wrap">
                  <span className="button-alt__bg" />
                  <span className="button-alt__text-outer">
                    <span data-button-alt-text="" className="button-alt__text">
                      Sign-up now!
                    </span>
                  </span>
                </span>
                <span className="button-alt__icon-wrap">
                  <span className="button-alt__bg" />
                  <span className="button-alt__icon-outer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 14 13"
                      fill="none"
                      aria-hidden="true"
                      className="button-alt__icon"
                    >
                      <path
                        d="M13.58 5.66v.845l-5.994 5.66-1.71-2.063a61.427 61.427 0 0 1 4.265-2.988l-.02-.078c-1.828.196-4.107.294-6.387.294H0V4.835h3.734c2.28 0 4.56.098 6.387.294l.02-.059a67.638 67.638 0 0 1-4.265-3.006L7.586 0l5.994 5.66Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="pop-up__overlay-target-zone"
          onClick={() => setIsOpen(false)}
        />
      </div>
    </div>
  );
}
