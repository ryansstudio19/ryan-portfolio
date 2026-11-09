// Articles. Each body is a list of simple blocks rendered by the article page.

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'stats'; items: { value: string; label: string }[] }
  | { type: 'note'; text: string };

export type Article = {
  slug: string;
  title: string;
  description: string;
  /** Shorter versions for search results (titles ~60, descriptions ~155 characters). */
  seoTitle?: string;
  seoDescription?: string;
  date: string; // ISO date
  tags: string[];
  minutes: number;
  body: Block[];
};

export const articles: Article[] = [
  {
    slug: 'rebuilding-my-portfolio-nextjs-seo',
    title: 'How I rebuilt my portfolio with Next.js, Framer Motion and SEO in mind',
    description:
      'A case study of rebuilding ryanzannah.online: moving from static HTML to Next.js, adding motion that works on phones, fixing mobile performance and setting up SEO from day one.',
    seoTitle: 'Rebuilding My Portfolio: Next.js, Motion & SEO Case Study',
    seoDescription:
      'How I rebuilt ryanzannah.online with Next.js and Framer Motion, raised mobile performance from 60–77 to 89–94 and set up SEO from day one.',
    date: '2026-11-09',
    tags: ['Case study', 'Next.js', 'SEO', 'Performance'],
    minutes: 6,
    body: [
      {
        type: 'p',
        text: 'My old portfolio was a handful of static HTML pages hosted on GitHub Pages. It did the job, but it was missing the basics: no sitemap, no share previews when someone posted the link, no structured data for Google, one photo, and a contact form that only pretended to send. In November 2026 I rebuilt it from scratch with three goals: keep the dark, futuristic look I liked, make it feel alive, and make it easy for both people and search engines to find.',
      },
      { type: 'h2', text: 'The stack' },
      {
        type: 'ul',
        items: [
          'Next.js with static export, so every page is plain HTML that loads fast and costs nothing to host',
          'React and Framer Motion for the animations',
          'Lenis for smooth scrolling on desktop',
          'Vercel for hosting, with the domain moved over from GitHub Pages',
          'Self-hosted Orbitron and Rajdhani fonts, so there are no extra requests to Google Fonts',
        ],
      },
      {
        type: 'p',
        text: 'Static export was the key decision. A portfolio does not need a server: once the pages are built, they are just files. That keeps the site fast everywhere and leaves nothing to break.',
      },
      { type: 'h2', text: 'Motion with a purpose' },
      {
        type: 'p',
        text: 'The centrepiece is my name in the hero. Every letter jumps and wobbles when the cursor touches it, and on phones it reacts to a tap or a finger sliding across it, without stopping the page from scrolling. Around it, headings reveal word by word, sections slide up out of a blur and replay when you scroll back, buttons pull toward the cursor and cards tilt toward it.',
      },
      {
        type: 'p',
        text: 'Every effect respects the reduced-motion setting on the visitor’s device, and anything that needs a mouse, like the custom cursor and the tilt, switches itself off on touch screens.',
      },
      { type: 'h2', text: 'The performance problem I did not expect' },
      {
        type: 'p',
        text: 'The site looked great on desktop, but when I audited every page with Google Lighthouse, mobile performance scored between 60 and 77, and one page blocked the main thread for 2.7 seconds. The cause was the animated particle background: it was building a fresh glow gradient for every particle, on every frame.',
      },
      {
        type: 'p',
        text: 'The fix was simple once I found it. Each glow is now drawn once into a small image and reused. On phones the background uses fewer particles, runs at 30 frames per second and renders at a lower resolution, which looks identical at that size. It also waits until the page has loaded before it starts, so it never competes with the first paint.',
      },
      {
        type: 'stats',
        items: [
          { value: '60–77 → 89–94', label: 'Mobile performance score' },
          { value: '2.7s → 0.07s', label: 'Worst main-thread blocking' },
          { value: '100', label: 'Accessibility and SEO, every page' },
        ],
      },
      { type: 'h2', text: 'SEO from day one' },
      {
        type: 'p',
        text: 'Instead of treating SEO as something to add later, I built it in from the start:',
      },
      {
        type: 'ul',
        items: [
          'A unique title and description for every page, sized so Google shows them in full',
          'Canonical URLs, so the www and preview copies of the site never compete with the real one',
          'A designed share image for every page, so links look right on LinkedIn, WhatsApp and X',
          'A sitemap and robots.txt',
          'Structured data describing me, my company QORVAYN, my services and the page breadcrumbs',
          'An llms.txt file that summarises the site for AI search tools',
          'Google Search Console set up on launch day',
        ],
      },
      { type: 'h2', text: 'Results after the first week' },
      {
        type: 'p',
        text: 'Within days, Google had recognised the structured data for breadcrumbs and my profile page. In the first few days of Search Console data, the site appeared in searches 13 times and was clicked 6 times: a 46% click-through rate at an average position of 2.7. Those numbers are small because the site is brand new, but the click-through rate shows the titles and descriptions are doing their job.',
      },
      {
        type: 'stats',
        items: [
          { value: '2.7', label: 'Average position in Google' },
          { value: '46%', label: 'Click-through rate' },
          { value: '0', label: 'Errors across 20 page checks' },
        ],
      },
      { type: 'h2', text: 'What I would tell anyone building a portfolio' },
      {
        type: 'ol',
        items: [
          'Decide what the site is for before choosing effects. Mine needed to show who I am and make it easy to get in touch.',
          'Give every page its own link, title and description. One long page is much harder to find in search.',
          'Test on a real phone size early. My biggest problem only showed up on mobile.',
          'Measure with Lighthouse instead of guessing, then fix the biggest number first.',
          'Set up Search Console on launch day, so you can see what people search for from the start.',
        ],
      },
    ],
  },
];

export const articleBySlug = (slug: string) => articles.find((a) => a.slug === slug);
