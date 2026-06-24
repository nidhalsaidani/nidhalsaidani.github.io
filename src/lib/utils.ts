---
import type { CollectionEntry } from 'astro:content';

export function sortByDate(a: CollectionEntry, b: CollectionEntry): number {
  return new Date(b.data.pubDate || b.data.date).getTime() - new Date(a.data.pubDate || a.data.date).getTime();
}

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function readingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
---
