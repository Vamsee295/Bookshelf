'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { BookDetails } from '../../data/books/types';
import styles from '../../app/books/[slug]/book-details.module.css';

interface SimilarTitlesProps {
  books: BookDetails[]; // already resolved from slugs
}

const CARD_WIDTH = 220 + 16; // card width + gap

export default function SimilarTitles({ books }: SimilarTitlesProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  if (books.length === 0) return null;

  const maxOffset = Math.max(0, books.length * CARD_WIDTH - (trackRef.current?.parentElement?.clientWidth ?? 800));

  const scroll = (dir: 'prev' | 'next') => {
    setOffset((prev) => {
      const step = CARD_WIDTH * 2;
      if (dir === 'next') return Math.min(prev + step, maxOffset);
      return Math.max(prev - step, 0);
    });
  };

  return (
    <section className={styles['bd-similar-section']} aria-label="Similar titles">
      <div className={styles['bd-similar-header']}>
        <h2 className={styles['bd-similar-heading']}>Similar titles</h2>
        <div className={styles['bd-similar-controls']}>
          <button
            className={styles['bd-similar-btn']}
            onClick={() => scroll('prev')}
            aria-label="Scroll carousel left"
          >
            ←
          </button>
          <button
            className={styles['bd-similar-btn']}
            onClick={() => scroll('next')}
            aria-label="Scroll carousel right"
          >
            →
          </button>
        </div>
      </div>

      <div className={styles['bd-similar-track-wrap']}>
        <div
          ref={trackRef}
          className={styles['bd-similar-track']}
          style={{ transform: `translateX(-${offset}px)` }}
          role="list"
        >
          {books.map((book) => (
            <Link
              key={book.slug}
              href={`/books/${book.slug}`}
              className={styles['bd-similar-card']}
              role="listitem"
              aria-label={`${book.title} by ${book.author}`}
            >
              <div className={styles['bd-similar-cover-wrap']}>
                <div
                  className={styles['bd-similar-cover-bg']}
                  style={{ backgroundColor: book.theme.heroBackground.split('(')[1]?.split(',')[0]?.replace('160deg', '') || '#ccc' }}
                />
                <img
                  src={book.cover}
                  alt={book.title}
                  className={styles['bd-similar-cover']}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className={styles['bd-similar-body']}>
                <div className={styles['bd-similar-title']}>{book.title}</div>
                <div className={styles['bd-similar-author']}>{book.author}</div>
                <div className={styles['bd-similar-tags']}>
                  {book.genres.slice(0, 2).map((g) => (
                    <span
                      key={g.label}
                      className={styles['bd-similar-tag']}
                      style={{ backgroundColor: g.bg, color: g.color }}
                    >
                      {g.label}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
