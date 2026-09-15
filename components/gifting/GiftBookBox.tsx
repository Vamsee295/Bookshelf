'use client';

import { motion } from 'framer-motion';
import styles from '../../app/gifting/gifting.module.css';

const PACKAGE_URL = 'https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69b9afc474f523151b7c0941_package-visual.webp';
const BOX_TITLE_URL = 'https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69c6d9f6cb0f4ec3190ce451_box-title.svg';

export default function GiftBookBox() {
  return (
    <section className={styles.bookBoxSection}>
      <motion.div
        className={styles.bookBoxStage}
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Decorative backdrop shapes */}
        <div className={styles.bookBoxBlob} aria-hidden="true" />
        <div className={styles.bookBoxDot} aria-hidden="true" />
        <div className={styles.bookBoxRing} aria-hidden="true" />

        {/* The gift box artwork */}
        <motion.div
          className={styles.bookBoxMain}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <img
            src={PACKAGE_URL}
            alt="Aardvark book box filled with exclusive hardbacks"
            className={styles.bookBoxImg}
            width="560"
            height="auto"
            loading="lazy"
          />
          <img
            src={BOX_TITLE_URL}
            alt="Think inside the box"
            className={styles.bookBoxTitleFloat}
            loading="lazy"
          />
        </motion.div>

        {/* Overlapping book covers */}
        <img
          src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69e12126ab00b29990374dd0_features-image-02.webp"
          alt=""
          aria-hidden="true"
          className={styles.bookBoxCoverLeft}
          loading="lazy"
        />
        <img
          src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69e12126d336d7727615d142_features-image-03.webp"
          alt=""
          aria-hidden="true"
          className={styles.bookBoxCoverRight}
          loading="lazy"
        />
      </motion.div>
    </section>
  );
}