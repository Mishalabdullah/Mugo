import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { readdirSync, readFileSync } from 'node:fs';

const legacyAliases = readdirSync('./content/blogs').filter(name => /\.mdx?$/.test(name))
  .filter(name => /^URL:/m.test(readFileSync(`./content/blogs/${name}`, 'utf8')))
  .map(name => `/blogs/${name.replace(/\.mdx?$/, '').toLowerCase().replace(/\s+/g, '-')}/`);

export default defineConfig({
  site: 'https://mishalabdullah.com',
  publicDir: './static',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap({ filter: (page) => !page.includes('/404') && !page.includes('/blog/') && !legacyAliases.includes(new URL(page).pathname) })],
  markdown: { shikiConfig: { theme: 'github-dark' } },
  redirects: { '/blog': '/blogs/' },
});
