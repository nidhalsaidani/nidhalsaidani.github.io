# Complete Documentation

## Table Setup

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager
- Git (optional)

### Installation

```bash
cd website
npm install
npm run dev
```

Visit `http://localhost:4321`.

## Configuration

### Main Config: `src/config.ts`

```typescript
export default {
  site: {
    title: 'Your Name',
    subtitle: 'PhD Candidate | Research Area',
    description: 'Your bio',
    url: 'https://yourusername.github.io',
    author: 'Your Name',
    email: 'your.email@university.edu'
  },
  navigation: [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about/' },
    { title: 'Blog', href: '/blog/' },
    { title: 'Projects', href: '/projects/' },
    { title: 'Publications', href: '/publications/' }
  ],
  social: {
    github: 'https://github.com/yourusername',
    twitter: 'https://twitter.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    google_scholar: 'https://scholar.google.com/...'
  },
  home: {
    name: 'Your Name',
    tagline: 'I study...',
    bio: 'Your biography...',
    research_interests: ['Interest 1', 'Interest 2'],
    photo: '/assets/images/profile.jpg'
  }
}
```

## Content Creation

### Blog Posts: `src/content/blog/`

```markdown
---
title: 'Post Title'
description: 'SEO description'
pubDate: 2026-06-24
tags: ['tag1', 'tag2']
draft: false
---

# Heading

Content in Markdown...
```

### Projects: `src/content/projects/`

```markdown
---
title: 'Project Name'
description: 'One-line description'
date: 2026-06-20
link: 'https://...'
github: 'https://...'
tags: ['tag1', 'tag2']
featured: true
---

# Project Details

Full description...
```

### Publications: `src/content/publications/`

```markdown
---
title: 'Paper Title'
authors: ['Your Name', 'Co-author']
venue: 'Journal Name'
year: 2026
type: 'journal'
link: 'https://doi.org/...'
pdf: '/papers/file.pdf'
featured: true
---

# Abstract

Your abstract...
```

## Deployment

### GitHub Pages

1. Update `astro.config.mjs`:
   ```javascript
   site: 'https://yourusername.github.io',
   ```

2. Enable GitHub Pages in repo Settings

3. Push to main:
   ```bash
   git push origin main
   ```

### Manual

```bash
npm run build
# Upload dist/ to host
```

## Customization

### Colors: `tailwind.config.mjs`

```javascript
colors: {
  primary: {
    500: '#3b82f6',
    600: '#2563eb',
  }
}
```

### Adding Pages

Create `.astro` file in `src/pages/`:

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="New Page">
  <div class="max-w-4xl mx-auto px-4 py-16">
    <h1>Page Title</h1>
  </div>
</Layout>
```

## Troubleshooting

### Build Errors
```bash
rm -rf node_modules .astro
npm install
npm run build
```

### Content Not Showing
- Check frontmatter format
- Verify file location
- Ensure `draft: false`

## Resources

- [Astro Docs](https://docs.astro.build)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [GitHub Pages](https://pages.github.com/)
