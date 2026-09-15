'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../app/faq/faq.module.css';

export default function FaqFooter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className={styles.faqFooter}>
      <div className={styles.faqFooterInner}>
        {/* Brand Column */}
        <div className={styles.faqFooterBrand}>
          <Link href="/" aria-label="BookOrbit Home">
            <img
              src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/696d10ebb91f9b8707240373_aardvark-logo.svg"
              alt="BookOrbit"
              className={styles.faqFooterLogo}
              width={200}
              height={50}
            />
          </Link>

          <nav className={styles.faqFooterNav} aria-label="Footer navigation">
            <Link href="/all-books" className={styles.faqFooterNavLink}>All Books</Link>
            <Link href="/gifting" className={styles.faqFooterNavLink}>Gifting</Link>
            <Link href="/faq" className={styles.faqFooterNavLink}>FAQ</Link>
          </nav>

          <div className={styles.faqFooterSocials}>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/aardvarkbookclub/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.faqSocialBtn}
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </svg>
            </a>
            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@aardvarkbookclub"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.faqSocialBtn}
              aria-label="TikTok"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Mailing List Column */}
        <div className={styles.faqFooterNewsletter}>
          <h3 className={styles.faqFooterNewsletterTitle}>Join our mailing list</h3>
          {subscribed ? (
            <div className={styles.faqFooterSuccess}>
              🎉 You&rsquo;re on the list!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className={styles.faqNewsletterForm}>
              <input
                type="email"
                required
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.faqNewsletterInput}
              />
              <button type="submit" className={styles.faqNewsletterBtn}>
                Subscribe
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" aria-hidden="true">
                  <path
                    d="M13.58 5.66v.845l-5.994 5.66-1.71-2.063a61.427 61.427 0 0 1 4.265-2.988l-.02-.078c-1.828.196-4.107.294-6.387.294H0V4.835h3.734c2.28 0 4.56.098 6.387.294l.02-.059a67.638 67.638 0 0 1-4.265-3.006L7.586 0l5.994 5.66Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </form>
          )}

          <div className={styles.faqFooterLegal}>
            <Link href="/terms-of-service" className={styles.faqFooterLegalLink}>Terms</Link>
            <Link href="/privacy-policy" className={styles.faqFooterLegalLink}>Privacy</Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.faqFooterBar}>
        <span>©2026 BookOrbit. All rights reserved.</span>
        <span className={styles.faqFooterCredits}>
          <span>Design by Dylan</span>
          <span>Development by Future Three</span>
        </span>
      </div>
    </footer>
  );
}
