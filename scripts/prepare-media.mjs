import sharp from 'sharp';
import { mkdir, readFile, writeFile, stat, readdir } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { parse } from 'yaml';
import { socialCardKey } from '../src/lib/social-card-key.mjs';

const config = parse(await readFile('config.yaml', 'utf8'));
const source = resolve('static', config.params.hero.image.replace(/^\//, ''));
const output = 'src/assets/generated';
await mkdir(output, { recursive: true });
const { width, height } = await sharp(source).metadata();
let photo = sharp(source).rotate();
// Crop the speaking photo around Mishal before encoding, rather than downloading
// the full photograph and zooming it in CSS. Keep the source photograph intact.
if (config.params.hero.image.endsWith('/kph-talk.png')) {
  photo = photo.extract({ left: Math.round(width * .43), top: Math.round(height * .13), width: Math.round(width * .34), height: Math.round(height * .74) });
}
const portrait = await photo.resize({ width: 960, height: 1200, fit: 'cover', withoutEnlargement: true }).webp({ quality: 82 }).toBuffer();
await writeFile(join(output, 'hero.webp'), portrait);
const card = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#151715"/><rect x="56" y="64" width="46" height="6" rx="3" fill="#8fc7ff"/><g font-family="sans-serif"><text x="56" y="153" font-size="18" letter-spacing="3" fill="#8fc7ff">DEVELOPER · INDIE HACKER · WRITER</text><text x="56" y="270" font-size="66" font-weight="700" fill="#f1f0e8">Mishal</text><text x="56" y="350" font-size="66" font-weight="700" fill="#f1f0e8">Abdullah<tspan fill="#8fc7ff">.</tspan></text><text x="56" y="427" font-size="24" fill="#a9afa6">Building things. Sharing the journey.</text><text x="56" y="552" font-size="21" fill="#8fc7ff">mishalabdullah.com</text></g></svg>`);
const inset = await sharp(portrait).resize(420, 526, { fit: 'cover' }).toBuffer();
await sharp(card).composite([{ input: inset, left: 724, top: 52 }]).jpeg({ quality: 85, mozjpeg: true }).toFile(join(output, 'social-card.jpg'));
console.log(`Hero photo: ${Math.round((await stat(source)).size / 1024)} KB original → ${Math.round(portrait.length / 1024)} KB cropped WebP. Generated 1200 × 630 social card.`);

const escapeXml = text => text.replace(/[<>&"']/g, char => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' })[char]);
let articleCards = 0;
for (const name of await readdir('content/blogs', { recursive: true })) {
  if (!/\.mdx?$/.test(name)) continue;
  const markdown = await readFile(join('content/blogs', name), 'utf8');
  const post = parse(markdown.match(/^---\s*\n([\s\S]*?)\n---/)?.[1] || '');
  if (!post || post.draft || new Date(post.date) > new Date()) continue;
  const lines = [];
  let line = '';
  for (const word of post.title.split(/\s+/)) {
    if (`${line} ${word}`.trim().length > 27 && line) { lines.push(line); line = ''; }
    line = `${line} ${word}`.trim();
  }
  if (line) lines.push(line);
  const titleLines = lines.map((text, index) => `<text x="56" y="${205 + index * 60}" font-size="46" font-weight="700" fill="#f1f0e8">${escapeXml(text)}</text>`).join('');
  const canvas = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#151715"/><rect x="56" y="64" width="46" height="6" rx="3" fill="#8fc7ff"/><rect x="724" y="150" width="420" height="370" rx="12" fill="#1d201d"/><g font-family="sans-serif"><text x="56" y="132" font-size="18" letter-spacing="3" fill="#8fc7ff">NOTES FROM THE JOURNEY</text>${titleLines}<text x="56" y="${Math.max(495, 235 + lines.length * 60)}" font-size="23" fill="#a9afa6">By Mishal Abdullah</text><text x="56" y="567" font-size="21" fill="#8fc7ff">mishalabdullah.com</text></g></svg>`);
  const overlays = [];
  if (post.image?.startsWith('/')) {
    const cover = await sharp(resolve('static', post.image.slice(1))).rotate().resize({ width: 400, height: 340, fit: 'inside', withoutEnlargement: true }).toBuffer();
    const dimensions = await sharp(cover).metadata();
    overlays.push({ input: cover, left: 734 + Math.round((400 - dimensions.width) / 2), top: 165 + Math.round((340 - dimensions.height) / 2) });
  }
  await sharp(canvas).composite(overlays).jpeg({ quality: 85, mozjpeg: true }).toFile(join(output, `article-${socialCardKey(post.title, post.image)}.jpg`));
  articleCards++;
}
console.log(`Generated ${articleCards} article sharing cards with legible titles and 1200 × 630 dimensions.`);
