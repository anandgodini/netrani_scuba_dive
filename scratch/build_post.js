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
let bodyXml = bodyMatch[1];

// Handle spaces
bodyXml = bodyXml.replace(/<text:s\s+text:c="(\d+)"\/>/g, (m, c) => ' '.repeat(parseInt(c)));
bodyXml = bodyXml.replace(/<text:s\/>/g, ' ');

// Handle links: replace with markdown link
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

// Helper to clean inline XML
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

// Now parse blocks in order: tables, headings, lists, paragraphs
// We can use regex to iterate top-level tags
const blockRegex = /<(table:table|text:h|text:list|text:p)([^>]*)>([\s\S]*?)<\/\1>/g;

let blocks = [];
let match;
while ((match = blockRegex.exec(bodyXml)) !== null) {
  const tag = match[1];
  const attrs = match[2];
  const content = match[3];

  if (tag === 'table:table') {
    // Parse table rows
    const rows = [];
    const rowMatches = content.matchAll(/<table:table-row[^>]*>([\s\S]*?)<\/table:table-row>/g);
    for (const rMatch of rowMatches) {
      const cells = [];
      const cellMatches = rMatch[1].matchAll(/<table:table-cell[^>]*>([\s\S]*?)<\/table:table-cell>/g);
      for (const cMatch of cellMatches) {
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
    const itemMatches = content.matchAll(/<text:list-item[^>]*>([\s\S]*?)<\/text:list-item>/g);
    for (const iMatch of itemMatches) {
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

console.log('Total parsed blocks:', blocks.length);
fs.writeFileSync('scratch/blocks.json', JSON.stringify(blocks, null, 2), 'utf8');
