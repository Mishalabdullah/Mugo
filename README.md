# Mishal Abdullah — personal website

Dark-only Astro website using locally hosted Inter. The original `config.yaml` remains the source for profile, project, experience, achievement, and social information. `static/` is Astro’s public asset directory, so existing image and document URLs keep working.

## Development

Requires Node 22.12 or later.

```sh
npm install
npm run dev -- --background
npm run astro -- dev status
npm run astro -- dev stop
npm run build
npm run check
npm run verify
```

Deploy the generated `dist/` directory to your static hosting provider. The canonical domain is configured in `astro.config.mjs` as `https://mishalabdullah.com`.

## Publishing articles

Add a `.md` or `.mdx` file to `content/blogs/`:

```yaml
---
title: "A useful thing I learned"
description: "A concise, specific summary for search results and social sharing."
date: 2026-10-04
tags: [Development, Open Source]
image: /images/blogs/my-article.png
draft: false
---
```

Write Markdown below the frontmatter. Put images in `static/images/blogs/`. The filename determines `/blogs/my-article/`; optional `slug` frontmatter can set a stable custom ID. `draft: true` and future dates exclude posts from all public pages and feeds. Add `updatedDate` when making substantial updates. New posts automatically appear in the article library, homepage, related articles, RSS, and sitemap after rebuilding.

Legacy Hugo `URL` frontmatter keeps its original root-level permalink (e.g. `/curl/`). `/blogs/<filename>/` redirects to that permalink. `/blog/` redirects to `/blogs/`. Static Astro redirects use HTML meta refresh; configure equivalent HTTP 301 redirects on your hosting platform if it doesn’t use Astro’s redirect output.

Gallery images are loaded from `static/gallery/`, optimized by Astro, and open in a keyboard-accessible photo viewer. Use descriptive filenames for captions and alt text.

SEO includes canonical URLs, per-page descriptions, Open Graph and Twitter metadata, Person and BlogPosting structured data, sitemap, robots.txt, RSS at `/rss.xml`, and the legacy `/index.xml` feed. Submit `/sitemap-index.xml` in Google Search Console after deploying.
