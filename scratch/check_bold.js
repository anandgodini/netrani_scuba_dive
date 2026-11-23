const fs = require('fs');

const xml = fs.readFileSync('scratch/odt_extracted/content.xml', 'utf8');

// Identify which styles are bold
const boldStyles = new Set();
// Check automatic styles in content.xml
const styleMatches = xml.matchAll(/<style:style\s+style:name="([^"]+)"[^>]*>([\s\S]*?)<\/style:style>/g);
for (const match of styleMatches) {
  const name = match[1];
  const body = match[2];
  if (body.includes('fo:font-weight="bold"') || body.includes('style:font-weight-asian="bold"') || body.includes('style:font-weight-complex="bold"')) {
    boldStyles.add(name);
  }
}
console.log('Bold styles found:', [...boldStyles]);

// Also check styles.xml
const stylesXml = fs.readFileSync('scratch/odt_extracted/styles.xml', 'utf8');
const sMatches = stylesXml.matchAll(/<style:style\s+style:name="([^"]+)"[^>]*>([\s\S]*?)<\/style:style>/g);
for (const match of sMatches) {
  const name = match[1];
  const body = match[2];
  if (body.includes('fo:font-weight="bold"') || body.includes('style:font-weight-asian="bold"') || body.includes('style:font-weight-complex="bold"')) {
    boldStyles.add(name);
  }
}

console.log('Total bold styles:', boldStyles.size);
