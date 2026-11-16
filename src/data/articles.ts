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
    slug: 'building-orbyn-private-space-long-distance-couples',
    title: 'Building Orbyn: a private home for couples who live apart',
    description:
      'Why I started building Orbyn at QORVAYN, what it does for long-distance couples, how its live photobooth works and what has to happen before the public launch.',
    seoTitle: 'Building Orbyn: An App for Long-Distance Couples',
    seoDescription:
      'Ryan Zannah on building Orbyn, a private space for long-distance couples: two clocks on one dial, two skies, a live photobooth and privacy by design.',
    date: '2026-11-16',
    tags: ['Orbyn', 'QORVAYN', 'Product', 'Next.js'],
    minutes: 5,
    body: [
      {
        type: 'p',
        text: 'Orbyn is the newest product at QORVAYN, the technology company I founded in March 2026. It is a private, calm space for two people who live in two places. The line I keep coming back to is the one on its home page: two places, one home. The beta is open now, and the public launch is planned for the coming months.',
      },
      { type: 'h2', text: 'The problem' },
      {
        type: 'p',
        text: 'Couples who live apart keep their relationship going across a stack of apps: one for chat, one for calls, one for photos, one for notes. Each does its job, but none of them feels like a place the two of you share. Time zones make it harder. One person is going to sleep while the other is starting their day, and the small moments that make a relationship feel close get lost in between.',
      },
      {
        type: 'p',
        text: 'I wanted to build the opposite of a social network: no followers, no feed, no audience. Just one space that belongs to two people.',
      },
      { type: 'h2', text: 'What Orbyn does' },
      {
        type: 'ul',
        items: [
          'Two clocks, one dial: a 24-hour ring with noon at the top that shows both local times, so you can see who is awake and when you can talk',
          'Two skies: each side follows its own real sky and local weather',
          'Thinking of you: one tap sends a small light that arrives as a handwritten slip',
          'A reunion countdown, shown in each person’s own time zone',
          'Whispers: voice notes recorded before sleep and heard on waking',
          'Memories and love notes: a polaroid vault, a corkboard and letters sealed until a date you choose',
          'A date lounge with an AI date planner that understands both time zones',
          'A daily check-in for mood, energy and sleep that takes about ten seconds',
        ],
      },
      { type: 'h2', text: 'The photobooth is the heart of it' },
      {
        type: 'p',
        text: 'The feature I am most excited about is the Photobooth. Both partners open it, both cameras go live side by side, and a synced countdown starts on both phones. Pick a scene and each phone cuts both people out of their rooms and places them in the same picture. At the end you design a photo strip and download or share it.',
      },
      {
        type: 'p',
        text: 'The background removal runs on the phone itself, so camera images are not sent to a server to make the cut-out. That was a deliberate choice: the most personal feature in the app should also be the most private one.',
      },
      { type: 'h2', text: 'Private by design' },
      {
        type: 'p',
        text: 'Every Orbyn space holds exactly two people, and one partner joins through a private invite link that only works once. Photos, videos and voice notes sit in private storage. There are no ads, nothing in a space is used to sell anything, and a couple can delete their whole space whenever they want.',
      },
      { type: 'h2', text: 'How it is built' },
      {
        type: 'ul',
        items: [
          'Next.js, React and TypeScript for one web app that works on phones and computers and installs to the home screen',
          'Framer Motion for the calm, smooth motion that runs through the whole app',
          'Supabase for sign-in, the database, private file storage and the realtime updates that keep two phones in sync',
          'Vercel for hosting, with every push to the main branch deployed automatically',
        ],
      },
      { type: 'h2', text: 'What happens before launch' },
      {
        type: 'p',
        text: 'Most of Orbyn already works end to end. The part that matters most, two real people using it at the same time on two phones in two places, is what I am testing next. After that come the final checks on privacy and reliability, and then the public launch. It will stay free to start, with a paid tier planned later.',
      },
      {
        type: 'note',
        text: 'Orbyn is in beta at orbyn-drab.vercel.app. If you are in a long-distance relationship and want to try it, I would love to hear what you think.',
      },
    ],
  },
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
