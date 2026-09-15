'use client';

import React, { useState } from 'react';
import { monthlyBooks } from '../../data/allBooksData';
import AllBooksHeader from '../../components/all-books/AllBooksHeader';
import MonthSection from '../../components/all-books/MonthSection';
import ArchwrightExclusive from '../../components/all-books/ArchwrightExclusive';
import PromoSection from '../../components/all-books/PromoSection';
import ThinkInsideBox from '../../components/all-books/ThinkInsideBox';
import MembersChoice from '../../components/all-books/MembersChoice';
import BooksFAQ from '../../components/all-books/BooksFAQ';
import AllBooksFooter from '../../components/all-books/AllBooksFooter';
import styles from './all-books.module.css';

export default function AllBooksClient() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  return (
    <div className={styles['ab-page']}>
      {/* Sticky nav + hero + filter */}
      <AllBooksHeader
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      {/* Monthly catalogue sections */}
      <main className={styles['ab-main']}>
        {monthlyBooks.map((monthData) => (
          <MonthSection
            key={monthData.month}
            data={monthData}
            activeFilter={activeFilter}
          />
        ))}

        {/* BookOrbit Exclusive */}
        <ArchwrightExclusive />

        {/* Yellow promo banner */}
        <PromoSection />

        {/* Think inside the box */}
        <ThinkInsideBox />

        {/* Members' Choice Winners */}
        <MembersChoice />

        {/* Books FAQ */}
        <BooksFAQ />
      </main>

      {/* Footer */}
      <AllBooksFooter />
    </div>
  );
}
