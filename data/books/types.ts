// ============================================================
// Book Details — Type Definitions
// ============================================================

export interface BookTag {
  label: string;
  bg: string;
  color: string;
}

export interface BookBadge {
  label: string;
  icon: string; // emoji or short SVG string
  type: 'author' | 'feature' | 'mood' | 'setting' | 'style';
}

export interface BookReview {
  type: 'editorial' | 'quote';
  source: string;
  text: string;
  bg: string; // pastel bg color for the card
  textColor: string;
}

export interface BookEditorialSection {
  heading?: string;
  body: string;
}

export interface BookNotes {
  whyWeChoseIt: string;
  contentWarnings: string;
}

export interface BookTheme {
  heroBackground: string;   // warm peach gradient / color
  accentColor: string;      // genre pill / badge highlight color
  coverShadow: string;      // drop shadow for the book cover card
  tasteBg: string;          // "Get a taste" section background
}

export interface BookDetails {
  slug: string;
  id: string;
  title: string;
  author: string;
  month: string;
  cover: string;
  genres: BookTag[];
  badges: BookBadge[];
  theme: BookTheme;
  description: string;               // Lead premise — italic, large
  editorialSections: BookEditorialSection[];
  reviews: BookReview[];
  excerpt: string;                    // "Get a taste" excerpt
  notes: BookNotes;
  similarTitles: string[];            // Array of slugs referencing other books in the catalogue
}

// Validation helper — used during dev builds
export function validateBook(book: BookDetails): string[] {
  const errors: string[] = [];
  if (!book.title) errors.push(`[${book.slug}] Missing title`);
  if (!book.author) errors.push(`[${book.slug}] Missing author`);
  if (!book.description || book.description.length < 40)
    errors.push(`[${book.slug}] Description too short or missing`);
  if (!book.cover) errors.push(`[${book.slug}] Missing cover`);
  if (book.genres.length === 0) errors.push(`[${book.slug}] No genres`);
  if (!book.notes.whyWeChoseIt) errors.push(`[${book.slug}] Missing whyWeChoseIt`);
  if (!book.notes.contentWarnings) errors.push(`[${book.slug}] Missing contentWarnings`);
  if (!book.excerpt || book.excerpt.length < 60) errors.push(`[${book.slug}] Excerpt too short or missing`);
  return errors;
}
