'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { BookDetails } from '../../data/books/types';
import styles from '../../app/books/[slug]/book-details.module.css';

interface SimilarTitlesProps {
  books: BookDetails[];
}

const CARD_WIDTH = 220 + 20; // width + gap

export default function SimilarTitles({ books }: SimilarTitlesProps) {
  const [offset, setOffset] = useState(0);
  const outerRef = useRef<HTMLDivElement>(null);

  if (books.length === 0) return null;

  const maxOffset = Math.max(0, books.length * CARD_WIDTH - (outerRef.current?.clientWidth ?? 900));

  const scroll = (dir: 'prev' | 'next') => {
    setOffset((prev) => {
      const step = CARD_WIDTH * 2;
      if (dir === 'next') return Math.min(prev + step, maxOffset);
      return Math.max(prev - step, 0);
    });
  };

  return (
    <section className={styles['bd2-similar-section']} aria-label="Similar titles">
      <div className={styles['bd2-similar-header']}>
        <h2 className={styles['bd2-similar-heading']}>Similar titles</h2>
        <div className={styles['bd2-similar-controls']}>
          <button
            className={styles['bd2-similar-btn']}
            onClick={() => scroll('prev')}
            aria-label="Previous"
            disabled={offset === 0}
          >
            ←
          </button>
          <button
            className={styles['bd2-similar-btn']}
            onClick={() => scroll('next')}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>

      <div className={styles['bd2-similar-track-outer']} ref={outerRef}>
        <div
          className={styles['bd2-similar-track']}
          style={{ transform: `translateX(-${offset}px)` }}
          role="list"
        >
          {books.map((book) => (
            <Link
              key={book.slug}
              href={`/books/${book.slug}`}
              className={styles['bd2-similar-card']}
              role="listitem"
            >
              {/* Large cover image matching reference */}
              <img
                src={book.cover}
                alt={book.title}
                className={styles['bd2-similar-cover']}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  // Fallback to colored block if image fails
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const next = target.nextElementSibling as HTMLElement;
                  if (next) next.style.display = 'flex';
                }}
              />
              {/* Fallback block */}
              <div
                className={styles['bd2-similar-cover-fallback']}
                style={{ background: book.theme.heroBackground, display: 'none' }}
              >
                {book.title}
              </div>

              {/* Genre tags */}
              <div className={styles['bd2-similar-tags']}>
                {book.genres.slice(0, 3).map((g) => (
                  <span
                    key={g.label}
                    className={styles['bd2-similar-tag']}
                    style={{ backgroundColor: g.bg, color: g.color }}
                  >
                    {g.label}
                  </span>
                ))}
              </div>

              <div className={styles['bd2-similar-title']}>{book.title}</div>
              <div className={styles['bd2-similar-author-name']}>{book.author}</div>
              <div className={styles['bd2-similar-snippet']}>
                {book.description.slice(0, 100)}…
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
