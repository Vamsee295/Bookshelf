import React from 'react';
import { membersChoiceWinners } from '../../data/allBooksData';
import styles from '../../app/all-books/all-books.module.css';

const RANK_ORDER = [2, 1, 3] as const; // display: silver, gold, bronze for visual podium

export default function MembersChoice() {
  // Sort to render gold in center
  const sorted = RANK_ORDER.map((r) => membersChoiceWinners.find((w) => w.rank === r)!);

  return (
    <section className={styles['ab-members']} id="members-choice">
      <div className={styles['ab-members-inner']}>
        <div className={styles['ab-members-badge']}>
          🏆 Members&rsquo; Choice
        </div>
        <h2 className={styles['ab-members-title']}>
          Members&rsquo; Choice<br />Winners
        </h2>

        <div className={styles['ab-members-podium']}>
          {sorted.map((winner) => (
            <div
              key={winner.rank}
              className={styles['ab-members-item']}
              style={{ transform: winner.rank === 1 ? 'translateY(-1rem)' : 'none' }}
            >
              <div className={styles['ab-members-rank']}>{winner.emoji}</div>
              <div
                className={styles['ab-members-cover-wrap']}
                style={{ position: 'relative' }}
              >
                {winner.rank === 1 && (
                  <span
                    className={styles['ab-members-confetti']}
                    style={{ top: '-2rem' }}
                  >
                    🎉
                  </span>
                )}
                <img
                  src={winner.coverUrl}
                  alt={winner.title}
                  className={styles['ab-members-cover']}
                  loading="lazy"
                  style={{ borderColor: winner.bgColor }}
                />
              </div>
              <div className={styles['ab-members-name']}>{winner.title}</div>
              <div className={styles['ab-members-author']}>{winner.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
