import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Hopeharbor Community Transformers Ltd | Serving together, Transforming lives',
    template: '%s | Hopeharbor Community Transformers',
  },

  description:
    'Hopeharbor Community Transformers Ltd is a non-profit organization in Uganda focused on community development, health, education, climate action, gender equality, and economic empowerment. We transform lives through sustainable programs and partnerships.',

  keywords: [
    'Hopeharbor Community Transformers',
    'Hope Harbor Community Transformers',
    'Hopeharbor Community Transformers Ltd',
    'Hope Harbor Community Transformers Ltd',
    'Hopeharbor',
    'Hope Harbor',
    'Hopeharbor Community',
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

  authors: [{ name: 'Hopeharbor Community Transformers Ltd' }],
  creator: 'Hopeharbor Community Transformers Ltd',
  publisher: 'Hopeharbor Community Transformers Ltd',

  metadataBase: new URL('https://hopeharborcommunitytransformers.org'), // ⚠️ replace with your real domain

  openGraph: {
    title: 'Hopeharbor Community Transformers Ltd',
    description:
      'Transforming communities across Uganda through health, education, economic empowerment, and sustainable development initiatives.',
    url: 'https://hopeharborcommunitytransformers.org',
    siteName: 'Hopeharbor Community Transformers',
    images: [
      {
        url: '/hero-bg.jpg', // hero image
        width: 1200,
        height: 630,
        alt: 'Hopeharbor Community Transformers Uganda',
      },
    ],
    locale: 'en_UG',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Hopeharbor Community Transformers Ltd',
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
