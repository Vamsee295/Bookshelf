import fs from 'fs';
import path from 'path';
import { monthlyBooks } from './data/allBooksData';
import https from 'https';

const BOOKS_DIR = path.join(process.cwd(), './public/books');

// Ensure directory exists
if (!fs.existsSync(BOOKS_DIR)) {
  fs.mkdirSync(BOOKS_DIR, { recursive: true });
}

// Download helper
const downloadImage = (url: string, filepath: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(true));
      } else {
        // console.error(`Failed to download ${url}: ${res.statusCode}`);
        res.resume(); // Consume response data to free up memory
        resolve(false);
      }
    }).on('error', reject);
  });
};

async function generatePlaceholder(id: string, title: string, color: string, filepath: string) {
  // Using an external service to generate a quick placeholder image (webp)
  // We use placehold.co or dummyimage.com for simplicity, but wait, those are not webp mostly.
  // Actually, we can just use a simple SVG and save it as webp? Or just use placehold.co/400x600/color/white.webp
  const bgColor = color.replace('#', '');
  const url = `https://placehold.co/400x600/${bgColor}/ffffff.webp?text=${encodeURIComponent(title)}`;
  const success = await downloadImage(url, filepath);
  if (!success) {
    console.error(`Failed to generate placeholder for ${title}`);
  }
}

async function fetchGoogleBooksCover(title: string, author: string): Promise<string | null> {
  const query = `intitle:${encodeURIComponent(title)}+inauthor:${encodeURIComponent(author)}`;
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=1`;
  
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.items && data.items.length > 0) {
      const volumeInfo = data.items[0].volumeInfo;
      if (volumeInfo.imageLinks) {
        // Get the largest available thumbnail, replacing zoom=1 with zoom=0 or keeping it
        let imgUrl = volumeInfo.imageLinks.thumbnail || volumeInfo.imageLinks.smallThumbnail;
        if (imgUrl) {
          // Google Books URLs are usually http, upgrade to https
          imgUrl = imgUrl.replace('http:', 'https:');
          // Some Google Books covers have edge curl (edge=curl). Remove it.
          imgUrl = imgUrl.replace('&edge=curl', '');
          // Optional: try to get a slightly larger image by changing zoom=1 to zoom=2 or something
          return imgUrl;
        }
      }
    }
  } catch (e) {
    console.error(`Error searching Google Books for ${title}:`, e);
  }
  return null;
}

async function fetchOpenLibraryCover(title: string, author: string): Promise<string | null> {
  const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(title)}&author=${encodeURIComponent(author)}&limit=1`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.docs && data.docs.length > 0) {
      const doc = data.docs[0];
      if (doc.cover_i) {
        return `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`;
      }
    }
  } catch (e) {
    console.error(`Error searching OpenLibrary for ${title}:`, e);
  }
  return null;
}

async function run() {
  console.log('Starting book cover fetch...');
  let total = 0;
  let success = 0;
  
  for (const month of monthlyBooks) {
    for (const book of month.books) {
      total++;
      // We use .webp extension because we will save it as webp (if the API supports it) or just name it webp
      // We will try Google Books, then OpenLibrary, then Placeholder
      const targetPath = path.join(BOOKS_DIR, `${book.id}.webp`);
      
      // If we already have it, skip
      if (fs.existsSync(targetPath)) {
        console.log(`[SKIP] ${book.title} (already exists)`);
        success++;
        continue;
      }

      console.log(`[FETCHING] ${book.title} by ${book.author}`);
      
      // 1. Try OpenLibrary (often better high-res straight JPG covers without Google's fake shadows)
      let coverUrl = await fetchOpenLibraryCover(book.title, book.author);
      
      // 2. Try Google Books
      if (!coverUrl) {
        coverUrl = await fetchGoogleBooksCover(book.title, book.author);
      }
      
      if (coverUrl) {
        console.log(`  -> Found cover: ${coverUrl}`);
        const downloaded = await downloadImage(coverUrl, targetPath);
        if (downloaded) {
          success++;
        } else {
          console.log(`  -> Download failed. Generating placeholder.`);
          await generatePlaceholder(book.id, book.title, book.bgColor, targetPath);
          success++;
        }
      } else {
        console.log(`  -> Not found. Generating placeholder.`);
        await generatePlaceholder(book.id, book.title, book.bgColor, targetPath);
        success++;
      }
      
      // Small delay to respect APIs
      await new Promise(r => setTimeout(r, 500));
    }
  }
  
  console.log(`\nFinished! Fetched ${success} of ${total} covers.`);
}

run();
