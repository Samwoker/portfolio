export const C = {
  bg: '#0a0a0f',
  panel: '#0f0f1a',
  border: '#1a1a3a',
  accent: '#00ffcc',
  accent2: '#ff3366',
  accent3: '#ffcc00',
  accent4: '#7b2fff',
  text: '#c8d0e8',
  dim: '#5a607a',
  codeBg: '#080810',
};

export const NAV_ITEMS = ['HERO', 'PHOTO', 'SKILLS', 'QUESTS', 'PARTY', 'CONTACT'];

export const SKILLS_DATA = [
  { name: 'React', level: 90, type: 'Frontend', color: C.accent },
  { name: 'TypeScript', level: 82, type: 'Language', color: C.accent3 },
  { name: 'Node.js', level: 75, type: 'Backend', color: C.accent },
  { name: 'Python', level: 70, type: 'Language', color: C.accent4 },
  { name: 'PostgreSQL', level: 68, type: 'Database', color: C.accent2 },
  { name: 'Docker', level: 60, type: 'DevOps', color: C.accent3 },
];

export const QUESTS_DATA = [
  {
    title: "AASTU HR management system",
    status: 'COMPLETED',
    xp: 2400,
    desc: 'Full-stack marketplace with real-time inventory, payment integration, and admin dashboard.',
    stack: ['React', 'Node', 'Stripe', 'PostgreSQL'],
    statusColor: C.accent,
    link: '#',
  },
  {
    title: 'Shadow Analytics',
    status: 'IN PROGRESS',
    xp: 1800,
    desc: 'Real-time data visualization dashboard for monitoring user behavior and conversion funnels.',
    stack: ['Next.js', 'D3.js', 'Redis', 'Python'],
    statusColor: C.accent3,
    link: '#',
  },
  {
    title: 'Guild Chat System',
    status: 'COMPLETED',
    xp: 1200,
    desc: 'WebSocket-powered chat app with rooms, DMs, file sharing, and message threading.',
    stack: ['React', 'Socket.io', 'Express', 'MongoDB'],
    statusColor: C.accent,
    link: '#',
  },
  {
    title: 'Relic AI Assistant',
    status: 'SIDE QUEST',
    xp: 900,
    desc: 'CLI tool that uses LLM APIs to generate boilerplate code and documentation.',
    stack: ['Python', 'OpenAI', 'Click', 'Rich'],
    statusColor: C.accent4,
    link: '#',
  },
];

export const PARTY_DATA = [
  { role: 'Frontend', icon: '⚔️', member: 'React / Next.js', power: 92 },
  { role: 'Backend', icon: '🛡️', member: 'Node / Express', power: 78 },
  { role: 'Design', icon: '✨', member: 'Figma / CSS', power: 85 },
  { role: 'Database', icon: '📖', member: 'PostgreSQL / Redis', power: 70 },
];

// Photo gallery items — replace src with your own image URLs or imports
export const PHOTOS_DATA = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
    caption: 'Deep in the code dungeon',
    tag: 'WORKSPACE',
    tagColor: C.accent,
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80',
    caption: 'Crafting new spells',
    tag: 'CODING',
    tagColor: C.accent3,
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&q=80',
    caption: 'Scouting the battlefield',
    tag: 'GEAR',
    tagColor: C.accent4,
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&q=80',
    caption: 'The adventurer at rest',
    tag: 'PORTRAIT',
    tagColor: C.accent2,
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&q=80',
    caption: 'Reviewing the ancient scrolls',
    tag: 'STUDY',
    tagColor: C.accent,
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
    caption: 'Late night grinding session',
    tag: 'GRIND',
    tagColor: C.accent3,
  },
];
