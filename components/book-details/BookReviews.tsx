'use client';

import React from 'react';
import { BookReview } from '../../data/books/types';
import styles from '../../app/books/[slug]/book-details.module.css';

interface BookReviewsProps {
  reviews: BookReview[];
}

export default function BookReviews({ reviews }: BookReviewsProps) {
  if (reviews.length === 0) return null;

  return (
    <section className={styles['bd-reviews-section']} aria-label="Reviews and editorial quotes">
      <h2 className={styles['bd-reviews-heading']}>
        Don&rsquo;t just take<br />our word for it
      </h2>

      <div className={styles['bd-reviews-grid']}>
        {reviews.map((review, i) => (
          <div
            key={i}
            className={styles['bd-review-card']}
            style={{ backgroundColor: review.bg, color: review.textColor }}
          >
            <p className={styles['bd-review-text']}>
              &ldquo;{review.text}&rdquo;
            </p>
            <span className={styles['bd-review-source']}>{review.source}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
