const fs = require('fs');

const xml = fs.readFileSync('scratch/odt_extracted_2/content.xml', 'utf8');

// Find all links
const links = [...xml.matchAll(/<text:a[^>]*xlink:href=["']([^"']+)["'][^>]*>(.*?)<\/text:a>/g)];
console.log('Hyperlinks found in blog 2:', links.map(l => ({ href: l[1], text: l[2].replace(/<[^>]+>/g, '') })));

// Find bold styles
const boldStyles = new Set();
for (const f of ['scratch/odt_extracted_2/content.xml', 'scratch/odt_extracted_2/styles.xml']) {
  const content = fs.readFileSync(f, 'utf8');
  for (const match of content.matchAll(/<style:style\s+style:name="([^"]+)"[^>]*>([\s\S]*?)<\/style:style>/g)) {
    if (match[2].includes('font-weight="bold"') || match[2].includes('font-weight-asian="bold"') || match[2].includes('font-weight-complex="bold"')) {
      boldStyles.add(match[1]);
    }
  }
}
console.log('Bold styles count:', boldStyles.size);

// Extract body
const bodyMatch = xml.match(/<office:body>[\s\S]*?<office:text[^>]*>([\s\S]*?)<\/office:text>[\s\S]*?<\/office:body>/);
if (!bodyMatch) {
  console.error('Body not found!');
  process.exit(1);
}

let bodyXml = bodyMatch[1];
bodyXml = bodyXml.replace(/<text:s\s+text:c="(\d+)"\/>/g, (m, c) => ' '.repeat(parseInt(c)));
bodyXml = bodyXml.replace(/<text:s\/>/g, ' ');

// Handle links
bodyXml = bodyXml.replace(/<text:a[^>]*xlink:href="([^"]+)"[^>]*>([\s\S]*?)<\/text:a>/g, (m, href, inner) => {
  let target = href;
  if (target.includes('netraniscubadive.in')) {
    try {
      const u = new URL(target);
      target = u.pathname + (u.search || '') + (u.hash || '');
      if (target === '') target = '/';
    } catch (e) {}
  }
  const cleanInner = inner.replace(/<[^>]+>/g, '').trim();
  return `[${cleanInner}](${target})`;
});

// Handle bold spans
bodyXml = bodyXml.replace(/<text:span\s+text:style-name="([^"]+)"[^>]*>([\s\S]*?)<\/text:span>/g, (m, style, inner) => {
  const cleanInner = inner.replace(/<[^>]+>/g, '');
  if (boldStyles.has(style) && cleanInner.trim()) {
    const leading = cleanInner.match(/^\s*/)[0];
    const trailing = cleanInner.match(/\s*$/)[0];
    return `${leading}**${cleanInner.trim()}**${trailing}`;
  }
  return inner;
});

function cleanInline(str) {
  return str
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

const blockRegex = /<(table:table|text:h|text:list|text:p)([^>]*)>([\s\S]*?)<\/\1>/g;
let blocks = [];
let match;
while ((match = blockRegex.exec(bodyXml)) !== null) {
  const tag = match[1];
  const attrs = match[2];
  const content = match[3];

  if (tag === 'table:table') {
    const rows = [];
    for (const rMatch of content.matchAll(/<table:table-row[^>]*>([\s\S]*?)<\/table:table-row>/g)) {
      const cells = [];
      for (const cMatch of rMatch[1].matchAll(/<table:table-cell[^>]*>([\s\S]*?)<\/table:table-cell>/g)) {
        cells.push(cleanInline(cMatch[1]));
      }
      if (cells.length > 0) rows.push(cells);
    }
    blocks.push({ type: 'table', rows });
  } else if (tag === 'text:h') {
    const levelMatch = attrs.match(/outline-level="(\d+)"/);
    const level = levelMatch ? parseInt(levelMatch[1]) : 2;
    blocks.push({ type: 'heading', level, text: cleanInline(content) });
  } else if (tag === 'text:list') {
    const items = [];
    for (const iMatch of content.matchAll(/<text:list-item[^>]*>([\s\S]*?)<\/text:list-item>/g)) {
      items.push(cleanInline(iMatch[1]));
    }
    blocks.push({ type: 'list', items });
  } else if (tag === 'text:p') {
    const text = cleanInline(content);
    if (text) {
      blocks.push({ type: 'paragraph', text });
    }
  }
}

console.log('Total parsed blocks in blog 2:', blocks.length);
fs.writeFileSync('scratch/blocks_2.json', JSON.stringify(blocks, null, 2), 'utf8');

console.log('--- PREVIEW FIRST 15 BLOCKS ---');
blocks.slice(0, 15).forEach((b, i) => console.log(i, b.type, JSON.stringify(b.text || b.items || b.rows).slice(0, 90)));
