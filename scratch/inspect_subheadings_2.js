const fs = require('fs');
const blocks = JSON.parse(fs.readFileSync('scratch/blocks_2.json', 'utf8'));

console.log('--- ALL PARAGRAPHS UNDER 80 CHARACTERS ---');
blocks.forEach((b, i) => {
  if (b.type === 'paragraph' && b.text.length < 80 && !b.text.startsWith('http')) {
    console.log(i, b.text);
  }
});
