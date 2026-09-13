"use client";

import React from "react";

const STEPS = [
  {
    step: "Step #1",
    variant: "base",
    img: "https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69849eba6ebf97ec498a7a57_01_step-illustration.webp",
    alt: "Step 1 Illustration",
    title: "Explore our books",
    text: "The first of every month we reveal 6-7 new books. Follow us on socials to keep an eye on any hints we may post.",
  },
  {
    step: "Step #2",
    variant: "bright-pink",
    img: "https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69849eba1f866c516a514ade_02_step-illustration.webp",
    alt: "Step 2 Illustration",
    title: "Build your box",
    text: "Members can order up to 3 books per box. At least one title must be from the current month's selections.",
  },
  {
    step: "Step #3",
    variant: "yellow",
    img: "https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69849ebaea8f91077664d474_03_step-illustration.webp",
    alt: "Step 3 Illustration",
    title: "Check your doorstep",
    text: "Your box is delivered right to your doorstep. This is the best excuse to cancel your Friday night plans.",
  },
  {
    step: "Step #4",
    variant: "periwinkle",
    img: "https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a354b17bd64236c99a93c7e_Step%20Illustration.webp",
    alt: "Step 4 Illustration",
    title: "Share your reads",
    text: "Share your box and tag us @aardvarkbook or participate in the Club discussions in-app!",
  },
];

export default function HowItWorks() {
  return (
    <section className="flow is--inner-clip is--bg-soft-pink">
      <div className="flow__container u-container">
        <div className="flow__inner">
          <header className="flow__header">
            <h2 className="flow__title u-heading-l">How it works</h2>
            <div className="flow__text-wrap">
              <div className="flow__text-outer">
                <p
                  data-handwritten-text-inview=""
                  className="flow__text u-handwritten-regular"
                >
                  Consider us your professional book curator
                </p>
              </div>
            </div>
            <div className="flow__cta">
              <img
                src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/696a059da09e3c123fba6a5a_logo-circle.svg"
                loading="lazy"
                alt="Aardvark Book Club Icon"
                className="flow__cta-logo animate-spin-slow"
              />
              <a
                data-button-alt=""
                data-wf--button-alt--variant="base"
                href="https://app.aardvarkbookclub.com/books"
                target="_blank"
                rel="noopener noreferrer"
                className="button-alt w-inline-block"
              >
                <span className="button-alt__text-wrap">
                  <span className="button-alt__bg" />
                  <span className="button-alt__text-outer">
                    <span data-button-alt-text="" className="button-alt__text">
                      Become a member
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
          </header>

          <div className="flow__content">
            <div data-call-out="" className="flow__list">
              {STEPS.map((step, idx) => (
                <div
                  key={idx}
                  data-call-out-item=""
                  className="flow__list-item"
                >
                  <div
                    data-call-out-child=""
                    data-wf--flow-card--variant={step.variant}
                    className="flow__card transition-transform duration-300 hover:-translate-y-2 hover:rotate-1"
                  >
                    <div className="flow__card-inner">
                      <div className="flow__card-header">
                        <span className="flow__card-header-title u-handwritten-big">
                          {step.step}
                        </span>
                      </div>
                      <div className="flow__card-img-wrap">
                        <img
                          width={720}
                          height={588}
                          alt={step.alt}
                          src={step.img}
                          loading="lazy"
                          className="flow__card-img"
                        />
                      </div>
                      <div className="flow__card-content">
                        <h3 className="flow__card-content-title u-heading-s">
                          {step.title}
                        </h3>
                        <p className="flow__card-content-paragraph u-paragraph-regular">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flow__content-text-wrap">
              <div className="flow__content-text-outer">
                <p
                  data-handwritten-text-inview=""
                  className="flow__text u-handwritten-regular"
                >
                  Consider us your professional book curator
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flow__bg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 1920 1078"
          data-background-animation=""
          className="flow__bg-svg is--desktop"
        >
          <path
            d="M1036.04 224.719c46.68-18.686 94.68-27.593 145.01-17.193 69.48 14.366 110.3 57.983 128.04 125.006 15.96 60.318 6.45 120.498-1.31 180.811-8.29 64.443-17.14 128.943-21.73 193.698-3.4 47.933 9.35 93.628 35.22 135.082 24.6 39.428 58.71 63.776 105.27 70.7 51.26 7.619 100.97-1.424 150.87-11.351 44.59-8.86 89.22-18.234 134.27-23.788 37.99-4.686 76.51-2.359 112.24 14.388 64.95 30.445 87.52 98.718 76.62 164.068-9.87 59.15-42.57 105.15-84.56 145.85-44.84 43.48-98.21 75.46-148.83 111.16-30.84 21.75-60.77 44.41-86.53 71.35H1247.7c35.22-37.78 74.41-71.86 110.25-109.11 18.75-19.49 36.56-40.97 49.88-64.35 26.16-45.95 9.65-92.6-37.47-116.63-29.31-14.95-60.63-23-92.65-29.34-47.63-9.41-95.64-17.46-142.48-29.89-26.81-7.12-53.14-19.24-76.97-33.6-37.72-22.74-50.73-59.621-48.21-102.647 2.46-42.061 19.25-79.708 35.43-117.636 9.87-23.115 19.1-46.499 28.22-69.907 2.34-5.995 3.57-12.517 4.6-18.912 6.58-40.968-12.55-65.234-54.23-62.184-35.208 2.579-69.935 11.611-104.902 17.609-43.082 7.393-85.968 16.846-129.373 21.383-72.784 7.609-140.416-13.554-203.621-47.289-57.69-30.79-113.048-65.891-169.936-98.199-40.136-22.803-82.672-40.545-128.108-49.343-43.977-8.506-87.368-6.74-127.138 17.541-26.209 16.007-41.953 39.592-48.511 69.378-12.397 56.359 4.802 106.985 30.146 156.167 28.004 54.347 66.44 101.409 103.329 149.563 37.221 48.583 74.231 97.305 98.581 154.026 15.151 35.28 25.634 71.86 24.527 110.8-1.931 68.15-36.554 114.5-96.26 144.23-45.75 22.78-95.324 30.65-144.973 39.2-58.87 10.13-118.149 19.35-175.929 34.11-76.784 19.6-104.832 50.54-156.366 104.26l-188.143-192.09c6.548-.9 13.143-1.65 19.782-2.23 64.263-5.7 128.992-6.19 193.515-9.07 59.582-2.68 118.457-8.23 172.797-36.44 68.743-35.69 95.923-102.94 71.734-176.51C47.238 982.71 14 937.57-20.86 893.052c-40.325-51.507-81.776-102.294-119.092-155.941-47.12-67.745-66.267-144.502-59.071-226.985 5.782-66.292 34.986-122.322 81.434-168.708 86.136-86.027 189.43-120.689 309.992-96.782 61.552 12.208 114.972 42.82 165.548 78.705 47.349 33.599 93.841 68.447 141.911 100.971 70.388 47.621 143.971 47.529 215.775 4.92 48.318-28.674 94.065-61.87 139.754-94.725 57.434-41.309 114.359-83.274 180.648-109.788Z"
            fill="currentColor"
            stroke="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
