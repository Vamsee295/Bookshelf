import React from 'react';
import { exclusiveBook } from '../../data/allBooksData';
import styles from '../../app/all-books/all-books.module.css';

export default function ArchwrightExclusive() {
  return (
    <section className={styles['ab-exclusive']} id="bookorbit-exclusive">
      {/* Decorative stars */}
      <span
        className={styles['ab-exclusive-star']}
        style={{ top: '1.5rem', left: '2rem', fontSize: '1.8rem' }}
      >
        ✦
      </span>
      <span
        className={styles['ab-exclusive-star']}
        style={{ top: '3rem', right: '3rem', fontSize: '1.2rem', animationDirection: 'reverse' }}
      >
        ✦
      </span>

      <div className={styles['ab-exclusive-inner']}>
        {/* Text */}
        <div>
          <div className={styles['ab-exclusive-badge']}>
            ✦ BookOrbit Original
          </div>
          <h2 className={styles['ab-exclusive-title']}>
            {exclusiveBook.title}
          </h2>
          <p className={styles['ab-exclusive-authors']}>
            <strong>Authors:</strong> {exclusiveBook.authors}
          </p>
          <p className={styles['ab-exclusive-desc']}>
            {exclusiveBook.description}
          </p>
          <a
            href="https://app.bookorbitbookclub.com/books"
            target="_blank"
            rel="noopener noreferrer"
            className={styles['ab-exclusive-btn']}
          >
            Add to box!
            <svg width="11" height="10" viewBox="0 0 14 13" fill="none">
              <path d="M13.58 5.66v.845l-5.994 5.66-1.71-2.063a61.427 61.427 0 0 1 4.265-2.988l-.02-.078c-1.828.196-4.107.294-6.387.294H0V4.835h3.734c2.28 0 4.56.098 6.387.294l.02-.059a67.638 67.638 0 0 1-4.265-3.006L7.586 0l5.994 5.66Z" fill="currentColor"/>
            </svg>
          </a>
        </div>

        {/* Cover image */}
        <div className={styles['ab-exclusive-cover-wrap']}>
          <img
            src={exclusiveBook.coverUrl}
            alt={exclusiveBook.title}
            className={styles['ab-exclusive-cover']}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
