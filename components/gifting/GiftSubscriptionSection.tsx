'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../../app/gifting/gifting.module.css';

interface GiftPlan {
  id: string;
  duration: string;
  booksCount: string;
  priceUS: string;
  priceCA: string;
  stripeUS: string;
  stripeCA: string;
}

const GIFT_PLANS: GiftPlan[] = [
  {
    id: 'plan-1m',
    duration: '1-Month',
    booksCount: '3 books',
    priceUS: '$37.99',
    priceCA: 'C$53.99',
    stripeUS: 'https://buy.stripe.com/8wM2aka35cgR1zy6os',
    stripeCA: 'https://buy.stripe.com/7sIdT25MP94Fcec289',
  },
  {
    id: 'plan-3m',
    duration: '3-Month',
    booksCount: '9 books',
    priceUS: '$113.99',
    priceCA: 'C$161.99',
    stripeUS: 'https://buy.stripe.com/fZe6qA3EH2Ghcec28e',
    stripeCA: 'https://buy.stripe.com/00gg1a7UXgx7dig3cf',
  },
  {
    id: 'plan-6m',
    duration: '6-Month',
    booksCount: '18 books',
    priceUS: '$227.99',
    priceCA: 'C$323.99',
    stripeUS: 'https://buy.stripe.com/dR69CMgrt4Op7XWcN7',
    stripeCA: 'https://buy.stripe.com/aEU7uEgrt0y97XW9AW',
  },
  {
    id: 'plan-12m',
    duration: '12-Month',
    booksCount: '36 books',
    priceUS: '$455.99',
    priceCA: 'C$647.99',
    stripeUS: 'https://buy.stripe.com/28o5mw4IL0y9fqo14r',
    stripeCA: 'https://buy.stripe.com/3cs02c8Z11Cda647sQ',
  },
];

export default function GiftSubscriptionSection() {
  const [country, setCountry] = useState<'US' | 'CA'>('US');

  return (
    <section className={styles.subscriptionSection} id="subscriptions">
      <div className={styles.subscriptionContainer}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionHeading}>Our subscriptions</h2>
          <p className={styles.sectionSubhead}>
            Each month includes 3 brand-new hardcover releases + collectible bookmark and challenge card.
          </p>

          {/* Country Currency Switch */}
          <div className={styles.countrySwitchWrap}>
            <button
              type="button"
              className={`${styles.countryTab} ${country === 'US' ? styles.countryTabActive : ''}`}
              onClick={() => setCountry('US')}
              aria-pressed={country === 'US'}
            >
              🇺🇸 USA
            </button>
            <button
              type="button"
              className={`${styles.countryTab} ${country === 'CA' ? styles.countryTabActiveCanada : ''}`}
              onClick={() => setCountry('CA')}
              aria-pressed={country === 'CA'}
            >
              🇨🇦 Canada
            </button>
          </div>
        </motion.div>

        {/* Subscription 4 Cards Grid */}
        <div className={styles.planGrid}>
          {GIFT_PLANS.map((plan, idx) => {
            const isPopular = plan.id === 'plan-3m';
            const price = country === 'US' ? plan.priceUS : plan.priceCA;
            const stripeUrl = country === 'US' ? plan.stripeUS : plan.stripeCA;

            return (
              <motion.div
                key={plan.id}
                className={`${styles.planCard} ${isPopular ? styles.planCardFeatured : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {isPopular && (
                  <div className={styles.planBadgeTop}>
                    Most Popular
                  </div>
                )}

                <div>
                  <h3 className={styles.planDuration}>
                    {plan.duration} Subscription
                  </h3>
                  <div className={styles.planBookCount}>
                    ({plan.booksCount})
                  </div>
                </div>

                <div className={styles.planPriceWrap}>
                  <div className={styles.planPrice}>{price}</div>
                  <div className={styles.planPriceSub}>
                    {country === 'US' ? 'USD / one-time gift' : 'CAD / one-time gift'}
                  </div>
                </div>

                <a
                  href={stripeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.planBuyBtn}
                >
                  Buy gift!
                  <svg width="12" height="12" viewBox="0 0 14 13" fill="none" aria-hidden="true">
                    <path
                      d="M13.58 5.66v.845l-5.994 5.66-1.71-2.063a61.427 61.427 0 0 1 4.265-2.988l-.02-.078c-1.828.196-4.107.294-6.387.294H0V4.835h3.734c2.28 0 4.56.098 6.387.294l.02-.059a67.638 67.638 0 0 1-4.265-3.006L7.586 0l5.994 5.66Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
