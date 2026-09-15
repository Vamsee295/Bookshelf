'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../app/gifting/gifting.module.css';

type SubscribeState = 'idle' | 'loading' | 'success' | 'error';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function GiftFooter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<SubscribeState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();

    if (!trimmed) {
      setErrorMsg('Please enter your email address.');
      setStatus('error');
      return;
    }
    if (!EMAIL_RE.test(trimmed)) {
      setErrorMsg('That doesn’t look like a valid email address.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    // Frontend-only: simulate a short request so a real mailing-list
    // provider can be connected later without changing this UI.
    window.setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 900);
  };

  return (
    <footer className={styles.footerSection}>
      {/* Organic Curved Wave Divider from Section Above */}
      <div className={styles.footerCurveDivider}>
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className={styles.footerCurveSvg}
        >
          <path
            d="M0,0 C380,105 1060,95 1440,0 L1440,0 L0,0 Z"
            fill="#FDF9F4"
          />
        </svg>
      </div>

      <div className={styles.footerContainer}>
        {/* Column 1: Brand Logo, App Store Buttons, Socials & Legal */}
        <div className={styles.footerBrandCol}>
          <div className={styles.footerLogoWrap}>
            <Link href="/" aria-label="Aardvark Book Club Home">
              <img
                src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/696d10ebb91f9b8707240373_aardvark-logo.svg"
                alt="Aardvark Book Club"
                className={styles.footerLogoImg}
                width={210}
                height={52}
              />
            </Link>
          </div>

          <div className={styles.footerAppButtons}>
            <a
              href="https://apps.apple.com/us/app/aardvark-book-club/id6443419435"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on the App Store"
              className={styles.appStoreBadgeLink}
            >
              <img
                src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69960373d1c35e0dd8ec560d_button-app-store.svg"
                alt="App Store Button"
                className={styles.appBadgeImg}
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.aardvark.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get it on Google Play"
              className={styles.appStoreBadgeLink}
            >
              <img
                src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6996037302aa4574b3eecab8_button-google-play.svg"
                alt="Google Play Button"
                className={styles.appBadgeImg}
              />
            </a>
          </div>

          <div className={styles.footerSocials}>
            <a
              href="https://www.instagram.com/aardvarkbookclub/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerSocialBtn}
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@aardvarkbookclub"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerSocialBtn}
              aria-label="TikTok"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48Z" />
              </svg>
            </a>
          </div>

          <div className={styles.footerLegalLinks}>
            <Link href="/terms-of-service" className={styles.footerLegalLink}>
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className={styles.footerLegalLink}>
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Column 2: Large Center Tilted Book / Package Graphic */}
        <div className={styles.footerVisualCol}>
          <div className={styles.footerBookWrap}>
            <img
              src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69b9afc474f523151b7c0941_package-visual.webp"
              alt="Aardvark Book Club Box"
              className={styles.footerArtwork}
              loading="lazy"
            />
          </div>
        </div>

        {/* Column 3: "Join our mailing list" Form */}
        <div className={styles.footerFormCol}>
          <h3 className={styles.footerFormTitle}>Join our mailing list</h3>

          {status === 'success' ? (
            <div className={styles.footerSubscribedSuccess} role="status">
              🎉 Thank you for subscribing! You’re on the list.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className={styles.newsletterForm} noValidate>
              <input
                type="email"
                required
                placeholder="Email Address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                className={`${styles.newsletterInput} ${
                  status === 'error' ? styles.newsletterInputError : ''
                }`}
                aria-label="Email Address"
                aria-invalid={status === 'error'}
              />
              <button
                type="submit"
                className={styles.newsletterSubmitBtn}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <span className={styles.newsletterLoadingDot} aria-hidden="true" />
                ) : (
                  <span>Subscribe</span>
                )}
                {status !== 'loading' && (
                  <svg width="14" height="13" viewBox="0 0 14 13" fill="none" aria-hidden="true">
                    <path
                      d="M13.58 5.66v.845l-5.994 5.66-1.71-2.063a61.427 61.427 0 0 1 4.265-2.988l-.02-.078c-1.828.196-4.107.294-6.387.294H0V4.835h3.734c2.28 0 4.56.098 6.387.294l.02-.059a67.638 67.638 0 0 1-4.265-3.006L7.586 0l5.994 5.66Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className={styles.newsletterErrorMsg} role="alert">
              {errorMsg}
            </p>
          )}
        </div>
      </div>

      {/* Solid Black Full-Width Bottom Bar */}
      <div className={styles.footerBottomBar}>
        <div className={styles.footerBottomInner}>
          <div className={styles.copyrightText}>
            ©2026 Aardvark Book Club. All rights reserved.
          </div>
          <div className={styles.creditsText}>
            <span>Design by Dylan</span>
            <span>Development by Future Three</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
