'use client';

import React from 'react';
import Navbar from '../../components/navigation/Navbar';
import GiftingHero from '../../components/gifting/GiftingHero';
import GiftSubscriptionSection from '../../components/gifting/GiftSubscriptionSection';
import GiftFeatures from '../../components/gifting/GiftFeatures';
import GiftCTA from '../../components/gifting/GiftCTA';
import GiftBookBox from '../../components/gifting/GiftBookBox';
import GiftAppCTA from '../../components/gifting/GiftAppCTA';
import GiftFAQ from '../../components/gifting/GiftFAQ';
import GiftFooter from '../../components/gifting/GiftFooter';
import styles from './gifting.module.css';

export default function GiftingClient() {
  return (
    <div className={styles.giftPage}>
      {/* Universal Navigation (shared with the landing page) */}
      <Navbar />

      <main>
        {/* Section 1: Hero — “A gift so good you’re going to want to borrow it” */}
        <GiftingHero />

        {/* Section 2: Subscriptions + Country Switch */}
        <GiftSubscriptionSection />

        {/* Section 3: “A gift outside of the box” — 3 Alternating Feature Blocks */}
        <GiftFeatures />

        {/* Section 4: CTA — “Want to join the Club? Sign-up now!” */}
        <GiftCTA />

        {/* Section 5: Decorative Aardvark book-box centerpiece */}
        <GiftBookBox />

        {/* Section 6: App section — “Made for readers by readers” */}
        <GiftAppCTA />

        {/* Section 7: Gifting FAQ Accordion */}
        <GiftFAQ />

        {/* Section 8: Final CTA */}
        <GiftCTA />
      </main>

      {/* Section 9: Editorial Brand Footer + Newsletter */}
      <GiftFooter />
    </div>
  );
}