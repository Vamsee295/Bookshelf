'use client';

import React from 'react';
import { BookEditorialSection } from '../../data/books/types';
import styles from '../../app/books/[slug]/book-details.module.css';

interface BookDescriptionProps {
  description: string;
  editorialSections: BookEditorialSection[];
}

export default function BookDescription({ description, editorialSections }: BookDescriptionProps) {
  return (
    <section className={styles['bd-description-section']} aria-label="Book description">
      {/* Lead premise — italic, large */}
      <p className={styles['bd-lead-premise']}>{description}</p>

      {/* Editorial text blocks */}
      {editorialSections.length > 0 && (
        <div className={styles['bd-editorial-grid']}>
          {editorialSections.map((section, i) => (
            <div key={i} className={styles['bd-editorial-block']}>
              {section.heading && (
                <h3 className={styles['bd-editorial-heading']}>{section.heading}</h3>
              )}
              <p className={styles['bd-editorial-body']}>{section.body}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
