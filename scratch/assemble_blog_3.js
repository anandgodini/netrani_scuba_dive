const fs = require('fs');

const blocks = JSON.parse(fs.readFileSync('scratch/blocks_3.json', 'utf8'));

const h2Titles = new Set([
  'Why Netrani Karnataka Is Worth Exploring Underwater',
  'The Small Underwater Details That Make a Dive Memorable',
  'Nervous About Your First Netrani Scuba Dive? Here Is What Helps',
  'What Happens During a Scuba Diving Experience at Netrani Island?',
  'Underwater Photography: How to Capture Better Memories',
  'Practical Preparation and Safety Tips for Beginners',
  'When Should You Plan a Netrani Scuba Dive?',
  'How to Choose an Operator for the Best Scuba Diving in Murudeshwar',
  'Frequently Asked Questions',
  'Experience a Different Side of Netrani Karnataka'
]);

const h3Titles = new Set([
  '1. Watching schools of fish move together',
  '2. Looking closely at colourful reef fish',
  '3. Exploring rocky underwater formations',
  '4. Discovering the smaller inhabitants',
  'Understand the breathing equipment',
  'Learn the basic underwater signals',
  'Take your time with ear equalisation',
  'Communicate instead of hiding your concerns',
  'Step 1: Arrival and preparation',
  'Step 2: Boat journey towards Netrani',
  'Step 3: Safety briefing and equipment familiarisation',
  'Step 4: Guided underwater experience',
  'Step 5: Return journey'
]);

let mdLines = [];
let faqs = [];

for (let i = 1; i < blocks.length; i++) {
  const b = blocks[i];

  if (b.type === 'paragraph') {
    const text = b.text.trim();

    // Check FAQ section
    if (text === 'Frequently Asked Questions') {
      mdLines.push('## Frequently Asked Questions About Netrani Karnataka Scuba Diving\n');
      continue;
    }

    // Check FAQ items (blocks 84 to 97)
    if (i >= 84 && i <= 97) {
      if (/^\d+\.\s+/.test(text)) {
        const question = text.replace(/^\d+\.\s*/, '').trim();
        const nextBlock = blocks[i + 1];
        const answer = nextBlock && nextBlock.type === 'paragraph' ? nextBlock.text.trim() : '';
        faqs.push({ question, answer });
        mdLines.push(`### ${text}\n`);
      } else {
        mdLines.push(`${text}\n`);
      }
      continue;
    }

    if (h2Titles.has(text)) {
      mdLines.push(`## ${text}\n`);
      continue;
    }

    if (h3Titles.has(text)) {
      mdLines.push(`### ${text}\n`);
      continue;
    }

    // Normal paragraph
    mdLines.push(`${text}\n`);

    // In-article images
    if (i === 4) {
      mdLines.push(`![Netrani Karnataka underwater world scuba diving|Exploring clear waters and marine biodiversity around Netrani Island in Karnataka](/images/murudeshwara/murudeshwar_underwater_diving.webp)\n`);
    }

    if (text.startsWith('What Happens During a Scuba Diving Experience')) {
      mdLines.push(`![Guided scuba diving experience near Netrani Island|Beginners taking their first breaths underwater off the Murudeshwar coast](/images/murudeshwara/netrani_island_sea_diving.webp)\n`);
    }

  } else if (b.type === 'list') {
    b.items.forEach(item => {
      mdLines.push(`- ${item}`);
    });
    mdLines.push('');
  }
}

let finalContent = mdLines.join('\n');

// Clean internal links
finalContent = finalContent
  .replace(/\[netraniscubadive\.in\]\(\/\)/g, '[Netrani Scuba Dive](/)')
  .replace(/best scuba diving in Murudeshwar/g, '[best scuba diving in Murudeshwar](/scuba-diving-murudeshwar)')
  .replace(/\[\[best scuba diving in Murudeshwar\]\(\/scuba-diving-murudeshwar\)\]/g, '[best scuba diving in Murudeshwar](/scuba-diving-murudeshwar)');

console.log('FAQs count:', faqs.length);
console.log('Content length:', finalContent.length);

const newPost = {
  slug: "netrani-karnataka-underwater-world",
  title: "Netrani Karnataka: Discover the Hidden Details of the Underwater World",
  metaTitle: "Netrani Karnataka: Discover the Hidden Underwater World",
  subtitle: "Explore Netrani Karnataka beneath the Arabian Sea. Discover marine life, beginner diving tips, underwater photography, and essential safety guidance for Netrani Island.",
  description: "Discover Netrani Karnataka underwater. Explore marine life, rocky reef formations, beginner scuba tips, photography advice, and safety essentials at Netrani Island.",
  category: "Scuba Diving Guides",
  tags: [
    "Netrani Karnataka",
    "Netrani Scuba Dive",
    "Netrani Island Diving",
    "Murudeshwar Scuba",
    "Underwater Marine Life",
    "Beginner Scuba Diving"
  ],
  readTime: "7 min read",
  date: "23 Nov 2026",
  coverImage: "/images/murudeshwara/murudeshwar_underwater_diving.webp",
  faq: faqs,
  content: finalContent
};

// Generate valid TypeScript snippet
const postTs = `  {
    slug: ${JSON.stringify(newPost.slug)},
    title: ${JSON.stringify(newPost.title)},
    metaTitle: ${JSON.stringify(newPost.metaTitle)},
    subtitle: ${JSON.stringify(newPost.subtitle)},
    description: ${JSON.stringify(newPost.description)},
    category: ${JSON.stringify(newPost.category)},
    tags: ${JSON.stringify(newPost.tags)},
    readTime: ${JSON.stringify(newPost.readTime)},
    date: ${JSON.stringify(newPost.date)},
    coverImage: ${JSON.stringify(newPost.coverImage)},
    faq: ${JSON.stringify(newPost.faq, null, 6).replace(/\n/g, '\n    ')},
    content: \`${newPost.content.replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`
  },
`;

fs.writeFileSync('scratch/new_post_snippet_3.txt', postTs, 'utf8');
fs.writeFileSync('scratch/assembled_content_3.md', finalContent, 'utf8');
console.log('Snippet 3 generated. Size:', postTs.length);
