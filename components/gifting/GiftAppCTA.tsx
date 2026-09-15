'use client';

import { motion } from 'framer-motion';
import styles from '../../app/gifting/gifting.module.css';

export default function GiftAppCTA() {
  return (
    <section className={styles.appCtaSection}>
      <motion.div
        className={styles.appCtaCard}
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className={styles.appCtaTitle}>
          Made for readers<br />by readers
        </h2>
        <p className={styles.appCtaSubhead}>
          The whole club lives in the Aardvark app — chat about the books, join the monthly
          challenge, and vote alongside thousands of readers.
        </p>

        {/* App Store & Google Play Buttons */}
        <div className={styles.appCtaButtons}>
          <a
            href="https://apps.apple.com/us/app/aardvark-book-club/id6443419435"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.appStoreBtn}
            aria-label="Download on the App Store"
          >
            <img
              src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69960373d1c35e0dd8ec560d_button-app-store.svg"
              alt="Download on App Store"
              className={styles.appStoreImg}
            />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.aardvark.app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.appStoreBtn}
            aria-label="Get it on Google Play"
          >
            <img
              src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6996037302aa4574b3eecab8_button-google-play.svg"
              alt="Get it on Google Play"
              className={styles.appStoreImg}
            />
          </a>
        </div>
      </motion.div>
    </section>
  );
}