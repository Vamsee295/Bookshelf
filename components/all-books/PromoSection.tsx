import React from 'react';
import styles from '../../app/all-books/all-books.module.css';

export default function PromoSection() {
  return (
    <section className={styles['ab-promo']}>
      <div className={styles['ab-promo-blob']} />
      <div className={styles['ab-promo-inner']}>
        <div className={styles['ab-promo-text']}>
          <h2 className={styles['ab-promo-title']}>
            Unbox your<br />next obsession
          </h2>
          <p className={styles['ab-promo-sub']}>
            Up to 3 brand-new hardcovers every month. Curated, delivered, loved.
          </p>
          <a
            href="https://app.bookorbitbookclub.com/books"
            target="_blank"
            rel="noopener noreferrer"
            className={styles['ab-promo-btn']}
          >
            Join now
            <svg width="11" height="10" viewBox="0 0 14 13" fill="none">
              <path d="M13.58 5.66v.845l-5.994 5.66-1.71-2.063a61.427 61.427 0 0 1 4.265-2.988l-.02-.078c-1.828.196-4.107.294-6.387.294H0V4.835h3.734c2.28 0 4.56.098 6.387.294l.02-.059a67.638 67.638 0 0 1-4.265-3.006L7.586 0l5.994 5.66Z" fill="currentColor"/>
            </svg>
          </a>
        </div>
        <div className={styles['ab-promo-visual']}>📦</div>
      </div>
    </section>
  );
}
