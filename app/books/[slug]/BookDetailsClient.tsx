'use client';

import React from 'react';
import { BookDetails } from '../../../data/books/types';
import { resolveSlugs } from '../../../data/books/index';
import styles from './book-details.module.css';

import BookDetailsNav from '../../../components/book-details/BookDetailsNav';
import BookHero from '../../../components/book-details/BookHero';
import BookBadges from '../../../components/book-details/BookBadges';
import BookDescription from '../../../components/book-details/BookDescription';
import BookReviews from '../../../components/book-details/BookReviews';
import BookTaste from '../../../components/book-details/BookTaste';
import BookNotes from '../../../components/book-details/BookNotes';
import SimilarTitles from '../../../components/book-details/SimilarTitles';
import BookDetailsFooter from '../../../components/book-details/BookDetailsFooter';

interface BookDetailsClientProps {
  book: BookDetails;
}

export default function BookDetailsClient({ book }: BookDetailsClientProps) {
  const similarBooks = resolveSlugs(book.similarTitles);

  return (
    <div className={styles['bd-page']}>
      {/* 1. Navigation */}
      <BookDetailsNav currentSlug={book.slug} />

      {/* 2. Hero (title, author, genres, overlapping cover) */}
      <BookHero book={book} />

      {/* 3. Editorial Badges */}
      <BookBadges badges={book.badges} />

      {/* 4. Description + Editorial Text */}
      <BookDescription
        description={book.description}
        editorialSections={book.editorialSections}
      />

      {/* 5. "Don't just take our word for it" */}
      <BookReviews reviews={book.reviews} />

      {/* 6. "Get a taste" Excerpt */}
      <BookTaste excerpt={book.excerpt} theme={book.theme} title={book.title} />

      {/* 7. Book Notes (accordions) */}
      <BookNotes notes={book.notes} />

      {/* 8. Similar Titles Carousel */}
      <SimilarTitles books={similarBooks} />

      {/* 9. Footer */}
      <BookDetailsFooter />
    </div>
  );
}
