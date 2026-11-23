const fs = require('fs');

const htmlPath = '.next/server/app/blog/netrani-scuba-dive-beyond-the-first-dive.html';
if (!fs.existsSync(htmlPath)) {
  console.error('HTML file does not exist at', htmlPath);
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');

// 1. Canonical
const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/);
console.log('Canonical:', canonicalMatch ? canonicalMatch[1] : 'MISSING');

// 2. Title
const titleMatch = html.match(/<title>([^<]+)<\/title>/);
console.log('Title:', titleMatch ? titleMatch[1] : 'MISSING');

// 3. Description
const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]+)"/);
console.log('Description:', descMatch ? descMatch[1] : 'MISSING');

// 4. H1
const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
console.log('H1 count:', h1Matches.length);
if (h1Matches.length > 0) {
  console.log('H1 text:', h1Matches[0][1].replace(/<[^>]+>/g, '').trim());
}

// 5. JSON-LD
const jsonLdMatches = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
console.log('JSON-LD blocks count:', jsonLdMatches.length);
jsonLdMatches.forEach((m, idx) => {
  try {
    const parsed = JSON.parse(m[1]);
    console.log(`Block ${idx + 1}:`, Array.isArray(parsed) ? parsed.map(p => p['@type']) : parsed['@type']);
  } catch (e) {
    console.log(`Block ${idx + 1}: Parse error:`, e.message);
  }
});

// 6. Check Sitemap
const sitemapPath = '.next/server/app/sitemap.xml.body';
if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  console.log('Sitemap contains new slug:', sitemap.includes('netrani-scuba-dive-beyond-the-first-dive'));
}
