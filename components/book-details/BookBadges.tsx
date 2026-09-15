'use client';

import React from 'react';
import { BookBadge } from '../../data/books/types';
import styles from '../../app/books/[slug]/book-details.module.css';

// Colorful badge palette cycling
const BADGE_COLORS = [
  { bg: '#f5c055', color: '#1a1a1a' }, // yellow
  { bg: '#1a1a1a', color: '#fff' },    // dark with pink accent
  { bg: '#6abf4c', color: '#fff' },    // green
  { bg: '#c3b1e1', color: '#1a1a1a' }, // purple
  { bg: '#ff9d00', color: '#fff' },    // orange
  { bg: '#4a90e2', color: '#fff' },    // blue
];

interface BookGlanceBadgesProps {
  badges: BookBadge[];
}

export default function BookGlanceBadges({ badges }: BookGlanceBadgesProps) {
  if (badges.length === 0) return null;

  return (
    <div className={styles['bd2-glance-section']} aria-label="At a glance">
      <span className={styles['bd2-glance-label']}>At a glance</span>
      <div className={styles['bd2-glance-badges']}>
        {badges.map((badge, i) => {
          const palette = BADGE_COLORS[i % BADGE_COLORS.length];
          return (
            <span
              key={badge.label}
              className={styles['bd2-glance-badge']}
              style={{ backgroundColor: palette.bg, color: palette.color }}
            >
              <span className={styles['bd2-glance-badge-icon']} aria-hidden="true">
                {badge.icon}
              </span>
              {badge.label}
            </span>
          );
        })}
      </div>
    </div>
  );
}
