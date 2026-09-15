'use client';

import React, { useState } from 'react';
import styles from '../../app/all-books/all-books.module.css';

export default function AllBooksFooter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup would go here
    setEmail('');
  };

  return (
    <footer className={styles['ab-footer']}>
      <div className={styles['ab-footer-blob']} />

      <div className={styles['ab-footer-inner']}>
        {/* Left column */}
        <div>
          <img
            src="/logo-white.svg"
            alt="BookOrbit Book Club"
            className={styles['ab-footer-logo']}
          />

          <div className={styles['ab-footer-app-badges']}>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles['ab-footer-badge']}
            >
              <span className={styles['ab-footer-badge-icon']}>🍎</span>
              <div>
                <span className={styles['ab-footer-badge-sub']}>Download on the</span>
                <span className={styles['ab-footer-badge-name']}>App Store</span>
              </div>
            </a>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles['ab-footer-badge']}
            >
              <span className={styles['ab-footer-badge-icon']}>▶</span>
              <div>
                <span className={styles['ab-footer-badge-sub']}>GET IT ON</span>
                <span className={styles['ab-footer-badge-name']}>Google Play</span>
              </div>
            </a>
          </div>

          <div className={styles['ab-footer-socials']}>
            <a
              href="https://www.instagram.com/bookorbitbookclub/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles['ab-footer-social']}
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" fill="currentColor"/>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@bookorbitbookclub"
              target="_blank"
              rel="noopener noreferrer"
              className={styles['ab-footer-social']}
              aria-label="TikTok"
            >
              <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48Z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right column — newsletter */}
        <div className={styles['ab-footer-right']}>
          <h3 className={styles['ab-footer-newsletter-title']}>
            Join our mailing list
          </h3>
          <form onSubmit={handleSubmit} className={styles['ab-footer-form']}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles['ab-footer-input']}
              required
              aria-label="Email address for newsletter"
            />
            <button type="submit" className={styles['ab-footer-submit']}>
              Subscribe
              <svg width="11" height="10" viewBox="0 0 14 13" fill="none">
                <path d="M13.58 5.66v.845l-5.994 5.66-1.71-2.063a61.427 61.427 0 0 1 4.265-2.988l-.02-.078c-1.828.196-4.107.294-6.387.294H0V4.835h3.734c2.28 0 4.56.098 6.387.294l.02-.059a67.638 67.638 0 0 1-4.265-3.006L7.586 0l5.994 5.66Z" fill="currentColor"/>
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles['ab-footer-bottom']}>
        <p className={styles['ab-footer-copy']}>
          ©{new Date().getFullYear()} BookOrbit Book Club. All rights reserved.
        </p>
        <div className={styles['ab-footer-links']}>
          <a href="/terms" className={styles['ab-footer-link']}>Terms of Service</a>
          <a href="/privacy" className={styles['ab-footer-link']}>Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
