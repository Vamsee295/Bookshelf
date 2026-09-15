export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  label: string;
  color: string;       // CSS custom property name or hex
  colorBg: string;     // Light tint for active/hover background
  emoji?: string;
  items: FAQItem[];
}

export const FAQ_CATEGORIES: FAQCategory[] = [
  {
    id: 'membership',
    label: 'Membership',
    color: '#A4F6F8',
    colorBg: '#E8FEFF',
    emoji: '📚',
    items: [
      {
        id: 'mem-1',
        question: 'How much does membership cost, my wallet is asking?',
        answer:
          'In the USA, membership is $17.99 USD/month (accounts for 1 book) and $10.99 for each extra book. In Canada, membership is $25.99 CAD/month (accounts for 1 book) and $15.99 for each extra book.',
      },
      {
        id: 'mem-2',
        question: 'How do I join BookOrbit?',
        answer:
          'You can sign up for membership by downloading our mobile app or by using our website. Place your first order to kickstart your membership!',
      },
      {
        id: 'mem-3',
        question: 'Can I pause or cancel my membership?',
        answer:
          'Yes! You can pause your membership for up to 3 months or cancel at any time through the app or website. There are no cancellation fees.',
      },
      {
        id: 'mem-4',
        question: 'How many books can I get per month?',
        answer:
          'Your base membership includes 1 book per month. You can add up to 2 more books at a discounted rate for a maximum of 3 books per month.',
      },
      {
        id: 'mem-5',
        question: 'What happens if I forget to make a selection?',
        answer:
          "If you forget to choose your book by the monthly deadline, we will automatically send you our editors' pick of the month. You can always swap it out before it ships!",
      },
    ],
  },
  {
    id: 'shipping',
    label: 'Shipping',
    color: '#B9F5D0',
    colorBg: '#EDFDF5',
    emoji: '📦',
    items: [
      {
        id: 'ship-1',
        question: 'What countries does BookOrbit ship to?',
        answer:
          'We ship to the USA & Canada! Please contact support at info@bookorbit.com if you are mailing to Puerto Rico, an APO/FPO address, or a PO box so we can set up your account.',
      },
      {
        id: 'ship-2',
        question: 'When will my books ship?',
        answer:
          'Books ship within the first two weeks of each month. You will receive a shipping confirmation email with tracking information as soon as your order leaves our warehouse.',
      },
      {
        id: 'ship-3',
        question: 'How long does delivery take?',
        answer:
          'Delivery typically takes 3–7 business days within the USA and 5–10 business days within Canada after your order has shipped.',
      },
      {
        id: 'ship-4',
        question: 'What if my book arrives damaged?',
        answer:
          'We are so sorry to hear that! Please take a photo and email us at support@bookorbit.com within 7 days of receiving your order and we will make it right.',
      },
    ],
  },
  {
    id: 'books',
    label: 'Books',
    color: '#FD48F2',
    colorBg: '#FFDDFB',
    emoji: '📖',
    items: [
      {
        id: 'book-1',
        question: 'How are books selected?',
        answer:
          'Our editorial team curates every selection. We focus on debut authors, hidden gems, and titles that spark great conversations. Members can also vote on upcoming picks through the app.',
      },
      {
        id: 'book-2',
        question: 'Are the books always hardcover?',
        answer:
          'Yes — we exclusively send new hardcover editions. You will always be the first to read the freshest releases.',
      },
      {
        id: 'book-3',
        question: 'Can I choose my own books?',
        answer:
          'Absolutely! While we curate a monthly selection, you can always browse our full catalog in the app and swap your monthly pick for any available title.',
      },
      {
        id: 'book-4',
        question: 'What genres do you cover?',
        answer:
          'We cover a wide range — literary fiction, thriller, romance, science fiction, fantasy, narrative non-fiction, and more. Each book is tagged by genre so you can easily filter.',
      },
      {
        id: 'book-5',
        question: 'Do you include exclusive content with the books?',
        answer:
          'Many of our selections include a custom BookOrbit bookplate, a letter from the author, or exclusive reading guide printed inside the front cover.',
      },
    ],
  },
  {
    id: 'gifting',
    label: 'Gifting',
    color: '#C4B5FD',
    colorBg: '#EDE9FF',
    emoji: '🎁',
    items: [
      {
        id: 'gift-1',
        question: 'Can I gift a BookOrbit membership?',
        answer:
          'Yes! Gift memberships are available in 1, 3, 6, and 12-month options. The recipient receives a beautiful gift box with their first book and a personalized card.',
      },
      {
        id: 'gift-2',
        question: 'How does the gifting process work?',
        answer:
          "Purchase a gift membership on our gifting page, choose the duration, and enter the recipient's email address. They will receive a welcome email on the date you choose and can activate their account immediately.",
      },
      {
        id: 'gift-3',
        question: 'Can I schedule a gift for a future date?',
        answer:
          'Yes! When purchasing a gift, you can choose to send the gift email immediately or schedule it for a specific date — perfect for birthdays and holidays.',
      },
      {
        id: 'gift-4',
        question: 'What happens after the gift period ends?',
        answer:
          'The recipient will receive a reminder email before the gift ends. They can choose to continue with their own paid subscription or let it lapse — no automatic charges.',
      },
    ],
  },
  {
    id: 'general',
    label: 'General',
    color: '#FFD24A',
    colorBg: '#FFFBEA',
    emoji: '✨',
    items: [
      {
        id: 'gen-1',
        question: 'Is there a mobile app?',
        answer:
          'Yes! The BookOrbit app is available on iOS and Android. You can manage your membership, select books, track shipments, and join book club discussions all in one place.',
      },
      {
        id: 'gen-2',
        question: 'Do you have a book club community?',
        answer:
          'We do! Every monthly pick comes with an in-app book club discussion forum. Members can post reviews, discuss plot twists (spoiler tagged!), and participate in monthly live events with authors.',
      },
      {
        id: 'gen-3',
        question: 'Are there any referral rewards?',
        answer:
          'Yes — refer a friend and both of you get a free book added to your next shipment. There is no limit on referrals!',
      },
      {
        id: 'gen-4',
        question: 'Can I buy books outright without a membership?',
        answer:
          'Currently BookOrbit operates as a membership service. Keep an eye on our announcements — we are exploring options to open up our catalog more broadly.',
      },
    ],
  },
  {
    id: 'contact',
    label: 'Contact',
    color: '#FF7B39',
    colorBg: '#FFF0E8',
    emoji: '💬',
    items: [
      {
        id: 'con-1',
        question: 'How do I contact BookOrbit support?',
        answer:
          'You can reach our support team at support@bookorbit.com or via the in-app chat. We respond within 1 business day, Monday to Friday.',
      },
      {
        id: 'con-2',
        question: 'Do you have a phone number?',
        answer:
          'We currently offer support exclusively through email and in-app chat to keep response times fast and answers accurate. We do not offer phone support at this time.',
      },
      {
        id: 'con-3',
        question: 'I am a publisher or author — how do I get in touch?',
        answer:
          'We would love to hear from you! Please email our editorial team at editorial@bookorbit.com with information about your title and we will get back to you within a few business days.',
      },
    ],
  },
];
