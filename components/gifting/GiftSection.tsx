"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";

export default function GiftSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textPathRef = useRef<SVGTextPathElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !textPathRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(1, 1 - rect.top / (window.innerHeight + rect.height))
      );
      // Move text smoothly along curve
      const offset = 80 - progress * 60;
      textPathRef.current.setAttribute("startOffset", `${offset}%`);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} data-tagline-curve="" className="gift">
      <header className="tagline-curve">
        <div className="tagline-curve__header">
          <h2
            data-tagline-curve-reference=""
            className="tagline-curve__title u-screen-reader"
          >
            A gift outside of the box
          </h2>
        </div>
        <div className="tagline-curve__wrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1920 288"
            fill="none"
            data-tagline-curve-svg=""
            className="tagline-curve__svg"
          >
            <path
              d="M-165.5 288 C33.686 173 810 0 1304 0 C1797.99 0 2262.5 178.181 2741.5 272"
              id="gift-path"
              stroke="none"
            />
            <text
              id="gift-text"
              data-tagline-curve-text=""
              className="font-bold text-3xl fill-current text-purple-900"
            >
              <textPath
                ref={textPathRef}
                id="gift-textpath"
                href="#gift-path"
                startOffset="50%"
                textAnchor="middle"
              >
                A gift outside of the box
              </textPath>
            </text>
          </svg>
        </div>
      </header>

      <div className="gift__container u-container">
        <div data-gift="" className="gift__inner">
          <div className="gift__content">
            <div className="gift__content-top">
              <p className="gift__content-paragraph u-paragraph-medium">
                Gift a subscription and they can pick their own books. No spying
                on shelves needed. Order today and instantly receive an e-gift
                card to print out or forward. If you’re lucky, they might let
                you borrow a copy.
              </p>
              <Link
                data-button-alt=""
                data-wf--button-alt--variant="base"
                href="/gifting"
                className="button-alt w-inline-block"
              >
                <span className="button-alt__text-wrap">
                  <span className="button-alt__bg" />
                  <span className="button-alt__text-outer">
                    <span data-button-alt-text="" className="button-alt__text">
                      Shop gifts!
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
              </Link>
            </div>

            <div className="gift__content-bottom">
              <div className="gift__content-handwritten-wrap">
                <div className="gift__content-handwritten-outer">
                  <p
                    data-handwritten-text-inview=""
                    className="gift__content-handwritten u-handwritten-regular"
                  >
                    Mentioned by
                  </p>
                </div>
              </div>
              <div className="gift__content-box-wrap">
                <div className="gift__content-box">
                  <img
                    src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69b9b566693a6633673acc40_logo-pw.webp"
                    loading="lazy"
                    width={104}
                    height={104}
                    alt="logo-pw"
                    className="gift__content-box-img"
                  />
                </div>
                <div className="gift__content-box">
                  <img
                    src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69b9b5b7ac5a698bb7f76e69_logo-msnbc.webp"
                    loading="lazy"
                    width={104}
                    height={104}
                    alt="logo-msnbc"
                    className="gift__content-box-img"
                  />
                </div>
                <div className="gift__content-box">
                  <img
                    src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69b9b5c57abe05306fcadf78_logo-book-riot.webp"
                    loading="lazy"
                    width={104}
                    height={104}
                    alt="logo-book-riot"
                    className="gift__content-box-img"
                  />
                </div>
                <div className="gift__content-box">
                  <img
                    src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69b9b5d24cc9818e2945bf06_logo-travel-leisure.webp"
                    loading="lazy"
                    width={104}
                    height={104}
                    alt="logo-travel-leisure"
                    className="gift__content-box-img"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="gift__visual">
            <img
              className="gift__visual-img transition-transform duration-700 hover:scale-105"
              src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69b9afc474f523151b7c0941_package-visual.webp"
              width={630}
              height={789}
              alt="Aardvark Book Club Box"
              data-gift-item=""
              sizes="(max-width: 767px) 100vw, 630px"
              loading="lazy"
              srcSet="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69b9afc474f523151b7c0941_package-visual-p-500.webp 500w, https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69b9afc474f523151b7c0941_package-visual-p-800.webp 800w, https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69b9afc474f523151b7c0941_package-visual-p-1080.webp 1080w, https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69b9afc474f523151b7c0941_package-visual.webp 1260w"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
