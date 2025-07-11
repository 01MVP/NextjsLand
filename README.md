# NextjsLand

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![Fumadocs](https://img.shields.io/badge/Fumadocs-14.5-green)](https://fumadocs.vercel.app/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> 🌍 A modern, multilingual documentation template built with Next.js 15 and Fumadocs

[中文文档](./README.zh.md) | [Live Demo](https://nextjsland.netlify.app/)

## ✨ Features

### 🌐 Internationalization
- **Full multilingual support** - English, Simplified Chinese, Traditional Chinese
- **Optimized Chinese search** - Enhanced search functionality for Chinese content
- **Language switching** - Seamless language switching for documentation
- **Next-Intl integration** - Professional i18n solution

### 🎨 Modern Design
- **Responsive design** - Perfect on all devices
- **Dark/Light mode** - Built-in theme switching
- **Beautiful UI** - Clean and professional interface
- **Tailwind CSS** - Utility-first CSS framework

### 📚 Rich Content Types
- **Documentation** - Comprehensive docs with navigation
- **Blog system** - Built-in blog with tags and categories
- **Landing page** - Professional homepage template
- **MDX support** - React components in Markdown

### 🚀 Performance
- **Next.js 15** - Latest Next.js with App Router
- **Server-side rendering** - Fast initial page loads
- **Static generation** - Optimized for performance
- **Full-text search** - Powered by Orama

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/nextjsland.git
   cd nextjsland
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
nextjsland/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Internationalized routes
│   └── i18n/              # i18n configuration
├── components/            # React components
├── content/               # Documentation content
│   ├── docs/              # Documentation files
│   ├── blog/              # Blog posts
│   └── pages/             # Static pages
├── locales/               # Translation files
├── public/                # Static assets
└── styles/                # Global styles
```

## 🌍 Adding New Languages

1. **Add locale configuration**
   ```typescript
   // lib/i18n.ts
   export const locales = ['en', 'zh-cn', 'your-locale'];
   ```

2. **Create translation files**
   ```bash
   mkdir locales/your-locale
   cp locales/en/index.json locales/your-locale/index.json
   ```

3. **Translate content**
   - Update translation files in `locales/your-locale/`
   - Create content files with `.your-locale.mdx` suffix

## 📝 Content Management

### Documentation
Create `.mdx` files in `content/docs/` with frontmatter:

```markdown
---
title: Your Page Title
description: Page description
---

Your content here...
```

### Blog Posts
Create `.mdx` files in `content/blog/` with frontmatter:

```markdown
---
title: Blog Post Title
description: Post description
date: 2024-01-01
tags: [tag1, tag2]
---

Your blog content...
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Documentation**: [Fumadocs](https://fumadocs.vercel.app/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Search**: [Orama](https://oramasearch.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com/)
3. Deploy with one click

### Other Platforms

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Forked from [nextify](https://github.com/frontendweb3/nextify)
- Built with [Fumadocs](https://fumadocs.vercel.app/)
- Internationalization guide: [Fumadocs i18n](https://fumadocs.vercel.app/docs/ui/internationalization)

## 📞 Support

If you have any questions or need help, please:

- 📖 Check the [documentation](https://your-docs-url.com)
- 🐛 Report bugs in [Issues](https://github.com/your-username/nextjsland/issues)
- 💬 Join our [Discord community](https://discord.gg/your-invite)

---

⭐ If you find this project helpful, please give it a star!