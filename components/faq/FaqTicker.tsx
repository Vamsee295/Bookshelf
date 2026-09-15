'use client';

import React from 'react';
import styles from '../../app/faq/faq.module.css';

const TICKER_ITEMS = [
  'Think inside the box.',
  'Curated hardcovers, monthly.',
  "A book so good you'll want to talk about it.",
  'New releases. Real readers.',
  'Join BookOrbit today.',
  'Think inside the box.',
  'Curated hardcovers, monthly.',
  "A book so good you'll want to talk about it.",
  'New releases. Real readers.',
  'Join BookOrbit today.',
];

export default function FaqTicker() {
  return (
    <div className={styles.tickerSection} aria-hidden="true">
      <div className={styles.tickerTrack}>
        <div className={styles.tickerInner}>
          {TICKER_ITEMS.map((item, i) => (
            <span key={i} className={styles.tickerItem}>
              {item}
              <span className={styles.tickerDot}>✦</span>
            </span>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className={styles.tickerInner} aria-hidden="true">
          {TICKER_ITEMS.map((item, i) => (
            <span key={`dup-${i}`} className={styles.tickerItem}>
              {item}
              <span className={styles.tickerDot}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
