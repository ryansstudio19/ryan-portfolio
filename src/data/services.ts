// Content for the Services page. Facts only: what Ryan offers and how he works.
// No prices, timelines or client results are claimed here.

export type Service = {
  id: string;
  name: string;
  headline: string;
  intro: string;
  items: string[];
  tools?: string[];
};

export const services: Service[] = [
  {
    id: 'web-development',
    name: 'Web design & development',
    headline: 'Websites that load fast and are easy to grow',
    intro:
      'From a one-page portfolio to a full web app, I design and build sites that look sharp on every screen, load quickly and are simple to keep up to date.',
    items: [
      'Business, personal and portfolio websites',
      'Landing pages for launches and campaigns',
      'E-commerce storefronts',
      'Web apps and dashboards',
      'Mobile-first, responsive layouts',
      'Speed, accessibility and clean code built in',
    ],
    tools: ['Next.js', 'React', 'Python', 'Three.js', 'HTML & CSS'],
  },
  {
    id: 'seo',
    name: 'Search engine optimization (SEO)',
    headline: 'Get found by people already searching for you',
    intro:
      'A good website still needs to be found. I fix what holds a site back in Google and set it up to rank: structure, speed, content and the signals search engines look for.',
    items: [
      'SEO audits with a clear list of fixes',
      'On-page SEO: titles, descriptions, headings, internal links',
      'Technical SEO: speed, indexing, sitemaps, structured data',
      'Off-page SEO and link building',
      'E-commerce SEO for product and category pages',
      'SEO copywriting that reads naturally',
    ],
    tools: ['Google Search Console', 'Lighthouse', 'Schema.org'],
  },
  {
    id: 'branding-design',
    name: 'Branding & graphic design',
    headline: 'A visual identity that holds together',
    intro:
      'I started as a graphic designer at an agency in Kushtia at 13, and design is still at the centre of how I work. Logos, banners and social graphics that look like they belong to the same brand.',
    items: [
      'Logo design',
      'Brand identity and visual systems',
      'Banners and social media graphics',
      'Content and layout design',
      'Image editing and retouching',
    ],
    tools: ['Canva', 'Graphic design software'],
  },
  {
    id: 'content-marketing',
    name: 'Content & social media',
    headline: 'Content that gives people a reason to stay',
    intro:
      'Content and social media marketing to grow an audience around a brand or launch, with the visuals and video to match.',
    items: [
      'Content creation for web and social',
      'Social media marketing',
      'Video editing',
      'Online marketing campaigns',
    ],
  },
];

export const process = [
  { name: 'Talk it through', text: 'You tell me what you are building, who it is for and what success looks like.' },
  { name: 'Plan', text: 'I suggest the approach, scope and next steps, so you know exactly what you are getting.' },
  { name: 'Design & build', text: 'I design and build it, sharing progress so you can give feedback along the way.' },
  { name: 'Launch & grow', text: 'We launch, then make sure it gets found: SEO, speed and content to keep it growing.' },
];

export const reasons = [
  { name: '5+ years of real work', text: 'Freelancing since 2021, and agency experience as a graphic designer from age 13.' },
  { name: 'Design, code and SEO in one', text: 'One person who can design it, build it and get it ranking, without hand-offs.' },
  { name: 'Built to the same standard as this site', text: 'This website scores 100 for SEO and accessibility in Google Lighthouse.' },
  { name: 'Remote, worldwide', text: 'Based in Dhaka, Bangladesh, working with clients anywhere. Native English.' },
];

export const faqs = [
  {
    q: 'Where are you based, and do you work with clients outside Bangladesh?',
    a: 'I am based in Dhaka, Bangladesh and work remotely with clients anywhere in the world. English is my native language, so communication is straightforward.',
  },
  {
    q: 'What do you build websites with?',
    a: 'Most projects use Next.js and React, the same tools this website is built with. I use Python for back-end work and scripting, and choose the stack that fits each project.',
  },
  {
    q: 'Can you improve the SEO of a website I already have?',
    a: 'Yes. I usually start with an SEO audit to find what is holding the site back, then fix the technical issues, improve the on-page content and set up Google Search Console so you can track results.',
  },
  {
    q: 'Do you only build websites, or can you design too?',
    a: 'Both. I design logos, brand identities, banners and social graphics as well as websites, so everything can share one consistent look.',
  },
  {
    q: 'How do we get started?',
    a: 'Send me a message through the contact page or email ryansstudio19@gmail.com with a few lines about your project. I will reply with questions and the next steps.',
  },
];
