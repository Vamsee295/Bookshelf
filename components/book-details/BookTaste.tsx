'use client';

import React from 'react';
import { BookTheme } from '../../data/books/types';
import styles from '../../app/books/[slug]/book-details.module.css';

interface BookTasteProps {
  excerpt: string;
  theme: BookTheme;
  title: string;
}

export default function BookTaste({ excerpt, theme, title }: BookTasteProps) {
  return (
    <section className={styles['bd-taste-section']} aria-label="Book excerpt — get a taste">
      {/* Organic decorative background */}
      <div className={styles['bd-taste-blobs']} style={{ background: theme.tasteBg }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 500"
          preserveAspectRatio="xMidYMid slice"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          aria-hidden="true"
        >
          <path
            fill="rgba(255,255,255,0.06)"
            d="M0,180 C200,300 500,80 800,200 C1100,320 1150,100 1200,220 L1200,500 L0,500 Z"
          />
          <path
            fill="rgba(255,255,255,0.04)"
            d="M0,350 C250,200 600,400 900,250 C1100,150 1200,320 1200,350 L1200,500 L0,500 Z"
          />
          <ellipse cx="100" cy="80" rx="120" ry="80" fill="rgba(255,255,255,0.06)" />
          <ellipse cx="1100" cy="420" rx="100" ry="60" fill="rgba(0,0,0,0.06)" />
        </svg>
      </div>

      <div className={styles['bd-taste-inner']}>
        <h2 className={styles['bd-taste-heading']}>Get a taste</h2>

        {/* Styled book page card */}
        <div className={styles['bd-taste-card']}>
          <p className={styles['bd-taste-text']} aria-label={`Excerpt from ${title}`}>
            {excerpt}
          </p>
        </div>
      </div>
    </section>
  );
}
