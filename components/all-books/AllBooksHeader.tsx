'use client';

import React from 'react';
import Link from 'next/link';
import styles from '../../app/all-books/all-books.module.css';

interface AllBooksHeaderProps {
  activeFilter: string;
  onFilterChange: (f: string) => void;
}

const FILTERS = ['All', 'Horror', 'Romance', 'Thriller', 'Fantasy', 'Sci-Fi', 'Literary Fiction', 'Historical', 'Gothic', 'Debut'];

export default function AllBooksHeader({ activeFilter, onFilterChange }: AllBooksHeaderProps) {
  return (
    <div className={styles['ab-hero-wrapper']}>
      <div className={styles['ab-hero-bg-blobs']}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800" preserveAspectRatio="none" className={styles['ab-hero-bg-svg']}>
          <path fill="#DED6F7" d="M0,200 C300,400 500,-100 800,200 C1100,500 1300,100 1440,300 L1440,800 L0,800 Z" />
          <path fill="#F5F0FF" d="M0,400 C300,600 600,100 900,400 C1200,700 1300,300 1440,500 L1440,800 L0,800 Z" opacity="0.5" />
          <path fill="#CDBFF2" d="M0,0 L1440,0 L1440,800 L0,800 Z" className={styles['ab-hero-base-layer']} />
          <path fill="#DED6F7" d="M-100,250 C150,450 350,-50 650,250 C950,550 1200,200 1540,400 L1540,-100 L-100,-100 Z" />
          <path fill="#E6DFFE" d="M400,0 C600,200 900,-100 1100,300 C1300,700 1500,400 1500,-100 L400,-100 Z" opacity="0.6" />
        </svg>
      </div>

      {/* Sticky top nav */}
      <header className={styles['ab-header']}>
        <div className={styles['ab-header-inner']}>
          <Link href="/" className={styles['ab-logo-link']}>
            <img
              src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/696179694070e2fa9eca375f_logo.svg"
              alt="Aardvark Book Club Logo"
              className={styles['ab-logo-img']}
            />
          </Link>
          <nav className={styles['ab-nav']}>
            <Link href="/all-books" className={`${styles['ab-nav-pill']} ${styles['active']}`}>
              All Books
            </Link>
            <Link href="/gifting" className={styles['ab-nav-pill']}>
              Gifting
            </Link>
            <Link href="/faq" className={styles['ab-nav-pill']}>
              FAQ
            </Link>
            <Link
              href="#"
              className={styles['ab-nav-login']}
            >
              Log-in / Sign-up
              <svg width="12" height="11" viewBox="0 0 14 13" fill="none">
                <path d="M13.58 5.66v.845l-5.994 5.66-1.71-2.063a61.427 61.427 0 0 1 4.265-2.988l-.02-.078c-1.828.196-4.107.294-6.387.294H0V4.835h3.734c2.28 0 4.56.098 6.387.294l.02-.059a67.638 67.638 0 0 1-4.265-3.006L7.586 0l5.994 5.66Z" fill="currentColor"/>
              </svg>
            </Link>
          </nav>
          <div className={styles['ab-socials']}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles['ab-social-icon']}>
              <svg viewBox="0 0 24 24" fill="none" width="100%"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" fill="currentColor"></path></svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className={styles['ab-social-icon']}>
              <svg viewBox="0 0 24 24" fill="none" width="100%"><path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48Z" fill="currentColor"></path></svg>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className={styles['ab-hero']}>
        <div className={styles['ab-hero-inner']}>
          <div className={styles['ab-hero-title-wrap']}>
            <h1 className={styles['ab-hero-title']}>
              Explore our<br />selections
            </h1>
            <div className={styles['ab-floating-icon']}>
              <img src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/696a059da09e3c123fba6a5a_logo-circle.svg" alt="Aardvark Icon" />
            </div>
          </div>
          <p className={styles['ab-hero-sub']}>
            We&rsquo;ve got a full-time team dedicated to sourcing the hottest new releases.
          </p>

          <div className={styles['ab-search-container']}>
            <input type="text" placeholder="Search" className={styles['ab-search-input']} />
            <button className={styles['ab-search-btn']}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Genre filter pills */}
      <div className={styles['ab-filter-bar']}>
        <div className={styles['ab-filter-inner']}>
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`${styles['ab-filter-pill']} ${activeFilter === f ? styles['active'] : ''}`}
              onClick={() => onFilterChange(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* The curved cut at the bottom of the hero before the white section starts */}
      <div className={styles['ab-hero-bottom-curve']}>
        <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
          <path d="M0,100 C480,0 960,0 1440,100 Z" fill="#ffffff" />
        </svg>
      </div>

    </div>
  );
}
