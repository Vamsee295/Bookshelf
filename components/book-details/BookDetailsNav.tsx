'use client';

import React from 'react';
import Link from 'next/link';
import styles from '../../app/books/[slug]/book-details.module.css';

interface BookDetailsNavProps {
  currentSlug: string;
}

export default function BookDetailsNav({ currentSlug }: BookDetailsNavProps) {
  return (
    <nav className={styles['bd-nav']} aria-label="Site navigation">
      <div className={styles['bd-nav-inner']}>
        {/* Back to all books */}
        <Link href="/all-books" className={styles['bd-nav-back']} aria-label="Back to All Books">
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden="true">
            <path d="M7 1L1 7M1 7L7 13M1 7H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          All Books
        </Link>

        {/* Logo */}
        <Link href="/" aria-label="Aardvark Book Club Home">
          <img
            src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/696179694070e2fa9eca375f_logo.svg"
            alt="Aardvark Book Club"
            className={styles['bd-nav-logo']}
          />
        </Link>

        {/* Nav links */}
        <div className={styles['bd-nav-links']}>
          <Link href="/all-books" className={styles['bd-nav-pill']}>All Books</Link>
          <Link href="/gifting" className={styles['bd-nav-pill']}>Gifting</Link>
          <Link href="/faq" className={styles['bd-nav-pill']}>FAQ</Link>
          <Link href="#" className={styles['bd-nav-cta']}>
            Log-in / Sign-up
            <svg width="10" height="10" viewBox="0 0 14 13" fill="none" aria-hidden="true">
              <path d="M13.58 5.66v.845l-5.994 5.66-1.71-2.063a61.427 61.427 0 0 1 4.265-2.988l-.02-.078c-1.828.196-4.107.294-6.387.294H0V4.835h3.734c2.28 0 4.56.098 6.387.294l.02-.059a67.638 67.638 0 0 1-4.265-3.006L7.586 0l5.994 5.66Z" fill="currentColor"/>
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}
