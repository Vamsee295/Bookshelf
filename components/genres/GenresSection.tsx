"use client";

import React, { useState } from "react";
import PopUpEasterEgg from "../ui/PopUpEasterEgg";

const GENRES = [
  "Horror",
  "Science Fiction",
  "Romance",
  "Thriller",
  "Literary Fiction",
  "Fantasy",
  "Gothic Fiction",
  "Historical Fiction",
  "Magical Realism",
  "Contemporary Fiction",
  "and more!",
];

const GENRE_COVERS = [
  "https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a316546fcc3632be3a0f631_japanesegothic.webp",
  "https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a316572391c18aa5ca121b3_saltcrop-350x538.webp",
  "https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31658aa896f279bb1b1761_starshipped-350x538.webp",
  "https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a3165abaf88f7e3504d41e2_adrift-350x538.webp",
  "https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a3165c03a6358bb05f283c8_dearmonicalewinsky.webp",
  "https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a3165ee2ca8f8e5f54f8384_theredwinter-350x538.webp",
  "https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a316608338869b1a00104ab_spoiledmilk-350x538.webp",
  "https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31661e8c0a3cf2c071fa24_oursisterskeeper.webp",
  "https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a316635dba5fe3b394caeab_soundslikelove-1-350x538.webp",
  "https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31665934faab6442519ffe_lovebythebook.webp",
  "https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6a31cc1f142c8b52680233ed_girlsgirlold.webp",
];

export default function GenresSection() {
  const [activeGenreIndex, setActiveGenreIndex] = useState(0);

  return (
    <section data-genre-interaction="" className="genre is--bright-pink">
      <div className="genre__container u-container">
        <div className="genre__inner">
          <header className="genre__header">
            <h2 className="genre__title">Choose from</h2>
            <div className="genre__text-wrap">
              <div className="genre__text-outer">
                <p
                  data-handwritten-text-inview=""
                  className="genre__text u-handwritten-regular"
                >
                  We&apos;ve got a book for every kind of reader
                </p>
              </div>
            </div>
          </header>

          <div className="genre__list-wrap">
            <ul
              data-genre-interaction-list=""
              role="list"
              className="genre__list w-list-unstyled"
            >
              {GENRES.map((genre, idx) => (
                <li
                  key={genre}
                  data-genre-interaction-item=""
                  className={`genre__list-item ${
                    activeGenreIndex === idx ? "is--active" : ""
                  }`}
                  onMouseEnter={() => setActiveGenreIndex(idx)}
                >
                  <div
                    className={`genre__link cursor-pointer ${
                      genre.includes("Contemporary") ? "has--word-break" : ""
                    }`}
                  >
                    <span className="genre__link-default">{genre}</span>
                    <span className="genre__link-hover">{genre}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div
              data-genre-interaction-holding=""
              className="genre__holding relative"
            >
              <div data-genre-interaction-scope="" className="genre__scope">
                <div
                  data-genre-interaction-holder=""
                  className="genre__holder transition-transform duration-500"
                  style={{
                    transform: `translateY(-${
                      (activeGenreIndex % GENRE_COVERS.length) * 12
                    }px) rotate(${((activeGenreIndex % 5) - 2) * 2}deg)`,
                  }}
                >
                  <div data-genre-interaction-box="" className="genre__box">
                    {GENRE_COVERS.map((cover, idx) => (
                      <img
                        key={idx}
                        src={cover}
                        loading="lazy"
                        width={408}
                        height={629}
                        alt="book cover"
                        className={`genre__img transition-opacity duration-300 ${
                          activeGenreIndex % GENRE_COVERS.length === idx
                            ? "opacity-100 scale-105 z-10 shadow-2xl"
                            : "opacity-40 scale-95"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="genre__easter-egg">
            <PopUpEasterEgg variant="right" />
          </div>
        </div>
      </div>
    </section>
  );
}
