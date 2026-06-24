# Personal Academic Website

A modern, responsive personal academic website built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

![Astro](https://img.shields.io/badge/Astro-5.x-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.x-teal)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 📱 **Responsive design** - Works on all devices
- 🌓 **Dark mode** - Automatic theme switching with system preference detection
- 📝 **Blog** - Markdown-based blog posts with tags and reading time
- 🚀 **Projects** - Showcase your research and software projects
- 📚 **Publications** - Display academic papers with BibTeX support
- 🔍 **SEO optimized** - Meta tags, Open Graph, and Twitter cards
- 📡 **RSS feed** - Automatic RSS generation for blog posts
- 🗺️ **Sitemap** - Auto-generated sitemap for search engines
- 🚢 **GitHub Pages ready** - Deployment workflow included

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:4321` to see your site.

## 📖 Documentation

See [DOCS.md](./DOCS.md) for complete documentation including:
- Setup instructions
- Configuration guide
- Content creation
- Deployment
- Customization

## 🛠️ Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   ├── favicon.svg
│   ├── cv.pdf                  # Add your CV here
│   └── papers/                 # Add paper PDFs here
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── profile.jpg     # Your profile photo
│   ├── content/
│   │   ├── blog/               # Blog posts
│   │   ├── projects/           # Projects
│   │   └── publications/       # Publications
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── Layout.astro
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── about.astro
│   │   ├── index.astro
│   │   ├── projects.astro
│   │   ├── publications.astro
│   │   └── rss.xml.js
│   ├── config.ts               # Site configuration
│   └── content.config.ts
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

## ⚙️ Configuration

### 1. Update Site Info

Edit `src/config.ts`:

```typescript
export default {
  site: {
    title: 'Your Name',
    subtitle: 'PhD Candidate | Your Research Area',
    description: 'Your bio description',
    url: 'https://yourusername.github.io',
    author: 'Your Name',
    email: 'your.email@university.edu'
  },
  // ... more config
}
```

### 2. Add Your Photo

Place your profile photo at `src/assets/images/profile.jpg`.

### 3. Update Social Links

Edit the `social` object in `src/config.ts` with your profiles.

## 📝 Content Creation

### Blog Posts

Create Markdown files in `src/content/blog/`:

```markdown
---
title: 'My First Post'
description: 'A brief description for SEO'
pubDate: 2026-06-24
tags: ['research', 'topic']
draft: false
---

# Your content here
```

### Projects

Create Markdown files in `src/content/projects/`:

```markdown
---
title: 'Project Name'
description: 'What it does'
date: 2026-06-20
link: 'https://project-url.com'
github: 'https://github.com/yourusername/project'
tags: ['ml', 'python']
featured: true
---
```

### Publications

Create Markdown files in `src/content/publications/`:

```markdown
---
title: 'Paper Title'
authors: ['Your Name', 'Co-author']
venue: 'Journal Name'
year: 2026
type: 'journal'
link: 'https://doi.org/xx.xxxx/xxxxx'
pdf: '/papers/2026-paper.pdf'
featured: true
---
```

## 🚢 Deployment

### GitHub Pages

1. **Update site URL** in `astro.config.mjs`:
   ```js
   site: 'https://yourusername.github.io',
   ```

2. **Enable GitHub Pages** in repository Settings → Pages → GitHub Actions

3. **Push to main**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

The workflow will automatically build and deploy.

### Other Hosts

```bash
npm run build
# Upload dist/ folder to Netlify, Vercel, Cloudflare Pages, etc.
```

## 🎨 Customization

### Colors

Edit `tailwind.config.mjs`:

```javascript
colors: {
  primary: {
    500: '#3b82f6',  // Change these
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

## 📦 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build production site |
| `npm run preview` | Preview production build |
| `npm run astro` | Run Astro CLI commands |

## 🛠️ Technologies

- [Astro 5](https://astro.build) - Static site generator
- [Tailwind CSS 3](https://tailwindcss.com) - CSS framework
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Markdown](https://www.markdownguide.org) - Content authoring

## 📄 License

MIT - Feel free to use this template for your own academic website!

## 🙏 Acknowledgments

Design inspired by:
- [nielsrogge.github.io](https://nielsrogge.github.io)
- [Gary King's Harvard site](https://gking.harvard.edu/mysite/)
