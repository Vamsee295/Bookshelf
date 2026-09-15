'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import styles from '../../app/gifting/gifting.module.css';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What does a gift subscription include?',
    answer:
      'Our boxes include 3 hardcover new releases, a bookmark per book and a postcard with a monthly challenge. Each month of a gift subscription includes 3 books. For example, 3 months = 9 books.',
  },
  {
    id: 'faq-2',
    question: 'How do I give a subscription?',
    answer:
      'When you buy a gift subscription you are instantly emailed an e-gift card to print out or forward to the recipient.',
  },
  {
    id: 'faq-3',
    question: 'How does the recipient redeem the gift subscription?',
    answer:
      'The e-gift card includes a confirmation number and instructions for redeeming the gift.',
  },
  {
    id: 'faq-4',
    question: "What happens to the recipient's account when the gift ends?",
    answer:
      "The gift recipient can choose to sign up for a regular monthly membership if they'd like.",
  },
  {
    id: 'faq-5',
    question: 'Can I gift to an existing Aardvark member?',
    answer:
      "Yes, you can give a gift subscription to an existing member and we'll apply it to their account.",
  },
];

export default function GiftFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection} id="faq">
      <div className={styles.faqHeader}>
        <motion.h2
          className={styles.faqTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Gifting FAQ
        </motion.h2>
      </div>

      <div className={styles.faqList}>
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <motion.div
              key={item.id}
              className={styles.faqItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <button
                type="button"
                className={styles.faqButton}
                onClick={() => toggleFAQ(idx)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span>{item.question}</span>
                <span
                  className={styles.faqIcon}
                  style={{
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  +
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className={styles.faqBody}>{item.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <div className={styles.faqShowAllLink}>
        <Link href="/faq" className={styles.showAllFaqBtn}>
          Show all FAQ
          <svg width="14" height="14" viewBox="0 0 14 13" fill="none" aria-hidden="true">
            <path d="M0 6.34h5.994l1.71-1.71a61.427 61.427 0 0 0 2.988 4.265l.078-.02c-.196-1.828-.294-4.107-.294-6.387V0H6.742c0 2.28-.098 4.56-.294 6.387l.059.02a67.638 67.638 0 0 0 3.006-4.265L5.66 6.5l-5.66 5.994Z" fill="currentColor" />
          </svg>
        </Link>
      </div>
    </section>
  );
}