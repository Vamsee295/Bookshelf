'use client';

import React, { useState } from 'react';
import styles from '../../app/books/[slug]/book-details.module.css';

export default function BookDetailsFooter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <footer className={styles['bd2-footer']}>
      <div className={styles['bd2-footer-blob']} aria-hidden="true" />

      <div className={styles['bd2-footer-inner']}>
        <div>
          <img
            src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/696179694070e2fa9eca375f_logo.svg"
            alt="Aardvark Book Club"
            className={styles['bd2-footer-logo']}
          />
          <p className={styles['bd2-footer-tagline']}>
            Curated books, delivered monthly.<br />
            Join thousands of readers discovering their next obsession.
          </p>
        </div>

        <div>
          <div className={styles['bd2-footer-nl-heading']}>Join our mailing list</div>
          <div className={styles['bd2-footer-nl-sub']}>
            Get first access to new selections and member exclusives.
          </div>
          {submitted ? (
            <p style={{ color: '#ff9d00', fontWeight: 600 }}>Thanks — you&rsquo;re in! 🎉</p>
          ) : (
            <form className={styles['bd2-footer-form']} onSubmit={handleSubmit} noValidate>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className={styles['bd2-footer-input']}
                required
                aria-label="Email address"
              />
              <button type="submit" className={styles['bd2-footer-submit']}>
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      <div className={styles['bd2-footer-bottom']}>
        © {new Date().getFullYear()} Aardvark Book Club. All rights reserved.
      </div>
    </footer>
  );
}
