import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Hope Harbor Community Transformers Ltd | NGO in Uganda',
    template: '%s | Hope Harbor Community Transformers',
  },

  description:
    'Hope Harbor Community Transformers Ltd is a non-profit organization in Uganda focused on community development, health, education, climate action, gender equality, and economic empowerment. We transform lives through sustainable programs and partnerships.',

  keywords: [
    'Hope Harbor Community Transformers',
    'Hope Harbor Community Transformers Ltd',
    'Hope Harbor',
    'Hope Harbor Community',
    'NGO in Uganda',
    'Non-profit organizations Uganda',
    'Community development Uganda',
    'Health and sanitation programs Uganda',
    'Economic empowerment Uganda',
    'Women empowerment Uganda',
    'Gender equality Uganda',
    'Climate action Uganda',
    'Food security Uganda',
    'Human rights organizations Uganda',
    'Charity organizations Uganda',
    'Support communities Uganda',
    'Sustainable development Uganda',
    'Community transformation Africa',
  ],

  authors: [{ name: 'Hope Harbor Community Transformers Ltd' }],
  creator: 'Hope Harbor Community Transformers Ltd',
  publisher: 'Hope Harbor Community Transformers Ltd',

  metadataBase: new URL('https://hopeharborcommunitytransformers.org/'), // ⚠️ replace with your real domain

  openGraph: {
    title: 'Hope Harbor Community Transformers Ltd',
    description:
      'Transforming communities across Uganda through health, education, economic empowerment, and sustainable development initiatives.',
    url: 'https://hopeharborcommunitytransformers.org/',
    siteName: 'Hope Harbor Community Transformers',
    images: [
      {
        url: '/community 3.jpg', // hero image
        width: 1200,
        height: 630,
        alt: 'Hope Harbor Community Transformers Uganda',
      },
    ],
    locale: 'en_UG',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Hope Harbor Community Transformers Ltd',
    description:
      'Empowering communities in Uganda through sustainable development, health, and economic programs.',
    images: ['/hero-bg.jpg'],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: 'Nonprofit Organization',

  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },

  manifest: '/site.webmanifest',

  // Extra SEO boosts
  other: {
    'geo.region': 'UG',
    'geo.placename': 'Uganda',
    'geo.position': '0.3476;32.5825', // Kampala coordinates
    'ICBM': '0.3476, 32.5825',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
