const fs = require('fs');

const assembledContent = fs.readFileSync('scratch/assembled_content.md', 'utf8');

// Ensure internal links in markdown are crisp
let finalContent = assembledContent
  .replace(/planning a Murdeshwar scuba dive/g, 'planning a [Murudeshwar scuba dive](/scuba-diving-murudeshwar)')
  .replace(/visit the official Netrani Scuba Dive website/g, 'visit the official [Netrani Scuba Dive website](/)')
  .replace(/ANetrani scuba diveis/g, 'A **Netrani scuba dive** is')
  .replace(/aMurdeshwar scuba dive/g, 'a [Murudeshwar scuba dive](/scuba-diving-murudeshwar)');

const newPost = {
  slug: "netrani-scuba-dive-beyond-the-first-dive",
  title: "Netrani Scuba Dive: Beyond the First Dive – Discover Marine Life and Underwater Adventures",
  metaTitle: "Netrani Scuba Dive: Beyond the First Dive – Marine Life & Adventures",
  subtitle: "Discover marine life and underwater adventures at Netrani Island off Murudeshwar. Learn what to expect, how to prepare, underwater photography tips, and essential safety advice.",
  description: "Explore Netrani scuba dive near Murudeshwar. Discover colourful marine life, first-time diving advice, underwater photography tips, package selection, and safety essentials.",
  category: "Scuba Diving Guides",
  tags: [
    "Netrani Scuba Dive",
    "Netrani Island Diving",
    "Murudeshwar Scuba",
    "Marine Life Netrani",
    "First Time Scuba",
    "Underwater Photography Netrani"
  ],
  readTime: "9 min read",
  date: "23 Nov 2026",
  coverImage: "/images/murudeshwara/netrani_island_marine_life.webp",
  faq: [
    {
      question: "Is Netrani scuba dive suitable for beginners?",
      answer: "Yes, introductory scuba diving programmes are available for beginners who meet the relevant medical and safety requirements. Professional instruction and supervision are essential."
    },
    {
      question: "Do I need to know swimming for Netrani scuba?",
      answer: "Swimming and water-comfort requirements depend on the particular programme and operator. Discuss your swimming ability honestly before confirming your booking."
    },
    {
      question: "What marine life can I see around Netrani Island?",
      answer: "Depending on the dive location and natural conditions, you may encounter parrotfish, butterflyfish, triggerfish, moray eels and different varieties of reef fish."
    },
    {
      question: "How long does the scuba diving experience take?",
      answer: "The overall trip includes reporting, registration, a safety briefing, boat transportation and the diving activity. The schedule and underwater duration vary by package and conditions."
    },
    {
      question: "Can I take photographs during my dive?",
      answer: "Underwater photographs and videos may be available through selected packages. Ask the operator about photography arrangements and additional charges."
    },
    {
      question: "What is the best season for a Murdeshwar scuba dive?",
      answer: "October to May is generally considered a favourable period for planning, but actual availability depends on sea conditions and local operations."
    },
    {
      question: "How do I book a Netrani scuba experience?",
      answer: "You can visit the official Netrani Scuba Dive website and contact the team for available packages, prices, schedules and booking information."
    }
  ],
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

fs.writeFileSync('scratch/new_post_snippet.ts', postTs, 'utf8');
console.log('Snippet generated. Size:', postTs.length);
