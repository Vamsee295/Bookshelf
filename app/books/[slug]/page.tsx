// Dynamic route: /books/[slug]
// Server component — resolves slug → BookDetails, renders client wrapper or 404

import { Metadata } from 'next';
import Link from 'next/link';
import { getBookBySlug, getAllBookSlugs } from '../../../data/books/index';
import BookDetailsClient from './BookDetailsClient';
import styles from './book-details.module.css';

// Next.js 15: params is a Promise — must be awaited
interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all known books
export async function generateStaticParams() {
  const slugs = getAllBookSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate per-book metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) {
    return {
      title: 'Book Not Found — Aardvark Book Club',
      description: 'This book could not be found in our catalogue.',
    };
  }

  return {
    title: `${book.title} by ${book.author} — Aardvark Book Club`,
    description: book.description,
    openGraph: {
      title: `${book.title} by ${book.author}`,
      description: book.description,
      images: [{ url: book.cover, alt: `${book.title} cover` }],
    },
  };
}

export default async function BookPage({ params }: Props) {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  // ── 404 State ──────────────────────────────────────────────
  if (!book) {
    return (
      <div className={styles['bd2-not-found']}>
        <div className={styles['bd2-not-found-emoji']}>📚</div>
        <h1 className={styles['bd2-not-found-title']}>Book not found</h1>
        <p className={styles['bd2-not-found-sub']}>
          We couldn&rsquo;t find a book with that title in our catalogue. It may not have been added yet.
        </p>
        <Link href="/all-books" className={styles['bd2-not-found-link']}>
          ← Browse all books
        </Link>
      </div>
    );
  }

  // ── Book Details ───────────────────────────────────────────
  return <BookDetailsClient book={book} />;
}
