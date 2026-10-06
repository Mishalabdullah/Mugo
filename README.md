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

For **inline article images**, use a relative filesystem path so Astro can optimize the image, for example `![A meaningful description](../../static/images/blogs/my-article.png)`. Keep frontmatter `image` as `/images/blogs/my-article.png`; the cover component resolves and optimizes it automatically. Markdown images have intrinsic dimensions and lazy loading; covers and cards use responsive WebP variants.

Legacy Hugo `URL` frontmatter keeps its original root-level permalink (e.g. `/curl/`). `/blogs/<filename>/` redirects to that permalink. `/blog/` redirects to `/blogs/`. Every build generates `dist/_redirects` with explicit HTTP **301** rules (with and without trailing slashes) for static hosts supporting that format, including Netlify and Cloudflare Pages. It also generates `dist/redirects.json` for translating the rules to another host. HTML meta refresh remains a fallback on hosts that do not use these rules. Deploy these generated files along with `dist/`.

`dist/_headers` enables one-year immutable caching for content-hashed `/_astro/` assets on compatible hosts. Enable HTTPS and redirect `www.mishalabdullah.com` to `mishalabdullah.com` in your hosting/domain settings. Serve `dist/404.html` with status 404 for missing routes; do not configure a catch-all SPA rewrite to the homepage.

Gallery images are loaded from `static/gallery/`, optimized by Astro, and open in a keyboard-accessible photo viewer. Use descriptive filenames for captions and alt text.

Add explicit captions to `src/data/gallery.ts` for camera-named files. The lightbox loads an optimized image capped at 1600px rather than the full camera original.

## Image preparation and social previews

`npm run dev`, `npm run build`, and `npm run check` automatically run `scripts/prepare-media.mjs`. It generates a cropped hero WebP from the configured hero photograph and a branded 1200 × 630 JPEG social card in `src/assets/generated/`. Originals are preserved, and generated files are ignored by Git. Run `npm run prepare:media` first if using the Astro CLI directly in a fresh checkout.

Pages default to the branded social card; articles get optimized 1200 × 630 JPEG previews with their title, author, and cover image. Small legacy covers are displayed without enlarging or blurring them. The two main Inter fonts are preloaded, and all fonts are locally hosted.

SEO includes canonical URLs, per-page descriptions, Open Graph and Twitter metadata, Person and BlogPosting structured data, sitemap, robots.txt, RSS at `/rss.xml`, and the legacy `/index.xml` feed. Submit `/sitemap-index.xml` in Google Search Console after deploying.

Articles also include visible breadcrumbs and BreadcrumbList structured data. `npm run verify` checks responsive image variants, social image dimensions, canonical URL uniqueness, structured data, RSS coverage, sitemap contents, and generated redirect rules. After deployment, validate live redirects and 404 status codes, submit the sitemap in Search Console, and check the homepage and an article with PageSpeed Insights and Google’s Rich Results Test. Local checks do not measure real-user Core Web Vitals or guarantee indexing.
