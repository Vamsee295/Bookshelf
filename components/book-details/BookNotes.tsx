'use client';

import React, { useState } from 'react';
import { BookNotes as BookNotesType } from '../../data/books/types';
import styles from '../../app/books/[slug]/book-details.module.css';

interface BookNotesProps {
  notes: BookNotesType;
}

interface AccordionItemProps {
  label: string;
  content: string;
  defaultOpen?: boolean;
}

function AccordionItem({ label, content, defaultOpen = false }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <div className={styles['bd-accordion']}>
      <button
        className={styles['bd-accordion-header']}
        onClick={toggle}
        aria-expanded={open}
        aria-controls={`accordion-${label}`}
      >
        {label}
        <span
          className={`${styles['bd-accordion-icon']} ${open ? styles['bd-accordion-icon-open'] : ''}`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      {open && (
        <div
          id={`accordion-${label}`}
          className={styles['bd-accordion-body']}
          role="region"
        >
          {content}
        </div>
      )}
    </div>
  );
}

export default function BookNotes({ notes }: BookNotesProps) {
  return (
    <section className={styles['bd-notes-section']} aria-label="Book notes">
      {/* Header with emblem */}
      <div className={styles['bd-notes-header']}>
        <div className={styles['bd-notes-emblem']} aria-hidden="true">📚</div>
        <h2 className={styles['bd-notes-title']}>Book notes</h2>
      </div>

      <AccordionItem
        label="Why we chose it"
        content={notes.whyWeChoseIt}
        defaultOpen={false}
      />
      <AccordionItem
        label="Content warnings"
        content={notes.contentWarnings}
        defaultOpen={false}
      />
    </section>
  );
}
