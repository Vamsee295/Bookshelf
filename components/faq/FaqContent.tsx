'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FAQ_CATEGORIES, type FAQCategory } from '../../lib/faqData';
import styles from '../../app/faq/faq.module.css';

// ─── Accordion Item ────────────────────────────────────────────────────────────
interface AccordionItemProps {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  categoryColor: string;
}

function AccordionItem({
  id,
  question,
  answer,
  isOpen,
  onToggle,
  categoryColor,
}: AccordionItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`${styles.accordionItem} ${isOpen ? styles.accordionItemOpen : ''}`}
      style={{ '--category-color': categoryColor } as React.CSSProperties}
    >
      <button
        type="button"
        className={styles.accordionTrigger}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
        id={`faq-question-${id}`}
      >
        <span className={styles.accordionQuestion}>{question}</span>
        <span className={styles.accordionIcon} aria-hidden="true">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className={styles.accordionIconSvg}
            style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
          >
            <path
              d="M7.84 18.8v-7H1.12V7.88h6.72V.96h4.32v6.92h6.76v3.92h-6.76v7z"
              fill="currentColor"
            />
          </svg>
        </span>
      </button>

      <div
        id={`faq-answer-${id}`}
        role="region"
        aria-labelledby={`faq-question-${id}`}
        className={styles.accordionContent}
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight ?? 400}px` : '0px',
        }}
      >
        <p className={styles.accordionAnswer}>{answer}</p>
      </div>
    </div>
  );
}

// ─── Category Section ──────────────────────────────────────────────────────────
interface CategorySectionProps {
  category: FAQCategory;
}

function CategorySection({ category }: CategorySectionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = useCallback(
    (id: string) => setOpenId((prev) => (prev === id ? null : id)),
    []
  );

  return (
    <section
      id={`faq-cat-${category.id}`}
      className={styles.categorySection}
      aria-labelledby={`faq-cat-title-${category.id}`}
    >
      <div className={styles.categoryHeader}>
        <span
          className={styles.categoryPill}
          style={{
            background: category.color,
            color: '#0E0E10',
          }}
        >
          {category.emoji} {category.label}
        </span>
      </div>

      <div className={styles.accordionList} role="list">
        {category.items.map((item) => (
          <AccordionItem
            key={item.id}
            id={item.id}
            question={item.question}
            answer={item.answer}
            isOpen={openId === item.id}
            onToggle={() => toggle(item.id)}
            categoryColor={category.color}
          />
        ))}
      </div>
    </section>
  );
}

// ─── Sidebar Nav ───────────────────────────────────────────────────────────────
interface SidebarNavProps {
  activeId: string;
}

function SidebarNav({ activeId }: SidebarNavProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(`faq-cat-${id}`);
    if (!el) return;
    const offset = 100;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <nav className={styles.sidebar} aria-label="FAQ Categories">
      <p className={styles.sidebarLabel}>Categories</p>
      <ul className={styles.sidebarList} role="list">
        {FAQ_CATEGORIES.map((cat) => {
          const isActive = activeId === cat.id;
          return (
            <li key={cat.id}>
              <button
                type="button"
                onClick={() => scrollTo(cat.id)}
                className={`${styles.sidebarBtn} ${isActive ? styles.sidebarBtnActive : ''}`}
                style={
                  isActive
                    ? { background: cat.color, color: '#0E0E10' }
                    : undefined
                }
                aria-current={isActive ? 'true' : undefined}
              >
                <span className={styles.sidebarEmoji}>{cat.emoji}</span>
                {cat.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

// ─── Main FAQ Content ──────────────────────────────────────────────────────────
export default function FaqContent() {
  const [activeId, setActiveId] = useState<string>(FAQ_CATEGORIES[0].id);

  // IntersectionObserver to update active sidebar item on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace('faq-cat-', '');
            setActiveId(id);
          }
        }
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );

    FAQ_CATEGORIES.forEach((cat) => {
      const el = document.getElementById(`faq-cat-${cat.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.contentSection}>
      <div className={styles.contentInner}>
        {/* LEFT — Sticky Sidebar */}
        <div className={styles.sidebarWrap}>
          <SidebarNav activeId={activeId} />
        </div>

        {/* RIGHT — Accordion Categories */}
        <div className={styles.accordionWrap}>
          {FAQ_CATEGORIES.map((cat) => (
            <CategorySection key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
