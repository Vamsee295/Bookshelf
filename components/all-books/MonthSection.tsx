'use client';

import React, { useRef } from 'react';
import { MonthData } from '../../data/allBooksData';
import BookCard from './BookCard';
import styles from '../../app/all-books/all-books.module.css';

interface MonthSectionProps {
  data: MonthData;
  activeFilter: string;
}

export default function MonthSection({ data, activeFilter }: MonthSectionProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredBooks = activeFilter === 'All'
    ? data.books
    : data.books.filter((b) =>
        b.tags.some((t) => t.label.toLowerCase().includes(activeFilter.toLowerCase()))
      );

  if (filteredBooks.length === 0) return null;

  const scrollBy = (dir: 'prev' | 'next') => {
    if (!gridRef.current) return;
    const amount = gridRef.current.scrollWidth / data.books.length * 2;
    gridRef.current.scrollBy({ left: dir === 'next' ? amount : -amount, behavior: 'smooth' });
  };

  return (
    <section className={styles['ab-month-section']} id={data.month}>
      <div className={styles['ab-month-header']}>
        <h2 className={styles['ab-month-title']}>{data.label}</h2>
        <div className={styles['ab-month-controls']}>
          <button
            className={styles['ab-month-btn']}
            onClick={() => scrollBy('prev')}
            aria-label="Previous books"
          >
            <svg viewBox="0 0 14 13" fill="none">
              <path d="M.42 5.66v.845l5.994 5.66 1.71-2.063A61.427 61.427 0 0 0 3.86 7.114l.02-.078c1.828.196 4.107.294 6.387.294H14V4.835h-3.734c-2.28 0-4.56.098-6.387.294L3.86 5.07a67.638 67.638 0 0 0 4.265-3.006L6.414 0 .42 5.66Z" fill="currentColor"/>
            </svg>
          </button>
          <button
            className={styles['ab-month-btn']}
            onClick={() => scrollBy('next')}
            aria-label="Next books"
          >
            <svg viewBox="0 0 14 13" fill="none">
              <path d="M13.58 5.66v.845l-5.994 5.66-1.71-2.063a61.427 61.427 0 0 1 4.265-2.988l-.02-.078c-1.828.196-4.107.294-6.387.294H0V4.835h3.734c2.28 0 4.56.098 6.387.294l.02-.059a67.638 67.638 0 0 1-4.265-3.006L7.586 0l5.994 5.66Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>

      <div ref={gridRef} className={styles['ab-books-grid']}>
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
