'use client';

import React, { useState } from 'react';
import { booksFAQ } from '../../data/allBooksData';
import styles from '../../app/all-books/all-books.module.css';

export default function BooksFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className={styles['ab-faq']} id="books-faq">
      <div className={styles['ab-faq-header']}>
        <h2 className={styles['ab-faq-title']}>Books FAQ</h2>
      </div>
      <div className={styles['ab-faq-list']}>
        {booksFAQ.map((item, idx) => (
          <div
            key={idx}
            className={`${styles['ab-faq-item']} ${openIdx === idx ? styles['open'] : ''}`}
          >
            <button
              className={styles['ab-faq-trigger']}
              onClick={() => toggle(idx)}
              aria-expanded={openIdx === idx}
              aria-controls={`faq-answer-${idx}`}
            >
              <span className={styles['ab-faq-q']}>{item.q}</span>
              <span className={styles['ab-faq-icon']}>+</span>
            </button>
            <div
              id={`faq-answer-${idx}`}
              className={styles['ab-faq-answer']}
              role="region"
            >
              <div className={styles['ab-faq-answer-inner']}>{item.a}</div>
            </div>
          </div>
        ))}
      </div>
      <button className={styles['ab-faq-show-all']}>
        Show all FAQ
        <svg width="11" height="10" viewBox="0 0 14 13" fill="none">
          <path d="M13.58 5.66v.845l-5.994 5.66-1.71-2.063a61.427 61.427 0 0 1 4.265-2.988l-.02-.078c-1.828.196-4.107.294-6.387.294H0V4.835h3.734c2.28 0 4.56.098 6.387.294l.02-.059a67.638 67.638 0 0 1-4.265-3.006L7.586 0l5.994 5.66Z" fill="currentColor"/>
        </svg>
      </button>
    </section>
  );
}
