'use client';

import React from 'react';
import { BookEditorialSection } from '../../data/books/types';
import styles from '../../app/books/[slug]/book-details.module.css';

interface BookDescriptionProps {
  description: string;
  editorialSections: BookEditorialSection[];
}

export default function BookDescription({ description, editorialSections }: BookDescriptionProps) {
  // Split editorial body into two columns
  const col1 = editorialSections[0]?.body ?? '';
  const col2 = editorialSections[1]?.body ?? '';

  return (
    <section className={styles['bd2-desc-section']} aria-label="Book description">
      {/* Large bold headline — matches reference style */}
      <p className={styles['bd2-desc-headline']}>{description}</p>

      {/* Two-column body text */}
      {(col1 || col2) && (
        <div className={styles['bd2-desc-columns']}>
          {col1 && <p className={styles['bd2-desc-col']}>{col1}</p>}
          {col2 && <p className={styles['bd2-desc-col']}>{col2}</p>}
        </div>
      )}
    </section>
  );
}
