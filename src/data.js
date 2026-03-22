export const C = {
  bg: '#0a0a0f',
  panel: '#0f0f1a',
  border: '#1a1a3a',
  accent: '#00ffcc',
  a2: '#ff3366',
  a3: '#ffcc00',
  a4: '#7b2fff',
  text: '#c8d0e8',
  dim: '#5a607a',
  code: '#080810',
};

export const NAV_ITEMS = ['HERO', 'PROFILE', 'SKILLS', 'QUESTS', 'PARTY', 'CONTACT'];

export const ABOUT = {
  name: 'Samuel Birhanu',
  bio: 'A passionate developer dedicated to building high-quality web applications. With a focus on performance, scalability, and user experience, I strive to turn complex problems into elegant solutions. My journey in tech is driven by a constant desire to learn and implement the latest industry standards.',
  xp: '2 Years',
  level: 12,
  guild: 'S-Tier Developer',
};

export const SKILLS = [
  { name: 'React', level: 90, type: 'Frontend', color: C.accent },
  { name: 'TypeScript', level: 82, type: 'Language', color: C.a2 },
  { name: 'Node.js', level: 75, type: 'Backend', color: C.a3 },
  { name: 'Rust', level: 70, type: 'Language', color: C.a4 },
  { name: 'PostgreSQL', level: 68, type: 'Database', color: C.a3 },
  { name: 'Docker', level: 60, type: 'DevOps', color: C.accent },
  { name: 'Express.js', level: 91, type: 'Backend', color: C.a2 },
  { name: 'MongoDb', level: 90, type: 'Database', color: C.a4 },
  { name: 'Prisma', level: 90, type: 'Database', color: C.a3 },
];

export const QUESTS = [
  {
    title: "AASTU HR management system",
    status: 'COMPLETED',
    xp: 2400,
    desc: 'A scalable full-stack HR management system designed for AASTU, featuring employee lifecycle management, role-based access control, payroll insights, and a dynamic admin dashboard for analytics and reporting. Built with a robust API layer and optimized database queries for performance.',
    stack: ['React', 'Node', 'Prisma', 'PostgreSQL', 'Express.js'],
    color: C.accent,
    link: 'https://github.com/Samwoker/AASTU-HR',
    image: '/projects/aastu-hr.png',
  },
  {
    title: 'Defi smart contract',
    status: 'COMPLETED',
    xp: 1800,
    desc: 'A decentralized finance (DeFi) smart contract developed using Rust and Soroban on the Stellar network, enabling secure asset management, tokenized ownership, and controlled supply mechanisms with on-chain validation and optimized gas efficiency.',
    stack: ['Rust', 'Soroban'],
    color: C.a3,
    link: 'https://github.com/Samwoker/Defi',
    image: '/projects/stellar.png',
  },
  {
    title: 'Dev-Flow',
    status: 'IN PROGRESS',
    xp: 1200,
    desc: 'A modern developer collaboration platform inspired by Stack Overflow, supporting question/answer threads, voting, tagging, and real-time discussions. Built with a scalable architecture, clean UI, and optimized data fetching for high performance.',
    stack: ['Next.js', 'TypeScript', 'TailwindCSS', 'MongoDB'],
    color: C.accent,
    link: 'https://github.com/Samwoker/dev_flow',
    image: '/projects/devflow.png',
  },
  {
    title: 'Stock Market App',
    status: 'SIDE QUEST',
    xp: 900,
    desc: 'A real-time stock market analysis application providing live price tracking, interactive charts, and financial insights. Designed with efficient data streaming, authentication, and responsive UI for seamless user experience.',
    stack: ['mongoodb', 'nextjs', 'better-auth', 'typescript'],
    color: C.a4,
    link: 'https://github.com/Samwoker/stock',
    image: '/projects/stock.png',
  },
  {
    title: 'Food Ordering Backend Service',
    status: 'SIDE QUEST',
    xp: 900,
    desc: 'A high-performance backend service for a food ordering platform built with Rust and Actix-web, featuring order processing, menu management, authentication, and optimized database interactions using SQLx with PostgreSQL.',
    stack: ['Rust', 'Actix-web', 'PostgreSQL', 'sqlx'],
    color: C.a4,
    link: 'https://github.com/Samwoker/food-ordering-api',
    image: '/projects/rust.png',
  },
  {
    title: 'Kidame Gebeya Backend Service',
    status: 'SIDE QUEST',
    xp: 900,
    desc: 'A production-ready e-commerce backend system supporting product management, secure user authentication, order workflows, and Stripe payment integration. Designed with modular architecture and RESTful APIs for scalability.',
    stack: ['Node.js', 'Express.js', 'Mongodb', 'Stripe', 'JWT'],
    color: C.a4,
    link: 'https://github.com/Samwoker/KidameGebeya',
    image: '/projects/kidamegebeya.png',
  },
];
export const PARTY = [
  { role: 'Frontend', icon: '⚔️', member: 'React / Next.js', power: 92 },
  { role: 'Backend', icon: '🛡️', member: 'Node / Express / Rust / Actix-web', power: 78 },
  { role: 'Database', icon: '📖', member: 'PostgreSQL / Redis', power: 70 },
];


