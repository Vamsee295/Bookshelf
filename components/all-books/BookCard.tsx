'use client';

import React from 'react';
import { AllBook } from '../../data/allBooksData';
import styles from '../../app/all-books/all-books.module.css';

interface BookCardProps {
  book: AllBook;
}

export default function BookCard({ book }: BookCardProps) {
  const href = book.slug ? `/books/${book.slug}` : `https://www.bookorbitbookclub.com/books/${book.id}`;

  return (
    <a
      href={href}
      className={styles['ab-book-card']}
      aria-label={`Read more about ${book.title}`}
    >
      {/* Cover area */}
      <div className={styles['ab-book-cover-wrap']}>
        {/* Coloured background */}
        <div
          className={styles['ab-book-cover-bg']}
          style={{ backgroundColor: book.bgColor }}
        />

        {/* Die-cut ears (decorative SVG) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 44 45"
          className={styles['ab-book-ear-left']}
          style={{ color: book.bgColor } as React.CSSProperties}
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
          className={styles['ab-book-ear-right']}
          style={{ color: book.bgColor } as React.CSSProperties}
        >
          <path
            fill="currentColor"
            d="M19.388.879c.667-.771 1.647-1.018 2.559-.807.912.21 1.682.956 1.926 1.861C34.595 38.09 25.79 69.237 21.823 80h-4.188c-.17-4.22-2.739-13.318-10.975-22.064-8.493-9.099-8.88-21.913-1.063-37.23C11.221 9.603 19.091 1.266 19.388.879Z"
          />
        </svg>

        {/* Cover image (lazy loaded) */}
        <img
          src={book.cover}
          alt={book.title}
          className={styles['ab-book-cover-img']}
          loading="lazy"
          decoding="async"
        />

        {/* Hover CTA overlay */}
        <div className={styles['ab-book-cta-hover']}>
          <span className={styles['ab-book-read-more']}>
            Read more
            <svg width="11" height="10" viewBox="0 0 14 13" fill="none">
              <path d="M13.58 5.66v.845l-5.994 5.66-1.71-2.063a61.427 61.427 0 0 1 4.265-2.988l-.02-.078c-1.828.196-4.107.294-6.387.294H0V4.835h3.734c2.28 0 4.56.098 6.387.294l.02-.059a67.638 67.638 0 0 1-4.265-3.006L7.586 0l5.994 5.66Z" fill="currentColor"/>
            </svg>
          </span>
        </div>
      </div>

      {/* Book info */}
      <div className={styles['ab-book-body']}>
        <div className={styles['ab-book-title']}>{book.title}</div>
        <div className={styles['ab-book-author']}>{book.author}</div>
        <div className={styles['ab-book-tags']}>
          {book.tags.slice(0, 2).map((tag) => (
            <span
              key={tag.label}
              className={styles['ab-book-tag']}
              style={{ backgroundColor: tag.bg, color: tag.color }}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
