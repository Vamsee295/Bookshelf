export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "How does the Aardvark Book Club work?",
    answer: "Each month, we curate a selection of handpicked hardcover books across a variety of genres. You choose 1 to 3 titles, and we ship them directly to your door in our signature Aardvark box — beautifully packaged and ready to read.",
  },
  {
    id: "faq-2",
    question: "How much does it cost?",
    answer: "Plans start at just $16.99/month for one book. Your first book is only $1 with code SUMMER. Shipping is always free within the USA and Canada. No hidden fees, no commitments.",
  },
  {
    id: "faq-3",
    question: "Can I skip a month or cancel anytime?",
    answer: "Absolutely! You can skip any month or cancel your membership at any time through your account dashboard. There are no cancellation fees or penalties.",
  },
  {
    id: "faq-4",
    question: "What genres are available?",
    answer: "We cover a wide range including Literary Fiction, Romance, Thriller, Horror, Fantasy, Science Fiction, Gothic Fiction, Historical Fiction, Magical Realism, Contemporary Fiction, and more. New genres are added regularly based on member requests.",
  },
  {
    id: "faq-5",
    question: "Do you ship internationally?",
    answer: "Currently, we ship to the USA and Canada with free shipping on all orders. We're working on expanding to more countries soon — stay tuned!",
  },
  {
    id: "faq-6",
    question: "Can I gift a subscription?",
    answer: "Yes! Gift subscriptions are one of our most popular options. Choose a 3, 6, or 12-month plan, and we'll send a beautiful personalized email to the recipient on the date of your choosing.",
  },
  {
    id: "faq-7",
    question: "What if I don't like a book?",
    answer: "That's part of the adventure! Our expert curators select books designed to expand your reading horizons. But if you'd like to exchange a pick, reach out within 7 days of delivery and we'll sort it out.",
  },
];
