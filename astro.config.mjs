// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { rename, rm } from 'node:fs/promises';

/**
 * O Astro gera a 404 em português como /pt/404/index.html, mas a hospedagem
 * procura um arquivo 404.html em cada pasta. Este passo move para /pt/404.html.
 * @type {import('astro').AstroIntegration}
 */
const localized404 = {
  name: 'localized-404',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const from = new URL('pt/404/index.html', dir);
      await rename(from, new URL('pt/404.html', dir));
      await rm(new URL('pt/404/', dir), { recursive: true });
    },
  },
};

export default defineConfig({
  // Domínio do site.
  // É usado nas URLs canônicas, no sitemap e nas prévias de link.
  site: 'https://rotiv.dev',

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', pt: 'pt-BR' },
      },
    }),
    localized404,
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    routing: {
      // inglês na raiz (/blog), português com prefixo (/pt/blog)
      prefixDefaultLocale: false,
    },
  },

  markdown: {
    shikiConfig: {
      // Cores de código para os dois temas; a troca é feita em src/styles/prose.css
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
