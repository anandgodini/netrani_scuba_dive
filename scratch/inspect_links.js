const fs = require('fs');
const xml = fs.readFileSync('scratch/odt_extracted/content.xml', 'utf8');
const links = [...xml.matchAll(/<text:a[^>]*xlink:href=["']([^"']+)["'][^>]*>(.*?)<\/text:a>/g)];
console.log('Hyperlinks found:', links.map(l => ({ href: l[1], text: l[2].replace(/<[^>]+>/g, '') })));

// Also let's check styles for bold text
const stylesXml = fs.readFileSync('scratch/odt_extracted/styles.xml', 'utf8');
console.log('Styles length:', stylesXml.length);
