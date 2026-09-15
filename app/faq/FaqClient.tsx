'use client';

import React from 'react';
import Navbar from '../../components/navigation/Navbar';
import FaqHero from '../../components/faq/FaqHero';
import FaqContent from '../../components/faq/FaqContent';
import FaqTicker from '../../components/faq/FaqTicker';
import FaqAppCTA from '../../components/faq/FaqAppCTA';
import FaqFooter from '../../components/faq/FaqFooter';
import styles from './faq.module.css';

export default function FaqClient() {
  return (
    <div className={styles.faqPage}>
      {/* Universal Navigation */}
      <Navbar />

      <main>
        {/* Hero — "Common questions" with cyan blob */}
        <FaqHero />

        {/* Two-column FAQ: Sticky Sidebar + Accordion Categories */}
        <FaqContent />

        {/* Promotional Marquee Ticker */}
        <FaqTicker />

        {/* "Think inside the box" App CTA */}
        <FaqAppCTA />
      </main>

      {/* Dark Purple Footer */}
      <FaqFooter />
    </div>
  );
}
