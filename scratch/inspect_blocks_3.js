const fs = require('fs');
const blocks = JSON.parse(fs.readFileSync('scratch/blocks_3.json', 'utf8'));

console.log('--- ALL BLOCKS OVERVIEW ---');
blocks.forEach((b, i) => {
  if (b.type === 'heading') console.log(i, `H${b.level}:`, b.text);
  else if (b.type === 'paragraph' && /^[0-9]+\.\s+/.test(b.text)) console.log(i, `Numbered P:`, b.text);
  else if (b.type === 'paragraph' && /FAQ|Frequently Asked Questions/i.test(b.text)) console.log(i, `FAQ P:`, b.text);
  else if (b.type === 'paragraph' && b.text.length < 80) console.log(i, `Short P:`, b.text);
  else if (b.type === 'table') console.log(i, 'TABLE rows:', b.rows.length);
  else if (b.type === 'list') console.log(i, 'LIST items:', b.items.length);
});
