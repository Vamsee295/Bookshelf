"use client";

import React, { useRef } from "react";
import Link from "next/link";

interface Book {
  id: string;
  slug: string;
  title: string;
  author: string;
  bgColor: string;
  description: string;
  cover: string;
  srcset?: string;
  tags: Array<{ name: string; bg: string; color: string }>;
}

const BOOKS_DATA: Book[] = [
  {
    id: "mazywood",
    slug: "mazywood",
    title: "Mazywood",
    author: "Tananarive Due",
    bgColor: "#32225f",
    description:
      "All the Sinners Bleed meets Erasure in this literary thriller from the award-winning author of The Reformatory following the grandson of a famous Black actress who returns to his grandmother’s cabin retreat in the California mountains only to encounter the legacy of her rage born in Old Hollywood.",
    cover:
      "https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a95dd114588ec2d7b5f3852_earlymazywood.png",
    srcset:
      "https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a95dd114588ec2d7b5f3852_earlymazywood-p-500.png 500w, https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a95dd114588ec2d7b5f3852_earlymazywood.png 643w",
    tags: [
      { name: "Historical", bg: "#ff9d00", color: "black" },
      { name: "Horror", bg: "#000000", color: "white" },
      { name: "Includes a Dog", bg: "#e62701", color: "white" },
    ],
  },
  {
    id: "crone",
    slug: "crone",
    title: "Crone",
    author: "Keith Rosson",
    bgColor: "#6abf4c",
    description:
      "A haunting, fearsome story of a father searching for his missing daughter and finding darkness—both human and not—at every turn, from the “mind-blowingly good” (Stephen King) author of Coffin Moon and Fever House.",
    cover:
      "https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a95de8306c788ece7de135f_crone.png",
    srcset:
      "https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a95de8306c788ece7de135f_crone-p-500.png 500w, https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a95de8306c788ece7de135f_crone.png 643w",
    tags: [{ name: "Horror", bg: "#000000", color: "white" }],
  },
  {
    id: "thesecretdinner",
    slug: "the-secret-dinner",
    title: "The Secret Dinner",
    author: "Raphael Montes",
    bgColor: "#000000",
    description:
      "Four childhood friends, eager for a taste of city life, swap rural Brazil for an apartment in Copacabana, Rio. But they have no idea of the fate that awaits them there…",
    cover:
      "https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a95dfdce3d0286b64aa3e9c_thesecretdinner.png",
    srcset:
      "https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a95dfdce3d0286b64aa3e9c_thesecretdinner-p-500.png 500w, https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a95dfdce3d0286b64aa3e9c_thesecretdinner.png 643w",
    tags: [
      { name: "Translated", bg: "#b6beff", color: "black" },
      { name: "Horror", bg: "#000000", color: "white" },
      { name: "Thriller", bg: "#3d3195", color: "white" },
    ],
  },
  {
    id: "blacktail",
    slug: "blacktail",
    title: "Blacktail",
    author: "Scott Hawkins",
    bgColor: "#c13a1f",
    description:
      "The long-awaited second novel from the author of the cult hit The Library at Mount Char, a one-of-a-kind dark fantasy in which a wolf sets out on an epic journey of revenge.",
    cover:
      "https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a95e0dc6d550cec545ea990_blacktail.png",
    srcset:
      "https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a95e0dc6d550cec545ea990_blacktail-p-500.png 500w, https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a95e0dc6d550cec545ea990_blacktail.png 643w",
    tags: [
      { name: "Fantasy", bg: "#9e81e4", color: "white" },
      { name: "Includes a Dog", bg: "#e62701", color: "white" },
      { name: "Includes a Cat", bg: "#ffd2b6", color: "black" },
    ],
  },
  {
    id: "scion",
    slug: "scion",
    title: "Scion",
    author: "James Islington",
    bgColor: "#00102c",
    description:
      "John Wick meets Ghost in the Shell in this fast-paced cyberpunk thriller by the #1 New York Times bestselling author of The Will of the Many and The Strength of the Few.",
    cover:
      "https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a95e1af249a44c6440815ef_scion.png",
    srcset:
      "https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a95e1af249a44c6440815ef_scion-p-500.png 500w, https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a95e1af249a44c6440815ef_scion.png 643w",
    tags: [{ name: "Sci-Fi", bg: "#00e500", color: "black" }],
  },
  {
    id: "fruitfly",
    slug: "fruit-fly",
    title: "Fruit Fly",
    author: "Various",
    bgColor: "#f26b22",
    description:
      "Go gay. Go sad. Go dark. A washed-up author will stop at nothing to claw her way back to relevancy—even if it means appropriating a young gay man’s tragic story.",
    cover:
      "https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a95e2a5395f8a9419ddc227_fruitfly.png",
    srcset:
      "https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a95e2a5395f8a9419ddc227_fruitfly-p-500.png 500w, https://cdn.prod.website-files.com/69a33078e92fb49d85319481/6a95e2a5395f8a9419ddc227_fruitfly.png 643w",
    tags: [
      { name: "Literary", bg: "#71002e", color: "white" },
      { name: "LGBTQIA+", bg: "#e6ff2b", color: "black" },
      { name: "Thriller", bg: "#3d3195", color: "white" },
      { name: "Satire", bg: "#897400", color: "white" },
    ],
  },
];

export default function SeptBooks() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "prev" | "next") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "next" ? 400 : -400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="books is--bg-white">
      <div className="books__container">
        <div className="books__inner">
          <div className="books__header">
            <div className="books__header-container u-container">
              <div className="books__header-content">
                <h2 className="books__title u-heading-l">Our Sept books</h2>
                <p className="books__paragraph u-paragraph-large">
                  We drop new books on the 1st of every month. Call us creatures
                  of habit.
                </p>
              </div>
            </div>
            <div className="books__text-wrap">
              <div className="books__text-outer">
                <p
                  data-handwritten-text-inview=""
                  className="book__text u-handwritten-regular"
                >
                  Discover hidden gems and buzzy new releases
                </p>
              </div>
            </div>
          </div>

          <div className="books__content">
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <div data-books-slider="" className="books-slider">
                    <div
                      data-books-slider-controls=""
                      className="books-slider__controls home"
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

                    <div className="books-slider__collection w-dyn-list">
                      <div
                        ref={sliderRef}
                        data-books-slider-wrapper=""
                        role="list"
                        className="books-slider__list w-dyn-items"
                        style={{
                          display: "flex",
                          overflowX: "auto",
                          scrollSnapType: "x mandatory",
                          gap: "1.5rem",
                          scrollbarWidth: "none",
                          paddingBottom: "1.5rem",
                        }}
                      >
                        {BOOKS_DATA.map((book) => (
                          <div
                            key={book.id}
                            data-check-contrast=""
                            role="listitem"
                            className="books-slider__list-item w-dyn-item"
                            style={{ flexShrink: 0, scrollSnapAlign: "start" }}
                          >
                            <article
                              data-books-slider-item=""
                              className="books-slider__item"
                            >
                              <div className="books-slider__item-inner">
                                <div
                                  data-check-contrast-bg=""
                                  style={{ backgroundColor: book.bgColor }}
                                  className="books-slider__item-bg"
                                >
                                  <div
                                    style={{ color: book.bgColor }}
                                    className="books-slider__item-bg-ears"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 44 45"
                                      width="100%"
                                      className="books-slider__item-bg-left-ear"
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
                                      className="books-slider__item-bg-right-ear"
                                    >
                                      <path
                                        fill="currentColor"
                                        d="M19.388.879c.667-.771 1.647-1.018 2.559-.807.912.21 1.682.956 1.926 1.861C34.595 38.09 25.79 69.237 21.823 80h-4.188c-.17-4.22-2.739-13.318-10.975-22.064-8.493-9.099-8.88-21.913-1.063-37.23C11.221 9.603 19.091 1.266 19.388.879Z"
                                      />
                                    </svg>
                                  </div>
                                  <div
                                    style={{ backgroundColor: book.bgColor }}
                                    className="books-slider__item-bg-bottom"
                                  />
                                  <div className="books-slider__item-cta">
                                    <div className="button-alt">
                                      <span className="button-alt__text-wrap">
                                        <span className="button-alt__bg" />
                                        <span className="button-alt__text-outer">
                                          <span className="button-alt__text">
                                            Read more
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
                                    </div>
                                  </div>
                                </div>

                                <div className="books-slider__item-container">
                                  <div className="books-slider__item-cover">
                                    <img
                                      src={book.cover}
                                      loading="lazy"
                                      alt={book.title}
                                      sizes="100vw"
                                      srcSet={book.srcset}
                                      className="books-slider__item-img"
                                    />
                                  </div>
                                  <div className="books-slider__item-content">
                                    <div className="books-slider__item-text">
                                      <h3
                                        data-check-contrast-text=""
                                        className="books-slider__item-title u-heading-s text-white"
                                      >
                                        {book.title}
                                      </h3>
                                      <div
                                        data-check-contrast-text=""
                                        className="books-slider__item-paragraph u-paragraph-small w-richtext text-white opacity-90"
                                      >
                                        <p>{book.description}</p>
                                      </div>
                                    </div>
                                    <div className="books-slider__genre-list-wrap w-dyn-list">
                                      <div
                                        role="list"
                                        className="books-slider__genre-list w-dyn-items"
                                      >
                                        {book.tags.map((tag, idx) => (
                                          <div
                                            key={idx}
                                            role="listitem"
                                            className="books-slider__genre-list-item w-dyn-item"
                                          >
                                            <span
                                              style={{
                                                backgroundColor: tag.bg,
                                                color: tag.color,
                                              }}
                                              className="tag-small"
                                            >
                                              <span className="tag-small__text">
                                                {tag.name}
                                              </span>
                                            </span>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Link
                                  aria-label={`Read more about ${book.title}`}
                                  href={`/books/${book.slug}`}
                                  className="books-slider__item-link w-inline-block"
                                />
                              </div>
                            </article>
                          </div>
                        ))}
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
