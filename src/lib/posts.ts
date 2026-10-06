import { getCollection, type CollectionEntry } from 'astro:content';
export type Post = CollectionEntry<'blog'>;
export async function getPosts() {
  return (await getCollection('blog', ({ data }) => !data.draft && data.date <= new Date()))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
export const postUrl = (post: Post) => post.data.URL ? `/${post.data.URL.replace(/^\/+|\/+$/g, '')}/` : `/blogs/${post.id}/`;
export const readingTime = (post: Post) => Math.max(1, Math.ceil((post.body ?? '').split(/\s+/).length / 220));
export const description = (post: Post) => (post.data.description || (post.body ?? '').replace(/```[\s\S]*?```/g, '').replace(/!\[[^\]]*\]\([^)]*\)/g, '').replace(/[#*`\[\]]/g, '').replace(/\s+/g, ' ').trim()).slice(0, 160);
export const dateLabel = (date: Date) => date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
