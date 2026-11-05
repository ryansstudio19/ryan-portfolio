import { Analytics } from '@vercel/analytics/next';
import type { Metadata, Viewport } from 'next';
import '@fontsource/orbitron/500.css';
import '@fontsource/orbitron/700.css';
import '@fontsource/orbitron/800.css';
import '@fontsource/orbitron/900.css';
import '@fontsource/rajdhani/400.css';
import '@fontsource/rajdhani/500.css';
import '@fontsource/rajdhani/600.css';
import '@fontsource/rajdhani/700.css';
import './globals.css';
import { SITE_URL } from '@/lib/seo';
import Background from '@/components/Background';
import Cursor from '@/components/Cursor';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import Providers from '@/components/Providers';
import { ScrollProgress } from '@/components/motion';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Ryan Zannah | Software Engineer & Digital Builder',
    template: '%s | Ryan Zannah',
  },
  description:
    'Ryan Zannah is a software engineer and digital builder from Dhaka, Bangladesh with 5+ years in web development, design and SEO. Founder of QORVAYN.',
  applicationName: 'Ryan Zannah',
  authors: [{ name: 'Ryan Zannah', url: SITE_URL }],
  creator: 'Ryan Zannah',
  publisher: 'Ryan Zannah',
  category: 'technology',
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: 'website',
    siteName: 'Ryan Zannah',
    locale: 'en_US',
    url: SITE_URL,
    images: [{ url: '/og/home.png', width: 1200, height: 630, alt: 'Ryan Zannah, software engineer and digital builder' }],
  },
  twitter: { card: 'summary_large_image', creator: '@ryan_zannah', images: ['/og/home.png'] },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
      { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: { google: 'YGGnTbUxZvNRgOkJCzfC9e_mfglf0jIgXYbRJFWLKY4' },
};

export const viewport: Viewport = {
  themeColor: '#020408',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Providers>
          <Background />
          <ScrollProgress />
          <Cursor />
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
