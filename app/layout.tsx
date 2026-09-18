import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'], display: 'swap' });
const playfair = Playfair_Display({ variable: '--font-playfair', subsets: ['latin'], display: 'swap' });
const title = 'PARPERPIR | Nuestro Universo de Inversión';
const description = 'PARPERPIR es una plataforma privada para centralizar análisis fundamental, valoración y seguimiento de compañías.';

export const metadata: Metadata = {
  metadataBase: new URL('https://parperpir.es'),
  title,
  description,
  alternates: { canonical: '/' },
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.svg` },
  openGraph: { type: 'website', locale: 'es_ES', url: '/', siteName: 'PARPERPIR', title, description },
  twitter: { card: 'summary', title, description },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B1320',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className={`${inter.variable} ${playfair.variable}`}><body>{children}<script defer type="module" src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "f3ecc7a4b1e44eff91d2cd33833c0f01"}'></script></body></html>;
}
