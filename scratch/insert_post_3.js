const fs = require('fs');

const snippet = fs.readFileSync('scratch/new_post_snippet_3.txt', 'utf8');
let postsTs = fs.readFileSync('src/data/posts.ts', 'utf8');

const isCrlf = postsTs.includes('\r\n');
const lineEnd = isCrlf ? '\r\n' : '\n';
const targetStr = `export const blogPosts: BlogPost[] = [${lineEnd}`;

if (!postsTs.includes(targetStr)) {
  const match = postsTs.match(/export const blogPosts:\s*BlogPost\[\]\s*=\s*\[\r?\n/);
  if (!match) {
    console.error('Regex match failed!');
    process.exit(1);
  }
  const formattedSnippet = isCrlf ? snippet.replace(/\r?\n/g, '\r\n') : snippet.replace(/\r\n/g, '\n');
  const updated = postsTs.slice(0, match.index + match[0].length) + formattedSnippet + postsTs.slice(match.index + match[0].length);
  fs.writeFileSync('src/data/posts.ts', updated, 'utf8');
  console.log('Inserted via regex.');
} else {
  const formattedSnippet = isCrlf ? snippet.replace(/\r?\n/g, '\r\n') : snippet.replace(/\r\n/g, '\n');
  const updated = postsTs.replace(targetStr, targetStr + formattedSnippet);
  fs.writeFileSync('src/data/posts.ts', updated, 'utf8');
  console.log('Inserted via string replace.');
}
