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
import Background from '@/components/Background';
import Cursor from '@/components/Cursor';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import Providers from '@/components/Providers';
import { ScrollProgress } from '@/components/motion';

export const metadata: Metadata = {
  metadataBase: new URL('https://ryanzannah.online'),
  title: {
    default: 'Ryan Zannah | Founder & CEO of QORVAYN',
    template: '%s | Ryan Zannah',
  },
  description:
    'Ryan Zannah is a software engineer and the founder and CEO of QORVAYN, the technology company behind eSkypixx, RYNEKA and GoalWear.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
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
