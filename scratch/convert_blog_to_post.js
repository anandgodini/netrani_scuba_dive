const fs = require('fs');

const xml = fs.readFileSync('scratch/odt_extracted/content.xml', 'utf8');

// Load bold styles
const boldStyles = new Set();
for (const f of ['scratch/odt_extracted/content.xml', 'scratch/odt_extracted/styles.xml']) {
  const content = fs.readFileSync(f, 'utf8');
  for (const match of content.matchAll(/<style:style\s+style:name="([^"]+)"[^>]*>([\s\S]*?)<\/style:style>/g)) {
    if (match[2].includes('font-weight="bold"') || match[2].includes('font-weight-asian="bold"') || match[2].includes('font-weight-complex="bold"')) {
      boldStyles.add(match[1]);
    }
  }
}

// Extract body
const bodyMatch = xml.match(/<office:body>[\s\S]*?<office:text[^>]*>([\s\S]*?)<\/office:text>[\s\S]*?<\/office:body>/);
if (!bodyMatch) {
  console.error('Body not found!');
  process.exit(1);
}

let bodyXml = bodyMatch[1];

// Replace text:s (spaces)
bodyXml = bodyXml.replace(/<text:s\s+text:c="(\d+)"\/>/g, (m, c) => ' '.repeat(parseInt(c)));
bodyXml = bodyXml.replace(/<text:s\/>/g, ' ');

// Process links: <text:a ... xlink:href="URL">text</text:a>
bodyXml = bodyXml.replace(/<text:a[^>]*xlink:href="([^"]+)"[^>]*>([\s\S]*?)<\/text:a>/g, (m, href, inner) => {
  let target = href;
  if (target.includes('netraniscubadive.in')) {
    try {
      const u = new URL(target);
      target = u.pathname + (u.search || '') + (u.hash || '');
      if (target === '') target = '/';
    } catch (e) {}
  }
  return `[${inner.replace(/<[^>]+>/g, '').trim()}](${target})`;
});

// Process spans: bold
bodyXml = bodyXml.replace(/<text:span\s+text:style-name="([^"]+)"[^>]*>([\s\S]*?)<\/text:span>/g, (m, style, inner) => {
  const cleanInner = inner.replace(/<[^>]+>/g, '');
  if (boldStyles.has(style) && cleanInner.trim()) {
    // preserve leading and trailing whitespace
    const leading = cleanInner.match(/^\s*/)[0];
    const trailing = cleanInner.match(/\s*$/)[0];
    return `${leading}**${cleanInner.trim()}**${trailing}`;
  }
  return inner;
});

// Write to scratch
fs.writeFileSync('scratch/processed_body.txt', bodyXml, 'utf8');

// Now parse elements: table, headings, lists, paragraphs
// Regex for elements
const elements = [];
const elRegex = /<(text:p|text:h|table:table|text:list)[^>]*>([\s\S]*?)<\/\1>/g;

console.log('Body processed successfully.');
