'use client';

import React, { useState } from 'react';
import { BookNotes as BookNotesType } from '../../data/books/types';
import styles from '../../app/books/[slug]/book-details.module.css';

interface AccordionProps {
  label: string;
  content: string;
}

function Accordion({ label, content }: AccordionProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles['bd2-accordion']}>
      <button
        className={styles['bd2-accordion-btn']}
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
      >
        {label}
        <span
          className={`${styles['bd2-accordion-icon']} ${open ? styles['bd2-accordion-icon-open'] : ''}`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      {open && (
        <div className={styles['bd2-accordion-body']}>{content}</div>
      )}
    </div>
  );
}

export default function BookNotes({ notes }: { notes: BookNotesType }) {
  return (
    <section className={styles['bd2-notes-section']} aria-label="Book notes">
      <div className={styles['bd2-notes-heading-wrap']}>
        <span className={styles['bd2-notes-icon']} aria-hidden="true">📚</span>
        <h2 className={styles['bd2-notes-heading']}>Book notes</h2>
      </div>
      <Accordion label="Why we chose it" content={notes.whyWeChoseIt} />
      <Accordion label="Content warnings" content={notes.contentWarnings} />
    </section>
  );
}
