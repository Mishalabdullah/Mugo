import { readdir, readFile, access } from 'node:fs/promises';
import { join } from 'node:path';
import assert from 'node:assert/strict';
import { parse } from 'yaml';

async function files(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(e => e.isDirectory() ? files(join(dir, e.name)) : [join(dir, e.name)]))).flat();
}
const htmlFiles = (await files('dist')).filter(p => p.endsWith('.html'));
let pages = 0;
for (const path of htmlFiles) {
  const html = await readFile(path, 'utf8');
  if (html.includes('http-equiv="refresh"')) continue;
  pages++;
  assert.match(html, /<html lang="en"/, `${path}: language`);
  assert.match(html, /name="description"/, `${path}: description`);
  assert.match(html, /rel="canonical" href="https:\/\/mishalabdullah.com\//, `${path}: canonical`);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${path}: one primary heading`);
  for (const match of html.matchAll(/(?:src|href)="(\/[^"#?]*)/g)) {
    const url = decodeURIComponent(match[1]);
    if (url === '/') continue;
    const asset = join('dist', url.endsWith('/') ? `${url}index.html` : url);
    await access(asset).catch(() => { throw new Error(`${path}: missing local asset or link ${url}`); });
  }
  for (const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) JSON.parse(match[1]);
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
console.log(`Verified ${pages} content pages, local links and assets, structured data, ${published} RSS articles, sitemap and robots.txt.`);
