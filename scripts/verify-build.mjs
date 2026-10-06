import { readdir, readFile, access } from 'node:fs/promises';
import { join } from 'node:path';
import assert from 'node:assert/strict';
import { parse } from 'yaml';
import sharp from 'sharp';

async function files(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(e => e.isDirectory() ? files(join(dir, e.name)) : [join(dir, e.name)]))).flat();
}
const htmlFiles = (await files('dist')).filter(p => p.endsWith('.html'));
let pages = 0;
const canonicalPages = new Set();
const checkedPreviews = new Set();
for (const path of htmlFiles) {
  const html = await readFile(path, 'utf8');
  if (html.includes('http-equiv="refresh"')) continue;
  pages++;
  assert.match(html, /<html lang="en"/, `${path}: language`);
  assert.match(html, /name="description"/, `${path}: description`);
  assert.match(html, /rel="canonical" href="https:\/\/mishalabdullah.com\//, `${path}: canonical`);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${path}: one primary heading`);
  const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
  if (!path.endsWith('404.html')) {
    assert.ok(!canonicalPages.has(canonical), `${path}: unique canonical`);
    canonicalPages.add(canonical);
  }
  for (const match of html.matchAll(/(?:src|href)="(\/[^"#?]*)/g)) {
    const url = decodeURIComponent(match[1]);
    if (url === '/') continue;
    const asset = join('dist', url.endsWith('/') ? `${url}index.html` : url);
    await access(asset).catch(() => { throw new Error(`${path}: missing local asset or link ${url}`); });
  }
  for (const match of html.matchAll(/srcset="([^"]+)"/g)) {
    for (const candidate of match[1].split(',')) {
      const src = candidate.trim().replace(/\s+\d+(?:\.\d+)?[wx]$/, '');
      if (src.startsWith('/')) await access(join('dist', decodeURIComponent(src)));
    }
  }
  const preview = html.match(/property="og:image" content="([^"]+)"/)?.[1];
  if (preview?.startsWith('https://mishalabdullah.com/') && !checkedPreviews.has(preview)) {
    const imagePath = join('dist', decodeURIComponent(new URL(preview).pathname));
    await access(imagePath);
    const metadata = await sharp(imagePath).metadata();
    assert.equal(metadata.width, 1200, `${path}: social image width`);
    assert.equal(metadata.height, 630, `${path}: social image height`);
    checkedPreviews.add(preview);
  }
  const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
  if (html.includes('property="og:type" content="article"')) {
    const breadcrumb = schemas.find(schema => schema['@type'] === 'BreadcrumbList');
    assert.ok(breadcrumb, `${path}: article breadcrumb schema`);
    assert.equal(breadcrumb.itemListElement.at(-1).item, canonical, `${path}: breadcrumb points to canonical article`);
    const post = schemas.find(schema => schema['@type'] === 'BlogPosting');
    assert.equal(post.mainEntityOfPage, canonical, `${path}: article schema canonical`);
    assert.match(html, /class="article-cover"[^>]*srcset=|srcset="[^"]+"[^>]*class="article-cover"/, `${path}: responsive article cover`);
  }
}
const rss = await readFile('dist/rss.xml', 'utf8');
const entries = await Promise.all((await files('content/blogs')).filter(p => /\.mdx?$/.test(p)).map(async path => {
  const text = await readFile(path, 'utf8');
  return parse(text.match(/^---\s*\n([\s\S]*?)\n---/)?.[1] || '');
}));
const published = entries.filter(e => e && !e.draft && new Date(e.date) <= new Date()).length;
assert.equal((rss.match(/<item>/g) || []).length, published, 'All published articles appear in RSS');
assert.ok(!rss.includes('Hello World'), 'Draft excluded');
await access('dist/sitemap-index.xml');
await access('dist/robots.txt');
const sitemap = await readFile('dist/sitemap-0.xml', 'utf8');
const indexed = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert.deepEqual(new Set(indexed), canonicalPages, 'Sitemap contains canonical content pages only');
const redirects = JSON.parse(await readFile('dist/redirects.json', 'utf8'));
const rules = await readFile('dist/_redirects', 'utf8');
for (const redirect of redirects) {
  assert.ok(rules.includes(`${redirect.source} ${redirect.target} 301`), 'HTTP 301 redirect generated');
  assert.ok(!indexed.includes(new URL(redirect.source, 'https://mishalabdullah.com').href), 'Redirect excluded from sitemap');
}
await access('dist/_headers');
const home = await readFile('dist/index.html', 'utf8');
assert.ok(!home.includes('src="/gallery/kph-talk.png"'), 'Homepage does not download original hero PNG');
assert.ok(home.includes('loading="eager"') && home.includes('fetchpriority="high"'), 'Hero prioritized');
console.log(`Verified ${pages} content pages, responsive assets, ${checkedPreviews.size} social previews, article schemas and breadcrumbs, ${published} RSS articles, canonical-only sitemap, robots.txt, and ${redirects.length} HTTP 301 rules.`);
