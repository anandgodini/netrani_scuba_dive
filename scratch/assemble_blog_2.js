const fs = require('fs');

const blocks = JSON.parse(fs.readFileSync('scratch/blocks_2.json', 'utf8'));

const subheadings = new Set([
  'Parrotfish',
  'Butterflyfish',
  'Triggerfish',
  'Moray Eels',
  'Schools of Reef Fish',
  'The First Few Minutes: Getting Comfortable',
  'Settling Into the Underwater Environment',
  'Discovering Marine Life',
  'Returning to the Surface',
  'Understand Your Scuba Equipment',
  'Learn Basic Hand Signals',
  'Keep Your Breathing Continuous',
  'Do Not Compare Yourself With Other Divers',
  'Observe Before Taking a Photograph',
  'Avoid Disturbing Marine Animals',
  'Use Natural Underwater Perspectives',
  'Confirm Photography Availability'
]);

let mdLines = [];
let faqs = [];

for (let i = 1; i < blocks.length; i++) {
  const b = blocks[i];

  if (b.type === 'paragraph') {
    const text = b.text.trim();

    // Check if it's FAQ heading
    if (text === 'Frequently Asked Questions About Netrani Scuba Diving') {
      mdLines.push('## Frequently Asked Questions About Netrani Scuba Diving\n');
      continue;
    }

    // Check if it's an FAQ item (blocks 156-169)
    if (i >= 156 && i <= 169) {
      if (/^\d+\.\s+/.test(text)) {
        const question = text.replace(/^\d+\.\s*/, '').trim();
        const nextBlock = blocks[i + 1];
        const answer = nextBlock && nextBlock.type === 'paragraph' ? nextBlock.text.trim() : '';
        faqs.push({ question, answer });
        mdLines.push(`### ${text}\n`);
      } else {
        // This is answer paragraph
        mdLines.push(`${text}\n`);
      }
      continue;
    }

    // Check if it's numbered main section (e.g., "1. Why ...")
    const sectionMatch = text.match(/^(\d+)\.\s+(.*)$/);
    if (sectionMatch && parseInt(sectionMatch[1]) <= 10) {
      mdLines.push(`## ${text}\n`);
      continue;
    }

    // Check if it's conclusion
    if (text.startsWith('Conclusion:')) {
      mdLines.push(`## ${text}\n`);
      continue;
    }

    // Check subheadings
    if (subheadings.has(text)) {
      mdLines.push(`### ${text}\n`);
      continue;
    }

    // Normal paragraph
    mdLines.push(`${text}\n`);

    // Insert image after intro (around block 6)
    if (i === 6) {
      mdLines.push(`![Netrani scuba diving first underwater adventure off Murudeshwar|Discovering the underwater world and marine life at Netrani Island](/images/murudeshwara/netrani_island_diving_experience.webp)\n`);
    }

    // Insert second image at Section 3 (Your First 30 Minutes Underwater)
    if (text.startsWith('3. Your First 30 Minutes Underwater')) {
      mdLines.push(`![Underwater scuba diver exploring coral reefs at Netrani Island|Guided scuba diving experience near Murudeshwar for beginners](/images/murudeshwara/netrani_island_underwater_diving.webp)\n`);
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

let finalContent = mdLines.join('\n');

// Clean up links and text references
finalContent = finalContent
  .replace(/\[https:\/\/www\.netraniscubadive\.in\/\]\(\/\)/g, '[Netrani Scuba Dive](/)')
  .replace(/visit the Netrani Scuba Dive website/gi, 'visit the [Netrani Scuba Dive website](/)')
  .replace(/best scuba diving in Murudeshwar/g, '[best scuba diving in Murudeshwar](/scuba-diving-murudeshwar)')
  .replace(/\[\[best scuba diving in Murudeshwar\]\(\/scuba-diving-murudeshwar\)\]/g, '[best scuba diving in Murudeshwar](/scuba-diving-murudeshwar)');

console.log('FAQs count:', faqs.length);
console.log('Content length:', finalContent.length);

const newPost = {
  slug: "netrani-scuba-diving-first-underwater-adventure",
  title: "Netrani Scuba Diving: What Happens During Your First Underwater Adventure?",
  metaTitle: "Netrani Scuba Diving: What to Expect on Your First Dive",
  subtitle: "Learn what happens during your first Netrani scuba diving adventure off Murudeshwar. Discover marine life, step-by-step dive flow, overcoming anxiety, photography tips, and safety essentials.",
  description: "What happens during your first Netrani scuba diving experience? Discover marine life encounters, step-by-step dive process, breathing tips, photography advice, and safety.",
  category: "Scuba Diving Guides",
  tags: [
    "Netrani Scuba Diving",
    "First Time Scuba",
    "Murudeshwar Scuba",
    "Scuba Diving in Netrani Island",
    "Netrani Marine Life",
    "Beginner Diving Tips"
  ],
  readTime: "8 min read",
  date: "23 Nov 2026",
  coverImage: "/images/murudeshwara/netrani_island_diving_experience.webp",
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

fs.writeFileSync('scratch/new_post_snippet_2.txt', postTs, 'utf8');
fs.writeFileSync('scratch/assembled_content_2.md', finalContent, 'utf8');
console.log('Snippet 2 generated. Size:', postTs.length);
