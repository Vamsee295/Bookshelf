'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import styles from '../../app/all-books/all-books.module.css';

const PERKS = [
  { icon: '📚', label: 'Up to 3 books/month' },
  { icon: '🚚', label: 'Free shipping' },
  { icon: '🔖', label: 'Expert curation' },
  { icon: '🤝', label: 'No commitment' },
];

export default function ThinkInsideBox() {
  const blockVariants: Variants = {
    hidden: { left: 0, right: '100%' },
    visible: { 
      left: ['0%', '0%', '100%'], 
      right: ['100%', '0%', '0%'],
      transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1], times: [0, 0.5, 1] }
    }
  };

  const textVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.6 } }
  };

  const fadeVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1, ease: 'easeOut' } }
  };
  return (
    <section className={styles['ab-think']} id="think-inside-box">
      <div className={styles['ab-think-inner']}>
        <div className={styles['ab-think-label']}>
          📦 BOOKORBIT
        </div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          style={{ position: 'relative', display: 'inline-block' }}
        >
          <motion.div 
            variants={blockVariants}
            style={{ 
              position: 'absolute', 
              top: 0, 
              bottom: 0, 
              backgroundColor: '#1C1C1C', 
              zIndex: 10 
            }}
          />
          <motion.h2 variants={textVariants} className={styles['ab-think-title']} style={{ margin: 0 }}>
            Think inside<br />the box
          </motion.h2>
        </motion.div>
        <motion.p variants={fadeVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className={styles['ab-think-sub']}>
          Every month, a curated box of hardcovers lands on your doorstep — handpicked by our editorial team so you don&rsquo;t have to spend hours browsing.
        </motion.p>
        <motion.div variants={fadeVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className={styles['ab-think-perks']}>
          {PERKS.map((p) => (
            <div key={p.label} className={styles['ab-think-perk']}>
              <span className={styles['ab-think-perk-icon']}>{p.icon}</span>
              {p.label}
            </div>
          ))}
        </motion.div>
        <motion.a
          variants={fadeVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
          href="https://app.bookorbitbookclub.com/books"
          target="_blank"
          rel="noopener noreferrer"
          className={styles['ab-think-btn']}
        >
          Build your box
          <svg width="11" height="10" viewBox="0 0 14 13" fill="none">
            <path d="M13.58 5.66v.845l-5.994 5.66-1.71-2.063a61.427 61.427 0 0 1 4.265-2.988l-.02-.078c-1.828.196-4.107.294-6.387.294H0V4.835h3.734c2.28 0 4.56.098 6.387.294l.02-.059a67.638 67.638 0 0 1-4.265-3.006L7.586 0l5.994 5.66Z" fill="currentColor"/>
          </svg>
        </motion.a>
      </div>
    </section>
  );
}
