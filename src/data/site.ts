// Single source of truth for portfolio content.
// QORVAYN facts come only from the official company information Ryan provided.

export const person = {
  name: 'Ryan Zannah',
  title: 'Software engineer & digital builder',
  location: 'Dhaka, Bangladesh',
  // used only to calculate the age shown on the site; the date itself is never displayed
  birthDate: '2010-03-19',
  experience: '5+ years',
  email: 'ryansstudio19@gmail.com',
  phone: '+880 1983-905724',
  phoneHref: 'tel:+8801983905724',
};

export const photos = {
  office: { src: '/images/ryan/office', w: 1000, h: 1337, alt: 'Ryan Zannah in a black suit at his desk' },
  rooftop: { src: '/images/ryan/rooftop', w: 1000, h: 1197, alt: 'Ryan Zannah on a rooftop garden in Dhaka' },
  sky: { src: '/images/ryan/sky', w: 1240, h: 797, alt: 'Ryan Zannah against a clear blue sky' },
  portrait: { src: '/images/ryan/portrait', w: 880, h: 1404, alt: 'Close portrait of Ryan Zannah in a white shirt' },
} as const;

// widths available on disk for each photo (see public/images)
export const photoWidths: Record<string, number[]> = {
  '/images/ryan/office': [600, 1000],
  '/images/ryan/rooftop': [600, 1000],
  '/images/ryan/sky': [700, 1240],
  '/images/ryan/portrait': [560, 880],
  '/images/brand/qorvayn': [240, 640],
};

export const socials = [
  { label: 'LinkedIn', handle: 'Ryan Zannah', href: 'https://www.linkedin.com/in/ryanzannah24/', icon: 'linkedin' },
  { label: 'GitHub', handle: 'ryansstudio19', href: 'https://github.com/ryansstudio19', icon: 'github' },
  { label: 'Instagram', handle: '@ryan.zannah', href: 'https://www.instagram.com/ryan.zannah/', icon: 'instagram' },
  { label: 'X', handle: '@ryan_zannah', href: 'https://x.com/ryan_zannah', icon: 'x' },
  { label: 'YouTube', handle: '@ryan_zannah24', href: 'https://www.youtube.com/@ryan_zannah24', icon: 'youtube' },
  { label: 'Facebook', handle: 'Ryan Zannah', href: 'https://www.facebook.com/ryan202319', icon: 'facebook' },
] as const;

export const qorvayn = {
  name: 'QORVAYN',
  founded: '10 March 2026',
  country: 'Bangladesh',
  type: 'Technology company',
  summary:
    'QORVAYN is a technology company building intelligent digital products designed to make technology more useful, accessible, creative, and human-centered.',
  mission:
    'To build powerful, accessible, and human-centered technology that helps people think, create, work, and live better in the digital world.',
  vision:
    'A global technology ecosystem where intelligent software, creative tools, and digital experiences work together to empower people and shape the future.',
  operations:
    'Remote-first. The team works remotely and meets in person from time to time to plan and build together.',
  story: [
    'QORVAYN began on 10 March 2026 with a simple ambition: to build meaningful technology for the future.',
    'Founded by Ryan Zannah alongside co-founders Adelia Maharani and Siyami Muntaha Saba, QORVAYN is growing into an ecosystem focused on intelligent software, creative digital experiences, and products designed around real human needs.',
  ],
  founders: [
    { name: 'Ryan Zannah', role: 'Founder & CEO' },
    { name: 'Adelia Maharani', role: 'Co-Founder' },
    { name: 'Siyami Muntaha Saba', role: 'Co-Founder' },
  ],
  values: [
    { name: 'Innovation', text: 'We challenge conventional approaches and build what comes next.' },
    { name: 'Human-centered technology', text: 'Technology should serve people, not complicate their lives.' },
    { name: 'Accessibility', text: 'Powerful technology should be available to more people.' },
    { name: 'Privacy', text: 'People should have control over their data and digital lives.' },
    { name: 'Craftsmanship', text: 'We care about the details behind every product we create.' },
    { name: 'Long-term thinking', text: 'We build for the future, not just for the moment.' },
  ],
  email: 'theqorvayn@gmail.com',
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/qorvayn', icon: 'instagram' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/qorvayn/', icon: 'linkedin' },
    { label: 'X', href: 'https://x.com/Qorvayn', icon: 'x' },
    { label: 'YouTube', href: 'https://www.youtube.com/@Qorvayn', icon: 'youtube' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@qorvayn', icon: 'tiktok' },
    { label: 'GitHub', href: 'https://github.com/qorvayn', icon: 'github' },
    { label: 'Facebook', href: 'https://www.facebook.com/people/Qorvayn/61594435377169/', icon: 'facebook' },
  ],
} as const;

export type Product = {
  slug: string;
  name: string;
  kind: string;
  status: string;
  line: string;
  href: string;
  accent: 'sky' | 'indigo' | 'pink' | 'emerald';
};

export const products: Product[] = [
  {
    slug: 'eskypixx',
    name: 'eSkypixx',
    kind: 'AI visual & social platform',
    status: 'In development',
    line: 'A platform for nature, sky and photography, with AI that helps every great capture find its audience.',
    href: '/eskypixx',
    accent: 'sky',
  },
  {
    slug: 'ryneka',
    name: 'RYNEKA',
    kind: 'AI operating system',
    status: 'Concept & planning',
    line: 'An AI operating system that helps people think, create, automate and manage their digital lives.',
    href: '/ryneka',
    accent: 'indigo',
  },
  {
    slug: 'goalwear',
    name: 'GoalWear',
    kind: 'Football streetwear brand',
    status: 'E-commerce brand',
    line: 'Matchday player-edition drops, classic club kits and street culture. Built for matchday. Worn everywhere.',
    href: '/goalwear',
    accent: 'pink',
  },
];

export const skillGroups = [
  {
    name: 'Development',
    text: 'Building complete products, from interface to server.',
    skills: ['Full-stack development', 'Web development', 'Back-end web development', 'Python', 'Next.js & React', 'Three.js & 3D web', 'Web site production', 'Mobile games'],
  },
  {
    name: 'Design',
    text: 'Visual systems that feel considered and look sharp.',
    skills: ['Web design', 'Graphic design', 'Logo design', 'Content design', 'Banners', 'Image editing', 'Video editing', 'Graphic design software', 'Canva'],
  },
  {
    name: 'SEO & growth',
    text: 'Getting the right people to find what gets built.',
    skills: ['Search engine optimization', 'E-commerce SEO', 'SEO audits', 'SEO copywriting', 'Off-page SEO', 'Online marketing', 'Social media marketing', 'Content creation', 'Online content creation'],
  },
  {
    name: 'Business & tools',
    text: 'Running the work behind the work.',
    skills: ['Business', 'Microsoft Office', 'Microsoft Excel', 'Microsoft Word', 'Microsoft PowerPoint'],
  },
] as const;

export const marqueeSkills = [
  'Full-stack development',
  'Web design',
  'Search engine optimization',
  'Python',
  'Graphic design',
  'Content creation',
  'E-commerce SEO',
  'Logo design',
  'Social media marketing',
  'Video editing',
];

export type Language = { name: string; level: 'Native' | 'Elementary'; note?: string };

export const languages: Language[] = [
  { name: 'English', level: 'Native', note: 'Duolingo English Test 130, Mar 2026' },
  { name: 'German', level: 'Elementary', note: 'Duolingo score 13, Sep 2026' },
  { name: 'French', level: 'Elementary' },
  { name: 'Spanish', level: 'Elementary' },
  { name: 'Italian', level: 'Elementary' },
  { name: 'Portuguese', level: 'Elementary' },
  { name: 'Indonesian', level: 'Elementary' },
  { name: 'Japanese', level: 'Elementary' },
  { name: 'Korean', level: 'Elementary' },
  { name: 'Arabic', level: 'Elementary' },
];

export const experience = [
  {
    role: 'Founder & CEO',
    org: 'QORVAYN',
    when: 'Mar 2026 – now',
    text: 'Founded the technology company behind eSkypixx, RYNEKA and GoalWear. I lead product, design and development.',
  },
  {
    role: 'Graphic designer',
    org: 'X-Brain Info Tech, Kushtia',
    when: 'At age 13',
    text: 'Designed graphics for clients at a local design agency while still a student. The agency has since closed.',
  },
  {
    role: 'Freelancer',
    org: 'Independent',
    when: '2021 – now',
    text: 'Graphic design, web design and development, and content work for clients alongside school.',
  },
];

export const timeline = [
  { year: '2021', title: 'Freelancing begins', text: 'Took on my first design and digital projects for clients, the start of more than five years of hands-on work.' },
  { year: '2022', title: 'Started coding', text: 'Wrote my first lines of Python and found the thing I wanted to keep doing: solving problems with software.' },
  { year: 'Age 13', title: 'Graphic designer at X-Brain Info Tech', text: 'Worked as a graphic designer at X-Brain Info Tech, a design agency in Kushtia, while still a student.' },
  { year: '2024', title: 'The eSkypixx idea', text: 'Sketched a platform dedicated to sky and nature photography, blending technology with the beauty of the natural world.' },
  { year: '2025', title: 'Preparing for Germany', text: 'Started learning German as the first step toward studying and working in Germany.' },
  { year: 'Mar 2026', title: 'Founded QORVAYN', text: 'On 10 March 2026 I founded QORVAYN with co-founders Adelia Maharani and Siyami Muntaha Saba, the parent company for eSkypixx, RYNEKA and GoalWear.' },
  { year: '2026', title: 'Building full time', text: 'Completed my SSC examinations and moved fully into building QORVAYN products while sharpening my engineering skills.' },
  { year: '2027', title: 'Pearson Edexcel IAL A-Levels', text: 'Planned: Mathematics, Physics and Computer Science as a private candidate, building toward AS and A2 certification.' },
  { year: '2028', title: 'Final exams, then Germany', text: 'Planned: final A-Level session in January, results in March, alongside the move to Germany.' },
];

export const interests = [
  { name: 'Sky photography', text: 'Clouds, sunsets and night skies' },
  { name: 'Building products', text: 'Shipping things people use' },
  { name: 'Artificial intelligence', text: 'Where software is heading' },
  { name: 'German culture', text: 'Language, travel, the next chapter' },
  { name: 'Football & cricket', text: 'Patience, timing, resilience' },
  { name: 'Startups', text: 'Small teams, big ambitions' },
];

export const nav = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'QORVAYN', href: '/qorvayn' },
];
