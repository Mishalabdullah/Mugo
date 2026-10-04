import rss from '@astrojs/rss';
import { getPosts, postUrl, description } from '../lib/posts';
export async function GET(context) { return rss({ title: 'Mishal Abdullah — Articles', description: 'Notes on development, open source, and intentional living.', site: context.site, items: (await getPosts()).map(post => ({ title: post.data.title, description: description(post), pubDate: post.data.date, link: postUrl(post), categories: post.data.tags })), customData: '<language>en-us</language>' }); }
