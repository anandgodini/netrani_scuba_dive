const fs = require('fs');
const content = fs.readFileSync('src/data/posts.ts', 'utf8');
const slugs = [...content.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m => m[1]);
console.log('Total posts:', slugs.length);
console.log('Existing slugs:');
console.log(slugs.join('\n'));
