---
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import siteConfig from '../config';

export async function GET() {
  const posts = await getCollection('blog');
  
  return rss({
    title: siteConfig.site.title,
    description: siteConfig.site.description,
    site: siteConfig.site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      pubDate: post.data.pubDate,
    })),
  });
}
---
