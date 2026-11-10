import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://artiosis.com';
const title = 'Artiosis | Creative Technology Agency';
const description = 'Turning ambitious ideas into digital experiences.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { 'max-image-preview': 'large' } },
  openGraph: {
    type: 'website',
    siteName: 'Artiosis',
    title,
    description,
    url: '/',
    images: [{ url: '/artiosis-social.png', width: 1200, height: 630, alt: 'Artiosis, Turning ambitious ideas into digital experiences.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [{ url: '/artiosis-social.png', alt: 'Artiosis, Turning ambitious ideas into digital experiences.' }],
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
