'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from '../../app/faq/faq.module.css';

export default function FaqHero() {
  const blobRef = useRef<SVGSVGElement>(null);

  // Subtle parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!blobRef.current) return;
      const y = window.scrollY * 0.15;
      blobRef.current.style.transform = `translateY(${y}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.heroSection}>
      {/* Organic Blob Background */}
      <div className={styles.heroBlobWrap}>
        <svg
          ref={blobRef}
          viewBox="0 0 900 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.heroBlob}
          aria-hidden="true"
        >
          <ellipse cx="450" cy="300" rx="440" ry="290" fill="#A4F6F8" />
          <ellipse cx="160" cy="180" rx="200" ry="160" fill="#B5F9FA" />
          <ellipse cx="750" cy="420" rx="180" ry="140" fill="#C8FBFC" />
        </svg>
      </div>

      <div className={styles.heroInner}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className={styles.heroTitle}>Common questions</h1>
          <p className={styles.heroSubtitle}>
            The archive of all BookOrbit knowledge.
          </p>
        </motion.div>

        {/* Decorative circular badge */}
        <motion.div
          className={styles.heroCircleBadge}
          initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" width="120" height="120">
            <circle cx="60" cy="60" r="56" stroke="#0E0E10" strokeWidth="2" />
            <circle cx="60" cy="60" r="48" fill="#0E0E10" />
            <text
              x="60"
              y="52"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#A4F6F8"
              fontSize="9"
              fontFamily="var(--font-body)"
              fontWeight="700"
              letterSpacing="2"
              textLength="80"
            >
              BOOK · ORBIT ·
            </text>
            <text
              x="60"
              y="66"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#A4F6F8"
              fontSize="9"
              fontFamily="var(--font-body)"
              fontWeight="700"
              letterSpacing="2"
              textLength="80"
            >
              FAQ · 2026 ·
            </text>
            {/* Inner tick marks */}
            {Array.from({ length: 24 }).map((_, i) => {
              const angle = (i / 24) * 360;
              const rad = (angle * Math.PI) / 180;
              const x1 = +(60 + 44 * Math.cos(rad)).toFixed(2);
              const y1 = +(60 + 44 * Math.sin(rad)).toFixed(2);
              const x2 = +(60 + 40 * Math.cos(rad)).toFixed(2);
              const y2 = +(60 + 40 * Math.sin(rad)).toFixed(2);
              return (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#A4F6F8" strokeWidth="1" opacity="0.5" />
              );
            })}
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
