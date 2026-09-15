import fs from 'fs';
import path from 'path';
import { monthlyBooks } from './data/allBooksData';

const BOOKS_DIR = path.join(process.cwd(), './public/books');

function validate() {
  let totalBooks = 0;
  let missingCovers = 0;
  const coverPaths = new Set();
  const duplicateCovers = new Set();

  for (const month of monthlyBooks) {
    for (const book of month.books) {
      totalBooks++;
      const expectedPath = book.cover; // e.g. /books/mazywood.webp
      
      if (coverPaths.has(expectedPath)) {
        duplicateCovers.add(expectedPath);
      } else {
        coverPaths.add(expectedPath);
      }

      const absolutePath = path.join(process.cwd(), './public', expectedPath);
      if (!fs.existsSync(absolutePath)) {
        missingCovers++;
        console.log(`[MISSING] ${book.title}: ${expectedPath}`);
      }
    }
  }

  console.log('--- Validation Report ---');
  console.log(`Total books: ${totalBooks}`);
  console.log(`Unique covers: ${coverPaths.size}`);
  console.log(`Missing covers: ${missingCovers}`);
  console.log(`Unexpected duplicate covers: ${duplicateCovers.size}`);
  
  if (duplicateCovers.size > 0) {
    console.log('Duplicates:');
    duplicateCovers.forEach(c => console.log('  ', c));
  }
}

validate();
