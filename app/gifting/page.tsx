import type { Metadata } from 'next';
import GiftingClient from './GiftingClient';

export const metadata: Metadata = {
  title: 'Gifting — Aardvark Book Club',
  description:
    'A gift so good you’re going to want to borrow it. Gift a 1, 3, 6, or 12-month Aardvark subscription. Curated hardcover new releases delivered right to their doorstep.',
  keywords: [
    'book club gift',
    'gift subscription',
    'book subscription gift',
    'hardcover book box gift',
    'gift outside the box',
    'aardvark gifting',
    'readers gift',
  ],
  openGraph: {
    title: 'Gifting — Aardvark Book Club',
    description:
      'A gift so good you’re going to want to borrow it. Give the gift of curated hardcover books.',
    type: 'website',
  },
};

export default function GiftingPage() {
  return <GiftingClient />;
}
