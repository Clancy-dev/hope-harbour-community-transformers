import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/private/',
        ],
      },
    ],
    sitemap: 'https://hopeharborcommunitytransformers.org/sitemap.xml',
    host: 'https://hopeharborcommunitytransformers.org', 
  }
}