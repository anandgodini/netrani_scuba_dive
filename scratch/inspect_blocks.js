const fs = require('fs');
const blocks = JSON.parse(fs.readFileSync('scratch/blocks.json', 'utf8'));

console.log('--- FIRST 20 BLOCKS ---');
blocks.slice(0, 20).forEach((b, i) => console.log(i, b.type, b.level || '', JSON.stringify(b.text || b.items || b.rows).slice(0, 80)));

console.log('--- HEADINGS IN BLOCKS ---');
blocks.forEach((b, i) => {
  if (b.type === 'heading') console.log(i, `H${b.level}:`, b.text);
  else if (b.type === 'paragraph' && /^[0-9]+\.\s+/.test(b.text)) console.log(i, `Numbered P:`, b.text);
  else if (b.type === 'paragraph' && /FAQ|Frequently Asked Questions/i.test(b.text)) console.log(i, `FAQ P:`, b.text);
});
