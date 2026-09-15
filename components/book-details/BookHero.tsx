'use client';

import React from 'react';
import { BookDetails } from '../../data/books/types';
import styles from '../../app/books/[slug]/book-details.module.css';

interface BookHeroProps {
  book: BookDetails;
}

// Organic wavy blob paths — different per mood/color to feel alive
function OrganicBlobs({ color }: { color: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 700"
      preserveAspectRatio="xMidYMid slice"
      className={styles['bd2-hero-blob-svg']}
      aria-hidden="true"
    >
      {/* Large central wavy form */}
      <path
        fill={color}
        opacity="0.55"
        d="M200,150 C280,80 400,200 520,160 C640,120 680,250 760,220 C840,190 900,100 1000,140 C1100,180 1150,80 1200,120 L1440,100 L1440,700 L0,700 Z"
      />
      {/* Right lobe */}
      <ellipse cx="1100" cy="300" rx="280" ry="200" fill={color} opacity="0.4" />
      {/* Left lobe */}
      <ellipse cx="200" cy="400" rx="240" ry="180" fill={color} opacity="0.35" />
      {/* Center connecting blob */}
      <path
        fill={color}
        opacity="0.45"
        d="M400,200 C500,150 650,300 750,280 C850,260 950,180 1050,220 C1150,260 1200,350 1100,420 C1000,490 800,450 650,430 C500,410 350,320 400,200 Z"
      />
    </svg>
  );
}

export default function BookHero({ book }: BookHeroProps) {
  const { title, author, genres, theme, reviews } = book;

  // Use first review for the quote card
  const featuredReview = reviews[0] ?? null;

  // Extract a warm base color from the theme gradient for the hero bg
  const heroBg = theme.heroBackground;

  return (
    <section className={styles['bd2-hero']} style={{ background: heroBg }} aria-label="Book hero">
      {/* Organic blobs */}
      <div className={styles['bd2-hero-blobs']}>
        <OrganicBlobs color={theme.accentColor} />
      </div>

      {/* Runner icon */}
      <div className={styles['bd2-hero-runner']} aria-hidden="true">
        🏃
      </div>

      {/* Central text */}
      <div className={styles['bd2-hero-content']}>
        <div className={styles['bd2-hero-author']}>{author}</div>
        <h1 className={styles['bd2-hero-title']}>{title}</h1>
        {genres[0] && (
          <span className={styles['bd2-hero-genre']}>
            🚀 {genres[0].label}
          </span>
        )}
      </div>

      {/* Overlapping quote card */}
      {featuredReview && (
        <div className={styles['bd2-hero-quote-card']}>
          <div>
            <p className={styles['bd2-hero-quote-text']}>
              &ldquo;{featuredReview.text}&rdquo;
            </p>
            <div className={styles['bd2-hero-quote-attr']}>— {featuredReview.source}</div>
          </div>
          <div className={styles['bd2-hero-quote-logo']}>
            <img
              src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/696179694070e2fa9eca375f_logo.svg"
              alt="Aardvark"
            />
          </div>
        </div>
      )}
    </section>
  );
}
