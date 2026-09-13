"use client";

import React, { useRef } from "react";
import Link from "next/link";
import PopUpEasterEgg from "../ui/PopUpEasterEgg";

interface WinnerBook {
  year: string;
  title: string;
  authorName?: string;
  authorImg?: string;
  cover: string;
  slug?: string;
  isUpcoming?: boolean;
}

const WINNERS: WinnerBook[] = [
  {
    year: "26",
    title: "Next voting round: Fall 2026",
    cover:
      "https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a424bd55394074d40414928_6a424662da0a53b9c2c606e3_isthisacryforhelp2.webp",
    isUpcoming: true,
  },
  {
    year: "25",
    title: "The Buffalo Hunter Hunter (2025 Members' Choice Winner)",
    authorName: "Stephen Graham Jones",
    authorImg:
      "https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a424bd25ff866ea5996cadd_6a4246885e00ecdc18382d1b_thebuffalohunterhunterauthor.webp",
    cover:
      "https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a424bd25ff866ea5996cae2_6a42467a5013b8dca5ff09f8_thebuffalohunterhunterspec2.webp",
    slug: "the-buffalo-hunter-hunter-2025-members-choice-winner",
  },
  {
    year: "24",
    title: "The Reformatory (2024 Members' Choice Winner)",
    authorName: "Tananarive Due",
    authorImg:
      "https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a42443a15d2cf609e34a231_6a424039e86ff5403f03bd23_thereformatoryauthor.webp",
    cover:
      "https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a42443a15d2cf609e34a24c_6a423d476a971a161097ff07_thereformatoryv2.webp",
    slug: "the-reformatory-2024-members-choice-winner",
  },
  {
    year: "23",
    title: "Chain-Gang All-Stars (2023 Members' Choice Winner)",
    authorName: "Nana Kwame Adjei-Brenyah",
    authorImg:
      "https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a4244a5000948e7e39aa539_6a423dc0410a5d97a1248dc4_chain-gangall-starsauthor.webp",
    cover:
      "https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a4244a6000948e7e39aa56e_6a423da669caf660d2c477bb_chaingangallstarsspecial2.webp",
    slug: "chain-gang-all-stars-2023-members-choice-winner",
  },
];

export default function MembersChoice() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "prev" | "next") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "next" ? 400 : -400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      data-emoji-rain-type-2="trophy"
      data-emoji-rain=""
      data-emoji-rain-type-1="party"
      className="choice is--outer-clip is--bg-yellow"
    >
      <div className="choice__container">
        <div className="choice__inner">
          <div className="choice__header">
            <div className="choice__header-container u-container">
              <div className="choice__easter-egg">
                <PopUpEasterEgg variant="right-bottom" />
              </div>
              <div className="choice__header-content">
                <h2 className="choice__title u-heading-l">
                  Members’ Choice Winners
                </h2>
                <p className="choice__paragraph u-paragraph-large">
                  Every year Aardvarkians vote on their favourite reads and we
                  celebrate with a special reprinting. These titles have won our
                  hearts and minds over the last few years.
                </p>
              </div>
            </div>
            <div data-plop-in="" className="choice__visual">
              <img
                src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69d7c9f6062fc8ef7e014217_choice-heart-illustration.svg"
                loading="lazy"
                width={175}
                height={158}
                alt="choice-heart-illustration"
                data-plop-in-item=""
                className="choice__visual-img animate-float"
              />
            </div>
          </div>

          <div className="choice__content">
            <div data-books-slider="" className="choice-slider">
              <div className="choice-slider__collection w-dyn-list">
                <div
                  ref={sliderRef}
                  data-books-slider-wrapper=""
                  role="list"
                  className="choice-slider__list w-dyn-items"
                  style={{
                    display: "flex",
                    overflowX: "auto",
                    scrollSnapType: "x mandatory",
                    gap: "1.5rem",
                    scrollbarWidth: "none",
                    paddingBottom: "1.5rem",
                  }}
                >
                  {WINNERS.map((winner, idx) => (
                    <div
                      key={idx}
                      role="listitem"
                      className="choice-slider__list-item w-dyn-item"
                      style={{ flexShrink: 0, scrollSnapAlign: "start" }}
                    >
                      <article
                        data-books-slider-item=""
                        className="choice-slider__item"
                      >
                        <div className="choice-slider__item-inner">
                          <div className="choice-slider__item-bg">
                            <div className="choice-slider__item-bg-ears">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 44 45"
                                width="100%"
                                className="choice-slider__item-bg-left-ear"
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
                                className="choice-slider__item-bg-right-ear"
                              >
                                <path
                                  fill="currentColor"
                                  d="M19.388.879c.667-.771 1.647-1.018 2.559-.807.912.21 1.682.956 1.926 1.861C34.595 38.09 25.79 69.237 21.823 80h-4.188c-.17-4.22-2.739-13.318-10.975-22.064-8.493-9.099-8.88-21.913-1.063-37.23C11.221 9.603 19.091 1.266 19.388.879Z"
                                />
                              </svg>
                            </div>
                          </div>

                          <div className="choice-slider__item-container">
                            <div className="choice-slider__item-cover">
                              <img
                                src={winner.cover}
                                loading="lazy"
                                alt={winner.title}
                                className="choice-slider__item-img"
                              />
                            </div>

                            {winner.authorImg && (
                              <div className="choice-slider__author">
                                <img
                                  src={winner.authorImg}
                                  loading="lazy"
                                  width={144}
                                  height={144}
                                  alt={winner.authorName || "Author"}
                                  className="choice-slider__author-img"
                                />
                              </div>
                            )}

                            <div className="choice-slider__year">
                              <div className="choice-slider__year-text-wrap">
                                <span className="choice-slider__year-text u-heading-l">
                                  20
                                </span>
                                <span className="choice-slider__year-text u-heading-l">
                                  {winner.year}
                                </span>
                              </div>
                              <img
                                src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69d9056988fcfdf2b0a8bfa2_orange-eyecatcher.svg"
                                loading="lazy"
                                width={200}
                                height={200}
                                alt="orange-eyecatcher"
                                className="choice-slider__year-img animate-spin-slow"
                              />
                            </div>

                            {winner.isUpcoming && (
                              <div className="choice-slider__next-voting">
                                <span className="choice-slider__next-voting-text u-paragraph-regular font-bold">
                                  Next voting round: Fall 2026
                                </span>
                              </div>
                            )}
                          </div>

                          {winner.slug && (
                            <Link
                              aria-label={`Read more about ${winner.title}`}
                              href={`/books/${winner.slug}`}
                              className="choice-slider__item-link w-inline-block"
                            />
                          )}
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              </div>

              <div
                data-books-slider-controls=""
                className="books-slider__controls is--choice-slider"
              >
                <button
                  type="button"
                  aria-label="Previous Slide"
                  data-books-slider-control=""
                  className="books-slider__controls-button is--previous"
                  onClick={() => scrollSlider("prev")}
                >
                  <span className="books-slider__controls-button-bg" />
                  <span className="books-slider__controls-button-icon-wrap">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 14 13"
                      fill="none"
                      aria-hidden="true"
                      className="books-slider__controls-button-icon"
                    >
                      <path
                        d="M13.58 5.66v.845l-5.994 5.66-1.71-2.063a61.427 61.427 0 0 1 4.265-2.988l-.02-.078c-1.828.196-4.107.294-6.387.294H0V4.835h3.734c2.28 0 4.56.098 6.387.294l.02-.059a67.638 67.638 0 0 1-4.265-3.006L7.586 0l5.994 5.66Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </button>
                <button
                  type="button"
                  aria-label="Next Slide"
                  data-books-slider-control=""
                  className="books-slider__controls-button is--next"
                  onClick={() => scrollSlider("next")}
                >
                  <span className="books-slider__controls-button-bg" />
                  <span className="books-slider__controls-button-icon-wrap">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 14 13"
                      fill="none"
                      aria-hidden="true"
                      className="books-slider__controls-button-icon"
                    >
                      <path
                        d="M13.58 5.66v.845l-5.994 5.66-1.71-2.063a61.427 61.427 0 0 1 4.265-2.988l-.02-.078c-1.828.196-4.107.294-6.387.294H0V4.835h3.734c2.28 0 4.56.098 6.387.294l.02-.059a67.638 67.638 0 0 1-4.265-3.006L7.586 0l5.994 5.66Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
