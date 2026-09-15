'use client';

import { motion } from 'framer-motion';
import styles from '../../app/gifting/gifting.module.css';

export default function GiftCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaCurveDivider}>
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,0 C380,105 1060,95 1440,0 L1440,100 L0,100 Z" fill="#ffffff" />
        </svg>
      </div>
      <motion.div
        className={styles.ctaInner}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className={styles.ctaTitle}>Want to join the Club?</h2>
        <a
          href="https://app.aardvarkbookclub.com/books"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaBtn}
        >
          Sign-up now!
          <svg width="14" height="14" viewBox="0 0 14 13" fill="none" aria-hidden="true">
            <path d="M0 6.34h5.994l1.71-1.71a61.427 61.427 0 0 0 2.988 4.265l.078-.02c-.196-1.828-.294-4.107-.294-6.387V0H6.742c0 2.28-.098 4.56-.294 6.387l.059.02a67.638 67.638 0 0 0 3.006-4.265L5.66 6.5l-5.66 5.994Z" fill="currentColor" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
