'use client';

import React from 'react';
import { BookDetails } from '../../data/books/types';
import styles from '../../app/books/[slug]/book-details.module.css';

interface BookHeroProps {
  book: BookDetails;
}

export default function BookHero({ book }: BookHeroProps) {
  const { title, author, month, genres, theme, cover } = book;

  return (
    <section className={styles['bd-hero']} aria-label="Book hero">
      {/* Organic peach/warm background */}
      <div className={styles['bd-hero-bg']} style={{ background: theme.heroBackground }}>
        {/* Decorative organic blob SVG */}
        <div className={styles['bd-hero-blobs']}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 620"
            preserveAspectRatio="xMidYMid slice"
            className={styles['bd-hero-blob-svg']}
          >
            <path
              fill="rgba(255,255,255,0.08)"
              d="M0,200 C250,350 500,50 750,220 C1000,390 1200,100 1440,280 L1440,620 L0,620 Z"
            />
            <path
              fill="rgba(255,255,255,0.05)"
              d="M0,400 C350,250 600,500 900,350 C1200,200 1350,450 1440,300 L1440,620 L0,620 Z"
            />
            <ellipse
              cx="200" cy="100"
              rx="180" ry="120"
              fill="rgba(255,255,255,0.06)"
            />
            <ellipse
              cx="1200" cy="80"
              rx="140" ry="90"
              fill="rgba(0,0,0,0.06)"
            />
          </svg>
        </div>

        {/* Content */}
        <div className={styles['bd-hero-content']}>
          <div className={styles['bd-hero-month']}>{month}</div>
          <div className={styles['bd-hero-author']}>{author}</div>
          <h1 className={styles['bd-hero-title']}>{title}</h1>

          {/* Genre pills */}
          <div className={styles['bd-hero-genres']}>
            {genres.map((g) => (
              <span
                key={g.label}
                className={styles['bd-hero-genre-pill']}
                style={{ backgroundColor: g.bg, color: g.color }}
              >
                {g.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Overlapping book cover */}
      <div className={styles['bd-hero-cover-wrap']}>
        <img
          src={cover}
          alt={`${title} book cover`}
          className={styles['bd-hero-cover']}
          style={{ boxShadow: theme.coverShadow }}
          loading="eager"
        />
      </div>
    </section>
  );
}
