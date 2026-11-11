import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://artiosis.com';
const title = 'Artiosis | Web Design & AI Automation Agency';
const description = 'Artiosis creates custom websites, AI automations and digital solutions for growing businesses in the US and UK. Explore our work and start a project.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { 'max-image-preview': 'large' } },
  openGraph: { type: 'website', siteName: 'Artiosis', title, description, url: '/', images: [{ url: '/artiosis-social.png', width: 1200, height: 630, alt: 'Artiosis web design and AI automation agency' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/artiosis-social.png'] },
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }], apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
