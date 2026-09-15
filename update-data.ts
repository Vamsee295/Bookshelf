import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), './data/allBooksData.ts');

let content = fs.readFileSync(dataPath, 'utf8');

// The interface update: replace coverUrl: string; with cover: string;
content = content.replace('coverUrl: string;        // CDN URL (from Webflow CMS)', 'cover: string;');
content = content.replace('coverUrl: string;', 'cover: string;');

// Now we need to parse out the id and replace the coverUrl line
// The format is:
// id: "something",
// title: "...",
// author: "...",
// description: "...",
// coverUrl: `${CDN}...`,

// We can use a regex with a replacer function to match the id and then replace the coverUrl block.
// Or we can just read line by line and track the current ID.

const lines = content.split('\n');
let currentId = '';

for (let i = 0; i < lines.length; i++) {
  const idMatch = lines[i].match(/id:\s*"([^"]+)"/);
  if (idMatch) {
    currentId = idMatch[1];
  }
  
  if (lines[i].includes('coverUrl:')) {
    // Replace with the new local path
    const indent = lines[i].match(/^\s*/)?.[0] || '';
    lines[i] = `${indent}cover: "/books/${currentId}.webp",`;
  }
}

content = lines.join('\n');

fs.writeFileSync(dataPath, content, 'utf8');
console.log('allBooksData.ts updated successfully.');
