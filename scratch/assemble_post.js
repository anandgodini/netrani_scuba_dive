const fs = require('fs');

const blocks = JSON.parse(fs.readFileSync('scratch/blocks.json', 'utf8'));

// Let's examine all blocks and construct the markdown
let introParagraphs = [];
let sections = [];
let currentSection = null;

// The first block is title
// Blocks 1 to 5 are intro
// Block 6 is Section 1: "1. What Makes Netrani Island an Interesting Scuba Diving Destination?"

// Let's inspect each block carefully and assemble
let mdLines = [];

for (let i = 1; i < blocks.length; i++) {
  const b = blocks[i];

  if (b.type === 'paragraph') {
    const text = b.text.trim();

    // Check if it's the FAQ section start
    if (text === 'Frequently Asked Questions About Netrani Scuba Dive') {
      mdLines.push('## Frequently Asked Questions About Netrani Scuba Dive\n');
      continue;
    }

    // Check if it's FAQ Q&A
    const faqQMatch = text.match(/^(\d+)\.\s+(.*\?)$/);
    if (faqQMatch && i >= 140) {
      mdLines.push(`### ${text}\n`);
      continue;
    }

    // Check if it's main section header (e.g., "1. What Makes ...")
    const sectionMatch = text.match(/^(\d+)\.\s+(.*)$/);
    if (sectionMatch && parseInt(sectionMatch[1]) <= 11) {
      mdLines.push(`## ${text}\n`);
      continue;
    }

    // Check if it's conclusion title
    if (text === 'Discover the Underwater World with Netrani Scuba Dive') {
      mdLines.push(`## ${text}\n`);
      continue;
    }

    // Check subheadings:
    const subheadings = [
      'Parrotfish – The Colourful Reef Residents',
      'Butterflyfish – Beautiful Underwater Patterns',
      'Triggerfish – Unique and Fascinating Marine Creatures',
      'Moray Eels – Hidden Between Rocky Crevices',
      'Schools of Reef Fish – Nature Moving Together',
      'Understand How Scuba Breathing Works',
      'Learn Basic Underwater Communication',
      'Never Rush Your First Experience',
      'Step 1: Registration and Reporting',
      'Step 2: Safety Briefing',
      'Step 3: Boat Journey to Netrani Island',
      'Step 4: Equipment Preparation',
      'Step 5: Underwater Exploration',
      'Look for Natural Underwater Light',
      'Be Patient Around Marine Life',
      'Avoid Touching Underwater Formations',
      'Ask About Photography Packages Before Booking'
    ];

    if (subheadings.includes(text)) {
      mdLines.push(`### ${text}\n`);
      continue;
    }

    // Normal paragraph
    mdLines.push(`${text}\n`);

    // Insert image after intro (around block 5)
    if (i === 5) {
      mdLines.push(`![Netrani scuba dive discovering marine life and underwater adventures|Discovering rich marine biodiversity and underwater beauty at Netrani Island off Murudeshwar](/images/murudeshwara/netrani_island_marine_life.webp)\n`);
    }

    // Insert second image at Section 5 (Photography)
    if (text.startsWith('5. Murdeshwar Scuba Dive: How to Make Your Underwater Photography Special')) {
      // It was handled in section match, but if we want image after section 5 intro:
    }
    if (text === 'Here are some useful tips for capturing better underwater memories.') {
      mdLines.push(`![Underwater photography during Netrani scuba dive|Capturing clear underwater memories and marine life encounters at Netrani Island](/images/murudeshwara/netrani_island_underwater_photography.webp)\n`);
    }

  } else if (b.type === 'list') {
    b.items.forEach(item => {
      mdLines.push(`- ${item}`);
    });
    mdLines.push('');
  } else if (b.type === 'table') {
    if (b.rows.length >= 2) {
      const headers = b.rows[0];
      mdLines.push(`| ${headers.join(' | ')} |`);
      mdLines.push(`| ${headers.map(() => ':---').join(' | ')} |`);
      for (let r = 1; r < b.rows.length; r++) {
        mdLines.push(`| ${b.rows[r].join(' | ')} |`);
      }
      mdLines.push('');
    }
  }
}

const fullContent = mdLines.join('\n');
fs.writeFileSync('scratch/assembled_content.md', fullContent, 'utf8');
console.log('Assembled content length:', fullContent.length);
console.log('Lines count:', mdLines.length);
