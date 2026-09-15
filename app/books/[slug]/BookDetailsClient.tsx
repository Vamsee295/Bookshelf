'use client';

import React from 'react';
import Link from 'next/link';
import { BookDetails } from '../../../data/books/types';
import { resolveSlugs } from '../../../data/books/index';
import styles from './book-details.module.css';

import BookDetailsNav from '../../../components/book-details/BookDetailsNav';
import BookHero from '../../../components/book-details/BookHero';
import BookGlanceBadges from '../../../components/book-details/BookBadges';
import BookDescription from '../../../components/book-details/BookDescription';
import BookReviews from '../../../components/book-details/BookReviews';
import BookNotes from '../../../components/book-details/BookNotes';
import SimilarTitles from '../../../components/book-details/SimilarTitles';
import BookDetailsFooter from '../../../components/book-details/BookDetailsFooter';

interface BookDetailsClientProps {
  book: BookDetails;
}

export default function BookDetailsClient({ book }: BookDetailsClientProps) {
  const similarBooks = resolveSlugs(book.similarTitles);

  return (
    <div className={styles['bd2-page']}>
      {/* ── 1. Floating Pill Nav ──────────────────────────────── */}
      <BookDetailsNav />

      {/* ── 2. Hero (warm organic blobs, giant title, quote card) */}
      <BookHero book={book} />

      {/* ── 3. Large book cover ─────────────────────────────── */}
      <div className={styles['bd2-cover-section']}>
        <img
          src={book.cover}
          alt={`${book.title} by ${book.author}`}
          className={styles['bd2-cover-img']}
          loading="eager"
        />
      </div>

      {/* ── 4. "At a glance" badges ─────────────────────────── */}
      <BookGlanceBadges badges={book.badges} />

      {/* ── 5. Description (bold headline + 2-col body) ──────── */}
      <BookDescription
        description={book.description}
        editorialSections={book.editorialSections}
      />

      {/* ── 6. "Don't just take our word for it" (tilted cards) */}
      <BookReviews reviews={book.reviews} />

      {/* ── 7. Book Notes accordions ────────────────────────── */}
      <BookNotes notes={book.notes} />

      {/* ── 8. Similar Titles carousel ──────────────────────── */}
      <SimilarTitles books={similarBooks} />

      {/* ── 9. Footer ───────────────────────────────────────── */}
      <BookDetailsFooter />

      {/* ── Sticky "Add to box!" CTA (always visible) ──────── */}
      <Link href="#" className={styles['bd2-sticky-cta']} aria-label="Add to box">
        <span className={styles['bd2-sticky-cta-leaf']}>🌿</span>
        Add to box!
        <svg width="12" height="12" viewBox="0 0 14 13" fill="none" aria-hidden="true">
          <path d="M13.58 5.66v.845l-5.994 5.66-1.71-2.063a61.427 61.427 0 0 1 4.265-2.988l-.02-.078c-1.828.196-4.107.294-6.387.294H0V4.835h3.734c2.28 0 4.56.098 6.387.294l.02-.059a67.638 67.638 0 0 1-4.265-3.006L7.586 0l5.994 5.66Z" fill="currentColor"/>
        </svg>
      </Link>
    </div>
  );
}
