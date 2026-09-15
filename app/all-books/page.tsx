import type { Metadata } from 'next';
import AllBooksClient from './AllBooksClient';

export const metadata: Metadata = {
  title: 'All Books — BookOrbit Book Club',
  description:
    'Browse the complete BookOrbit catalogue. Every month we drop brand-new curated hardcovers — Horror, Literary Fiction, Romance, Thriller, Fantasy, and more. Find your next obsession.',
  keywords: [
    'book club',
    'hardcover books',
    'monthly book box',
    'book catalogue',
    'horror books',
    'literary fiction',
    'bookorbit',
    'all books',
  ],
  openGraph: {
    title: 'All Books — BookOrbit Book Club',
    description: 'Browse the complete BookOrbit catalogue. New hardcovers every month.',
    type: 'website',
  },
};

export default function AllBooksPage() {
  return <AllBooksClient />;
}
