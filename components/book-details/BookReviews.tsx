'use client';

import React from 'react';
import { BookReview } from '../../data/books/types';
import styles from '../../app/books/[slug]/book-details.module.css';

// Match reference: yellow, pink, light blue tilted cards
const CARD_COLORS = ['#fff176', '#f8bbd9', '#b2ebf2'];
const CARD_TEXT_COLORS = ['#1a1a1a', '#1a1a1a', '#1a1a1a'];

interface BookReviewsProps {
  reviews: BookReview[];
}

export default function BookReviews({ reviews }: BookReviewsProps) {
  if (reviews.length === 0) return null;

  return (
    <section className={styles['bd2-reviews-section']} aria-label="Reader and editorial reviews">
      <h2 className={styles['bd2-reviews-heading']}>
        Don&rsquo;t just take<br />our word for it
      </h2>

      <div className={styles['bd2-reviews-cards']}>
        {reviews.map((review, i) => (
          <div
            key={i}
            className={styles['bd2-review-card']}
            style={{
              backgroundColor: CARD_COLORS[i % CARD_COLORS.length],
              color: CARD_TEXT_COLORS[i % CARD_TEXT_COLORS.length],
            }}
          >
            <p className={styles['bd2-review-quote']}>
              &ldquo;{review.text}&rdquo;
            </p>
            <span className={styles['bd2-review-attr']}>— {review.source}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
