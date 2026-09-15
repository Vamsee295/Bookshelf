'use client';

import React from 'react';
import Link from 'next/link';
import styles from '../../app/books/[slug]/book-details.module.css';

export default function BookDetailsNav() {
  return (
    <nav className={styles['bd2-nav']} aria-label="Site navigation">
      {/* Logo — top left */}
      <Link href="/" className={styles['bd2-nav-logo-wrap']} aria-label="Aardvark Book Club">
        <img
          src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/696179694070e2fa9eca375f_logo.svg"
          alt="Aardvark Book Club"
          className={styles['bd2-nav-logo']}
        />
      </Link>

      {/* Centered pills */}
      <div className={styles['bd2-nav-pills']}>
        <Link href="/all-books" className={styles['bd2-nav-pill']}>All Books</Link>
        <Link href="/gifting" className={styles['bd2-nav-pill']}>Gifting</Link>
        <Link href="/faq" className={styles['bd2-nav-pill']}>FAQ</Link>
        <Link href="#" className={`${styles['bd2-nav-pill']} ${styles['bd2-nav-pill-cta']}`}>
          Log-in / Sign-up
          <svg width="10" height="10" viewBox="0 0 14 13" fill="none" aria-hidden="true">
            <path d="M13.58 5.66v.845l-5.994 5.66-1.71-2.063a61.427 61.427 0 0 1 4.265-2.988l-.02-.078c-1.828.196-4.107.294-6.387.294H0V4.835h3.734c2.28 0 4.56.098 6.387.294l.02-.059a67.638 67.638 0 0 1-4.265-3.006L7.586 0l5.994 5.66Z" fill="currentColor"/>
          </svg>
        </Link>
      </div>

      {/* Social icons — top right */}
      <div className={styles['bd2-nav-socials']}>
        <a
          href="https://www.instagram.com/aardvarkbookclub"
          target="_blank"
          rel="noopener noreferrer"
          className={styles['bd2-nav-social']}
          aria-label="Instagram"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
          </svg>
        </a>
        <a
          href="https://www.tiktok.com/@aardvarkbookclub"
          target="_blank"
          rel="noopener noreferrer"
          className={styles['bd2-nav-social']}
          aria-label="TikTok"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.72a8.18 8.18 0 0 0 4.79 1.52V6.79a4.85 4.85 0 0 1-1.02-.1z"/>
          </svg>
        </a>
      </div>
    </nav>
  );
}
