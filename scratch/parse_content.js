const fs = require('fs');

const xml = fs.readFileSync('scratch/odt_extracted/content.xml', 'utf8');

// Replace XML tags while preserving text and structure
// Let's find all text:p, text:h, and list items
let text = xml
  .replace(/<text:h[^>]*outline-level="(\d+)"[^>]*>(.*?)<\/text:h>/gs, (match, level, content) => {
    const clean = content.replace(/<[^>]+>/g, '').trim();
    return `\n\n[H${level}] ${clean}\n\n`;
  })
  .replace(/<text:h[^>]*>(.*?)<\/text:h>/gs, (match, content) => {
    const clean = content.replace(/<[^>]+>/g, '').trim();
    return `\n\n[H] ${clean}\n\n`;
  })
  .replace(/<text:list-item[^>]*>(.*?)<\/text:list-item>/gs, (match, content) => {
    const clean = content.replace(/<[^>]+>/g, '').trim();
    return `\n- ${clean}`;
  })
  .replace(/<text:p[^>]*>(.*?)<\/text:p>/gs, (match, content) => {
    const clean = content.replace(/<[^>]+>/g, '').trim();
    return clean ? `\n${clean}` : '';
  })
  .replace(/<[^>]+>/g, '') // remove any remaining tags
  .replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"')
  .replace(/&apos;/g, "'")
  .replace(/\n{3,}/g, '\n\n')
  .trim();

fs.writeFileSync('scratch/parsed_blog.txt', text, 'utf8');
console.log('Parsed successfully. Length:', text.length);
console.log('--- PREVIEW FIRST 1500 CHARACTERS ---');
console.log(text.slice(0, 1500));
