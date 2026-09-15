'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../app/gifting/gifting.module.css';

const PRESS_LOGOS = [
  { id: 'pw', alt: 'Publishers Weekly', src: 'https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69b9b566693a6633673acc40_logo-pw.webp' },
  { id: 'msnbc', alt: 'MSNBC', src: 'https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69b9b5b7ac5a698bb7f76e69_logo-msnbc.webp' },
  { id: 'bookriot', alt: 'Book Riot', src: 'https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69b9b5c57abe05306fcadf78_logo-book-riot.webp' },
  { id: 'travel', alt: 'Travel + Leisure', src: 'https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69b9b5d24cc9818e2945bf06_logo-travel-leisure.webp' },
];

const CONFETTI_PIECES = [
  { top: '15%', left: '10%', color: '#FF00E5', h: 16, w: 32, rotate: 25 },
  { top: '25%', left: '25%', color: '#00E5FF', h: 14, w: 22, rotate: -15 },
  { top: '38%', left: '7%',  color: '#FFE600', h: 18, w: 18, rotate: 45 },
  { top: '12%', right: '18%', color: '#9933FF', h: 16, w: 28, rotate: -30 },
  { top: '28%', right: '10%', color: '#00E5FF', h: 14, w: 24, rotate: 15 },
  { top: '48%', right: '25%', color: '#FF00E5', h: 16, w: 16, rotate: 60 },
  { top: '62%', left: '18%', color: '#FFE600', h: 18, w: 26, rotate: -20 },
  { top: '70%', right: '38%', color: '#FF69DA', h: 14, w: 28, rotate: 35 },
  { top: '78%', left: '38%', color: '#00E5FF', h: 14, w: 20, rotate: -10 },
  { top: '55%', right: '12%', color: '#FFE600', h: 12, w: 22, rotate: 20 },
];

const PACKAGE_URL = 'https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69b9afc474f523151b7c0941_package-visual.webp';
const PACKAGE_MOBILE_URL = 'https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69eca6a3b5b2a522cfa542cf_gift-visual-mobile.webp';

export default function GiftingHero() {
  const scrollToSubscriptions = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('subscriptions')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.heroSection}>
      {/* Organic blob backgrounds */}
      <div className={styles.heroBgBlobs}>
        <svg
          className={styles.heroBgSvg}
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M200 100C400 20 700 80 900 180C1100 280 1300 120 1500 200V0H0V300C60 220 100 160 200 100Z"
            fill="#FFD6F3"
            fillOpacity="0.7"
          />
          <path
            d="M0 500C200 380 500 550 850 480C1150 410 1350 580 1500 480V1000H0V500Z"
            fill="#FFDDFB"
            fillOpacity="0.5"
          />
        </svg>
      </div>

      {/* Confetti */}
      {CONFETTI_PIECES.map((p, i) => (
        <div
          key={i}
          className={styles.confettiItem}
          style={{ top: p.top, left: p.left, right: p.right, backgroundColor: p.color, height: p.h, width: p.w, transform: `rotate(${p.rotate}deg)` }}
        />
      ))}

      {/* Center Content */}
      <div className={styles.heroInner}>
        <motion.div
          className={styles.heroContentCenter}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className={styles.heroTitleHuge}>
            A gift so good<br />
            you&rsquo;re going to<br />
            want to borrow it
          </h1>
          <div className={styles.heroCtaRowCenter}>
            <a
              href="#subscriptions"
              onClick={scrollToSubscriptions}
              className={styles.heroPrimaryBtn}
            >
              Shop gifts!
              <svg width="14" height="14" viewBox="0 0 14 13" fill="none" aria-hidden="true">
                <path d="M0 6.34h5.994l1.71-1.71a61.427 61.427 0 0 0 2.988 4.265l.078-.02c-.196-1.828-.294-4.107-.294-6.387V0H6.742c0 2.28-.098 4.56-.294 6.387l.059.02a67.638 67.638 0 0 0 3.006-4.265L5.66 6.5l-5.66 5.994Z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Mentioned By — bottom left */}
      <motion.div
        className={styles.heroMentionedWrapLeft}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <span className={styles.heroMentionedLabel}>mentioned by</span>
        <div className={styles.heroPressLogosRow}>
          {PRESS_LOGOS.map((logo) => (
            <div key={logo.id} className={styles.heroPressBadgeImg}>
              <img
                src={logo.src}
                alt={logo.alt}
                className={styles.heroPressLogoIcon}
                loading="eager"
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Large Tilted Book Box — bottom right (desktop) */}
      <motion.div
        className={styles.heroBoxVisualRight}
        initial={{ opacity: 0, y: 60, rotate: 12 }}
        animate={{ opacity: 1, y: 0, rotate: 6 }}
        transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src={PACKAGE_URL}
          alt="Aardvark Gift Box"
          className={styles.heroBoxImgRight}
          width="450"
          height="auto"
        />
      </motion.div>

      {/* Mobile-only gift visual */}
      <div className={styles.heroBoxMobileWrap}>
        <img
          src={PACKAGE_MOBILE_URL}
          alt="Aardvark Gift Box"
          className={styles.heroBoxMobile}
          width="320"
          height="auto"
          loading="eager"
        />
      </div>

      {/* White bottom wave */}
      <div className={styles.heroBottomWaveWhite}>
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path d="M0 60C360 120 720 0 1080 40C1260 60 1440 120 1440 120V160H0V60Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
