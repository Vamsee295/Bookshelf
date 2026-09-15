// ============================================================
// Book Catalogue Index — master slug → BookDetails resolver
// ============================================================
import { BookDetails, validateBook } from './types';
import { september2026Books } from './september2026';

// Combine all batches here as they are added
export const ALL_BOOKS: BookDetails[] = [
  ...september2026Books,
  // ...august2026Books,   // add when batch 2 is implemented
  // ...july2026Books,
];

// Build a slug map for O(1) lookups
const SLUG_MAP = new Map<string, BookDetails>(
  ALL_BOOKS.map((b) => [b.slug, b])
);

// Also support id as a fallback key
ALL_BOOKS.forEach((b) => {
  if (b.id !== b.slug) {
    SLUG_MAP.set(b.id, b);
  }
});

/** Resolve a URL slug to a BookDetails object, or null if not found. */
export function getBookBySlug(slug: string): BookDetails | null {
  return SLUG_MAP.get(slug) ?? null;
}

/** Get all books (for static path generation). */
export function getAllBookSlugs(): string[] {
  return ALL_BOOKS.map((b) => b.slug);
}

/** Resolve a list of slugs to BookDetails objects (for similar titles). */
export function resolveSlugs(slugs: string[]): BookDetails[] {
  return slugs
    .map((s) => SLUG_MAP.get(s))
    .filter((b): b is BookDetails => b !== undefined);
}

// Dev-only validation
if (process.env.NODE_ENV === 'development') {
  ALL_BOOKS.forEach((book) => {
    const errors = validateBook(book);
    if (errors.length > 0) {
      console.warn('[Book Catalogue Validation]', errors.join('\n'));
    }
  });

  // Check for duplicate slugs
  const slugSet = new Set<string>();
  ALL_BOOKS.forEach((b) => {
    if (slugSet.has(b.slug)) {
      console.error(`[Book Catalogue] Duplicate slug detected: "${b.slug}"`);
    }
    slugSet.add(b.slug);
  });
}
