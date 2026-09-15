'use client';

import React from 'react';
import { BookBadge } from '../../data/books/types';
import styles from '../../app/books/[slug]/book-details.module.css';

interface BookBadgesProps {
  badges: BookBadge[];
}

export default function BookBadges({ badges }: BookBadgesProps) {
  if (badges.length === 0) return null;

  return (
    <div className={styles['bd-badges-section']} aria-label="Book features and badges">
      {badges.map((badge) => (
        <div key={badge.label} className={styles['bd-badge']}>
          <span className={styles['bd-badge-icon']} aria-hidden="true">{badge.icon}</span>
          <span>{badge.label}</span>
        </div>
      ))}
    </div>
  );
}
