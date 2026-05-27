// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import AstroPWA from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://kenny324324.github.io',
  base: '/kennyreseme',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    react(),
    AstroPWA({
      registerType: 'autoUpdate',
      base: '/kennyreseme/',
      scope: '/kennyreseme/',
      manifest: {
        name: 'KennyCV',
        short_name: 'KennyCV',
        description: '余亮廷 Kenny Yu — UI/UX 與 App 開發工程師作品集',
        start_url: '/kennyreseme/',
        scope: '/kennyreseme/',
        display: 'standalone',
        orientation: 'portrait',
        theme_color: '#faf9f5',
        background_color: '#faf9f5',
        lang: 'zh-TW',
        icons: [
          { src: 'pwa/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'pwa/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        // Precache only small shell assets; large project images are cached on demand.
        globPatterns: ['**/*.{js,css,html,woff2}'],
        navigateFallback: '/kennyreseme/',
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: { maxEntries: 80, maxAgeSeconds: 60 * 60 * 24 * 30 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: ({ url }) => url.origin === 'https://fonts.googleapis.com',
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'google-fonts-stylesheets' },
          },
          {
            urlPattern: ({ url }) => url.origin === 'https://fonts.gstatic.com',
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
      devOptions: {
        enabled: false,
      },
    }),
  ],
});
