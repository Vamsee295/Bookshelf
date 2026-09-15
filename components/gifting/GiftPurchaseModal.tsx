'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../../app/gifting/gifting.module.css';

export interface GiftPlan {
  id: string;
  duration: string;
  booksCount: string;
  priceUS: string;
  priceCA: string;
}

interface GiftPurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: GiftPlan | null;
  country: 'US' | 'CA';
}

export default function GiftPurchaseModal({
  isOpen,
  onClose,
  selectedPlan,
  country,
}: GiftPurchaseModalProps) {
  const [recipientName, setRecipientName] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [senderName, setSenderName] = useState('');
  const [giftMessage, setGiftMessage] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  if (!isOpen || !selectedPlan) return null;

  const currentPrice = country === 'US' ? selectedPlan.priceUS : selectedPlan.priceCA;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmationCode('BOOK-' + Math.random().toString(36).substring(2, 8).toUpperCase());
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className={styles.modalBackdrop} onClick={onClose}>
        <motion.div
          className={styles.modalCard}
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            type="button"
            className={styles.modalCloseBtn}
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '24px 8px' }}>
              <div
                style={{
                  fontSize: '4rem',
                  marginBottom: '16px',
                  animation: 'tagWiggle 2s infinite',
                }}
              >
                🎉
              </div>
              <h3 className={styles.modalTitle} style={{ fontSize: '2.2rem' }}>
                Gift Card Ready!
              </h3>
              <p style={{ fontSize: '1.1rem', color: '#444', margin: '12px 0 24px' }}>
                Your <strong>{selectedPlan.duration}</strong> gift subscription ({selectedPlan.booksCount}) has been scheduled for <strong>{recipientName || 'your friend'}</strong> ({recipientEmail || 'recipient email'}).
              </p>
              <div
                style={{
                  background: '#FFDDFB',
                  border: '2px dashed #080909',
                  borderRadius: '20px',
                  padding: '20px',
                  marginBottom: '28px',
                  textAlign: 'left',
                }}
              >
                <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: '#666' }}>
                  Confirmation Code
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '0.08em', margin: '4px 0 12px' }}>
                  {confirmationCode}
                </div>
                <div style={{ fontSize: '0.9rem', color: '#333' }}>
                  An email confirmation with redemption instructions has been prepared.
                </div>
              </div>
              <button
                type="button"
                className={styles.modalConfirmBtn}
                onClick={handleReset}
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <div className={styles.modalHeader}>
                <span className={styles.modalBadge}>E-Gift Subscription</span>
                <h3 className={styles.modalTitle}>Give the Gift of Reading</h3>
                <p style={{ margin: 0, color: '#555', fontSize: '0.95rem' }}>
                  Order now and we will instantly email an e-gift card with easy redemption instructions.
                </p>
              </div>

              <div className={styles.modalPlanSummary}>
                <div>
                  <div style={{ fontWeight: 900, fontSize: '1.2rem', color: '#080909' }}>
                    {selectedPlan.duration} ({selectedPlan.booksCount})
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#666' }}>
                    Country: {country === 'US' ? 'United States' : 'Canada'}
                  </div>
                </div>
                <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#FF007A' }}>
                  {currentPrice}
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className={styles.modalFormGroup}>
                  <label className={styles.modalLabel}>Recipient’s Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya Chen"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className={styles.modalInput}
                  />
                </div>

                <div className={styles.modalFormGroup}>
                  <label className={styles.modalLabel}>Recipient’s Email</label>
                  <input
                    type="email"
                    required
                    placeholder="maya@example.com"
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    className={styles.modalInput}
                  />
                </div>

                <div className={styles.modalFormGroup}>
                  <label className={styles.modalLabel}>Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className={styles.modalInput}
                  />
                </div>

                <div className={styles.modalFormGroup}>
                  <label className={styles.modalLabel}>Gift Message (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Happy reading! Hope you find your next favourite novel."
                    value={giftMessage}
                    onChange={(e) => setGiftMessage(e.target.value)}
                    className={styles.modalTextarea}
                  />
                </div>

                <div className={styles.modalFormGroup}>
                  <label className={styles.modalLabel}>Delivery Date</label>
                  <input
                    type="date"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    className={styles.modalInput}
                  />
                </div>

                <button type="submit" className={styles.modalConfirmBtn}>
                  Continue to Checkout — {currentPrice}
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
