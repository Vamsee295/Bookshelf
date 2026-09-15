'use client';

import { motion } from 'framer-motion';
import styles from '../../app/gifting/gifting.module.css';

export default function GiftFeatures() {
  const features = [
    {
      tag: 'Genre Freedom',
      tagColor: '#FFDDFB',
      title: 'They pick their own books',
      body: 'We’ve got something for everyone. Choose from romance, horror, literary fiction, thriller, sci-fi, magical realism, and more!',
      img: 'https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69e1052f9cb202ef239559be_features-image-01.webp',
      alt: 'They pick their own books — Aardvark gift box',
      reverse: false,
    },
    {
      tag: 'Collector Editions',
      tagColor: '#C9F5FF',
      title: 'Exclusive hardcovers',
      body: 'They’ll receive beautiful hardcover editions exclusive to Aardvark Book Club. Our copies include soft matte finishes and colorful spine foils.',
      img: 'https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69e12126ab00b29990374dd0_features-image-02.webp',
      alt: 'Exclusive custom hardcover editions',
      reverse: true,
    },
    {
      tag: 'Book Club Perks',
      tagColor: '#FFE699',
      title: 'Join the community!',
      body: 'Each month features a new bookish challenge. Follow us on social media and participate in book club discussions in the app.',
      img: 'https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69e12126d336d7727615d142_features-image-03.webp',
      alt: 'Join the book club community',
      reverse: false,
    },
  ];

  return (
    <section className={styles.featuresSection}>
      {/* Editorial Curved Title Header */}
      <div className={styles.featuresCurveHeader}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className={styles.curveTitle}>
            A gift outside<br />of the box
          </h2>
        </motion.div>
      </div>

      <div className={styles.featureBlocksWrap}>
        {features.map((feature, idx) => (
          <motion.div
            key={feature.tag}
            className={`${styles.featureBlock} ${feature.reverse ? styles.featureBlockReverse : ''}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.featureTextContent}>
              <span className={styles.featureTag} style={{ backgroundColor: feature.tagColor }}>
                {feature.tag}
              </span>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureParagraph}>{feature.body}</p>
              {idx === 2 && (
                <div className={styles.featureSocialRow}>
                  <a
                    href="https://www.instagram.com/aardvarkbookclub/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.featureSocialBtn}
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
                    className={styles.featureSocialBtn}
                    aria-label="TikTok"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48Z" />
                    </svg>
                  </a>
                </div>
              )}
            </div>

            <div className={styles.featureImgCard}>
              <img
                src={feature.img}
                alt={feature.alt}
                className={styles.featureImage}
                loading="lazy"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
