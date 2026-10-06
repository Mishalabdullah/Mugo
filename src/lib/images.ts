import type { ImageMetadata } from 'astro';

const localImages = import.meta.glob<{ default: ImageMetadata }>('../../static/**/*.{png,jpg,jpeg,webp,avif}', { eager: false });
export async function localImage(path: string): Promise<ImageMetadata | undefined> {
  const loader = localImages[`../../static${decodeURIComponent(path)}`];
  return loader ? (await loader()).default : undefined;
}
