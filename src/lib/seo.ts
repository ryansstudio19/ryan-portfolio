import type { Metadata } from 'next';

export const SITE_URL = 'https://ryanzannah.online';
export const SITE_NAME = 'Ryan Zannah';

type PageSeo = {
  /** Page title shown in search results (the " | Ryan Zannah" suffix is added for inner pages). */
  title: string;
  description: string;
  /** Route path, e.g. "/about". */
  path: string;
  /** Share image name in public/og (without extension). */
  og: string;
  /** Use the title exactly as given, without the site-name suffix. */
  absoluteTitle?: boolean;
  noindex?: boolean;
};

/** Builds consistent metadata for a page: title, description, canonical URL, Open Graph and Twitter card. */
export function pageMeta({ title, description, path, og, absoluteTitle, noindex }: PageSeo): Metadata {
  const url = `${SITE_URL}${path === '/' ? '' : path}`;
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  const image = { url: `/og/${og}.png`, width: 1200, height: 630, alt: fullTitle };
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: path === '/about' ? 'profile' : 'website',
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      locale: 'en_US',
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      creator: '@ryan_zannah',
      images: [image.url],
    },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true },
  };
}

/** Renders a JSON-LD script tag. */
export function jsonLd(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, '\\u003c') };
}
