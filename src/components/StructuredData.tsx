import { languages, person, qorvayn, skillGroups, socials } from '@/data/site';
import { jsonLd, SITE_URL } from '@/lib/seo';

const PERSON_ID = `${SITE_URL}/#person`;
const ORG_ID = `${SITE_URL}/qorvayn#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const personNode = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: person.name,
  url: SITE_URL,
  image: `${SITE_URL}/images/ryan/office-1000.webp`,
  jobTitle: ['Software Engineer', 'Web Developer', 'SEO Specialist', 'Graphic Designer'],
  description:
    'Web developer, designer and SEO specialist from Dhaka, Bangladesh with 5+ years of experience. Founder of QORVAYN.',
  email: `mailto:${person.email}`,
  address: { '@type': 'PostalAddress', addressLocality: 'Dhaka', addressCountry: 'BD' },
  worksFor: { '@id': ORG_ID },
  knowsAbout: skillGroups.flatMap((g) => g.skills),
  knowsLanguage: languages.map((l) => ({ '@type': 'Language', name: l.name })),
  sameAs: socials.map((s) => s.href),
};

const orgNode = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: qorvayn.name,
  url: `${SITE_URL}/qorvayn`,
  logo: `${SITE_URL}/images/brand/qorvayn-640.webp`,
  description: qorvayn.summary,
  foundingDate: '2026-03-10',
  foundingLocation: { '@type': 'Place', name: 'Bangladesh' },
  founder: [
    { '@id': PERSON_ID },
    { '@type': 'Person', name: 'Adelia Maharani' },
    { '@type': 'Person', name: 'Siyami Muntaha Saba' },
  ],
  email: `mailto:${qorvayn.email}`,
  sameAs: qorvayn.socials.map((s) => s.href),
};

const websiteNode = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: 'Ryan Zannah',
  inLanguage: 'en',
  author: { '@id': PERSON_ID },
  publisher: { '@id': PERSON_ID },
};

function Script({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(data)} />;
}

/** Home: who Ryan is, his site and his company, as one connected graph. */
export function HomeSchema() {
  return <Script data={{ '@context': 'https://schema.org', '@graph': [websiteNode, personNode, orgNode] }} />;
}

/** About: a profile page whose main subject is Ryan. */
export function AboutSchema() {
  return (
    <Script
      data={{
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'ProfilePage',
            '@id': `${SITE_URL}/about#page`,
            url: `${SITE_URL}/about`,
            name: 'About Ryan Zannah',
            isPartOf: { '@id': WEBSITE_ID },
            mainEntity: { '@id': PERSON_ID },
          },
          personNode,
          crumbs([{ name: 'About', path: '/about' }]),
        ],
      }}
    />
  );
}

/** QORVAYN: the organization itself. */
export function QorvaynSchema() {
  return (
    <Script
      data={{ '@context': 'https://schema.org', '@graph': [orgNode, crumbs([{ name: 'QORVAYN', path: '/qorvayn' }])] }}
    />
  );
}

function crumbs(items: { name: string; path: string }[]) {
  const all = [{ name: 'Home', path: '' }, ...items];
  return {
    '@type': 'BreadcrumbList',
    itemListElement: all.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: `${SITE_URL}${c.path}` })),
  };
}

/** Breadcrumb trail for inner pages. */
export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return <Script data={{ '@context': 'https://schema.org', ...crumbs(items) }} />;
}

/** Services: each service offered by Ryan, plus the page's FAQ. */
export function ServicesSchema({
  items,
  faqs,
}: {
  items: { id: string; name: string; intro: string }[];
  faqs: { q: string; a: string }[];
}) {
  return (
    <Script
      data={{
        '@context': 'https://schema.org',
        '@graph': [
          ...items.map((s) => ({
            '@type': 'Service',
            '@id': `${SITE_URL}/services#${s.id}`,
            name: s.name,
            description: s.intro,
            serviceType: s.name,
            url: `${SITE_URL}/services#${s.id}`,
            provider: { '@id': PERSON_ID },
            areaServed: [{ '@type': 'Country', name: 'Bangladesh' }, { '@type': 'Place', name: 'Worldwide' }],
          })),
          {
            '@type': 'FAQPage',
            '@id': `${SITE_URL}/services#faq`,
            mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
          },
          personNode,
          crumbs([{ name: 'Services', path: '/services' }]),
        ],
      }}
    />
  );
}
