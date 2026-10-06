import type { ImageMetadata } from 'astro';
import { socialCardKey } from './social-card-key.mjs';
import fallback from '../assets/generated/social-card.jpg';

const cards = import.meta.glob<{ default: ImageMetadata }>('../assets/generated/article-*.jpg');
export async function socialImage(title: string, image?: string): Promise<ImageMetadata> {
  const loader = cards[`../assets/generated/article-${socialCardKey(title, image)}.jpg`];
  return loader ? (await loader()).default : fallback;
}
