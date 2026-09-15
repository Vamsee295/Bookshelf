import type { Metadata } from 'next';
import FaqClient from './FaqClient';

export const metadata: Metadata = {
  title: 'FAQ — BookOrbit Book Club',
  description:
    'The archive of all BookOrbit knowledge. Find answers to questions about membership, shipping, books, gifting, and more.',
  keywords: [
    'bookorbit faq',
    'book club questions',
    'book subscription faq',
    'membership help',
    'shipping info',
    'bookorbit support',
  ],
  openGraph: {
    title: 'FAQ — BookOrbit Book Club',
    description:
      'Common questions answered. Everything you need to know about BookOrbit membership, books, and gifting.',
    type: 'website',
  },
};

export default function FaqPage() {
  return <FaqClient />;
}
