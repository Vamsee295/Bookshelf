"use client";

import React from "react";

export default function ExclusiveSection() {
  return (
    <section className="exclusive is--bg-white">
      <div className="exclusive__container">
        <div className="exclusive__inner">
          <div className="exclusive__header">
            <div className="exclusive__header-container u-container">
              <div className="exclusive__header-content">
                <h2 className="exclusive__title u-heading-l">
                  Aardvark Exclusive
                </h2>
                <p className="exclusive__paragraph u-paragraph-large">
                  Horror anthology by Aardvark authors.
                  <br />
                  No, you can&apos;t get it anywhere else.
                </p>
              </div>
            </div>
          </div>

          <div className="exclusive__content">
            <div data-exclusive-slider="" className="exclusive-slider">
              <div className="exclusive-slider__collection w-dyn-list">
                <div
                  data-exclusive-slider-wrapper=""
                  role="list"
                  className="exclusive-slider__list w-dyn-items"
                >
                  <div
                    role="listitem"
                    className="exclusive-slider__list-item w-dyn-item"
                  >
                    <div
                      data-exclusive-slider-item=""
                      style={{
                        borderColor: "#080909",
                        backgroundColor: "#feb6fa",
                      }}
                      className="exclusive-slider__item-outer shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
                    >
                      <article className="exclusive-slider__item">
                        <div className="exclusive-slider__item-inner">
                          <div className="books-slider__review">
                            <div className="books-slider__review-content">
                              <span className="books-slider__review-title font-bold">
                                Goodreads Rating
                              </span>
                              <span className="books-slider__review-number text-xl font-extrabold">
                                4.0
                              </span>
                            </div>
                            <img
                              src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69dfba516e0793fc6d354036_review-star.svg"
                              loading="lazy"
                              width={147}
                              height={141}
                              alt="review-star"
                              className="books-slider__review-img animate-spin-slow"
                            />
                          </div>

                          <div
                            style={{ backgroundColor: "#080909" }}
                            className="books-slider__item-bg"
                          >
                            <div
                              style={{ backgroundColor: "#080909" }}
                              className="books-slider__item-bg-bottom is--exclusive-slider"
                            />
                            <div className="books-slider__item-cta is--exclusive-slider">
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
                                    <span
                                      data-button-alt-text=""
                                      className="button-alt__text"
                                    >
                                      Add to box!
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

                          <div className="books-slider__item-container">
                            <div className="books-slider__item-cover">
                              <img
                                src="https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a424be60e9268be5e54b22e_6a4245f0000948e7e39bb2eb_onebadnight2.webp"
                                loading="lazy"
                                alt="One Bad Night &amp; Other Stories"
                                className="books-slider__item-img"
                              />
                            </div>
                            <div className="books-slider__item-content">
                              <div className="books-slider__item-text">
                                <h3 className="books-slider__item-title u-heading-s white-font text-white">
                                  One Bad Night &amp; Other Stories
                                </h3>
                                <div className="books-slider__item-paragraph u-paragraph-small white-font w-richtext text-white opacity-90">
                                  <p>
                                    Aardvark Book Club launched in October 2022,
                                    and we’re celebrating our three-year
                                    anniversary with this original horror
                                    anthology featuring past 8 Aardvark
                                    authors.
                                  </p>
                                </div>
                              </div>
                              <div className="books-slider__genre-list-wrap w-dyn-list">
                                <div
                                  role="list"
                                  className="books-slider__genre-list w-dyn-items"
                                >
                                  <div
                                    role="listitem"
                                    className="books-slider__genre-list-item w-dyn-item"
                                  >
                                    <span
                                      style={{
                                        backgroundColor: "#8ef1fd",
                                        color: "black",
                                      }}
                                      className="tag-small"
                                    >
                                      <span className="tag-small__text">
                                        Aardvark Original
                                      </span>
                                    </span>
                                  </div>
                                  <div
                                    role="listitem"
                                    className="books-slider__genre-list-item w-dyn-item"
                                  >
                                    <span
                                      style={{
                                        backgroundColor:
                                          "hsla(0, 0.00%, 0.00%, 1.00)",
                                        color: "white",
                                      }}
                                      className="tag-small"
                                    >
                                      <span className="tag-small__text">
                                        Horror
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>

                      <div className="exclusive-slider__add-on">
                        <div className="exclusive-slider__authors">
                          <h3 className="exclusive-slider__authors-title font-bold text-sm uppercase tracking-wider">
                            Authors
                          </h3>
                          <p
                            data-exclusive-slider-authors=""
                            className="exclusive-slider__authors-paragraph text-sm mt-1"
                          >
                            Kay Chronister, Del Sandeen, Kylie Lee Baker, Rachel
                            Harrison, CJ Leede, Jennifer Thorne, S.A. Barnes,
                            Stephen Graham Jones
                          </p>
                        </div>
                        <div className="exclusive-slider__quote-01">
                          <p className="exclusive-slider__handwritten-text u-handwritten-regular">
                            &quot;An absolutely phenomenal anthology of short
                            stories from some of the best voices in horror right
                            now!&quot; - Trisha
                          </p>
                        </div>
                        <div className="exclusive-slider__quote-02">
                          <p className="exclusive-slider__handwritten-text u-handwritten-regular is--quote-02">
                            &quot;Not a bad story in the bunch. “One Bad Night”
                            wrecked me.&quot; - Brittany
                          </p>
                        </div>
                        <div className="exclusive-slider__emojis flex gap-2">
                          <img
                            src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69dfb2530a7e746f9dfb8a6b_exclusive-slider-icon-01.webp"
                            loading="lazy"
                            width={103}
                            height={103}
                            alt="exclusive-slider-icon-01"
                            className="exclusive-slider__emoji-01 animate-float"
                          />
                          <img
                            src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69dfb2527288cd815f477968_exclusive-slider-icon-03.webp"
                            loading="lazy"
                            width={103}
                            height={103}
                            alt="exclusive-slider-icon-03"
                            className="exclusive-slider__emoji-02 animate-float-slow"
                          />
                          <img
                            src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69dfb2526ae24d54399a03d8_exclusive-slider-icon-02.webp"
                            loading="lazy"
                            width={142}
                            height={142}
                            alt="exclusive-slider-icon-02"
                            className="exclusive-slider__emoji-03 animate-float"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
