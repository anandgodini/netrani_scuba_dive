const fs = require('fs');
const blocks = JSON.parse(fs.readFileSync('scratch/blocks_3.json', 'utf8'));

console.log('--- FAQS AND CONCLUSION ---');
blocks.slice(83).forEach((b, i) => console.log(83 + i, b.type, JSON.stringify(b.text || b.items).slice(0, 100)));
