# NextjsLand

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![Fumadocs](https://img.shields.io/badge/Fumadocs-14.5-green)](https://fumadocs.vercel.app/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> 🌍 基于 Next.js 15 和 Fumadocs 构建的现代化多语言文档模板

[English](./README.md) | [在线演示](https://nextjsland.netlify.app/)

## ✨ 特性

### 🌐 国际化支持
- **完整的多语言支持** - 英文、简体中文、繁体中文
- **中文搜索优化** - 针对中文内容的增强搜索功能
- **语言切换** - 文档的无缝语言切换
- **Next-Intl 集成** - 专业的国际化解决方案

### 🎨 现代化设计
- **响应式设计** - 在所有设备上完美显示
- **深色/浅色模式** - 内置主题切换
- **美观界面** - 简洁专业的界面设计
- **Tailwind CSS** - 实用优先的 CSS 框架

### 📚 丰富的内容类型
- **文档系统** - 带导航的综合文档
- **博客系统** - 内置博客，支持标签和分类
- **落地页** - 专业的首页模板
- **MDX 支持** - 在 Markdown 中使用 React 组件

### 🚀 高性能
- **Next.js 15** - 最新的 Next.js 和 App Router
- **服务端渲染** - 快速的初始页面加载
- **静态生成** - 性能优化
- **全文搜索** - 由 Orama 驱动

## 🚀 快速开始

### 环境要求

- Node.js 18+ 
- pnpm（推荐）或 npm

### 安装

1. **克隆仓库**
   ```bash
   git clone https://github.com/your-username/nextjsland.git
   cd nextjsland
   ```

2. **安装依赖**
   ```bash
   pnpm install
   # 或者
   npm install
   ```

3. **启动开发服务器**
   ```bash
   pnpm dev
   # 或者
   npm run dev
   ```

4. **打开浏览器**
   访问 [http://localhost:3000](http://localhost:3000)

## 📁 项目结构

```
nextjsland/
├── app/                    # Next.js App Router
│   ├── [locale]/          # 国际化路由
│   └── i18n/              # 国际化配置
├── components/            # React 组件
├── content/               # 文档内容
│   ├── docs/              # 文档文件
│   ├── blog/              # 博客文章
│   └── pages/             # 静态页面
├── locales/               # 翻译文件
├── public/                # 静态资源
└── styles/                # 全局样式
```

## 🌍 添加新语言

1. **添加语言配置**
   ```typescript
   // lib/i18n.ts
   export const locales = ['en', 'zh-cn', 'zh-tw', 'your-locale'];
   ```

2. **创建翻译文件**
   ```bash
   mkdir locales/your-locale
   cp locales/en/index.json locales/your-locale/index.json
   ```

3. **翻译内容**
   - 更新 `locales/your-locale/` 中的翻译文件
   - 创建带有 `.your-locale.mdx` 后缀的内容文件

## 📝 内容管理

### 文档
在 `content/docs/` 中创建 `.mdx` 文件，包含前置元数据：

```markdown
---
title: 页面标题
description: 页面描述
---

您的内容...
```

### 博客文章
在 `content/blog/` 中创建 `.mdx` 文件，包含前置元数据：

```markdown
---
title: 博客文章标题
description: 文章描述
date: 2024-01-01
tags: [标签1, 标签2]
---

您的博客内容...
```

## 🛠️ 技术栈

- **框架**: [Next.js 15](https://nextjs.org/)
- **文档**: [Fumadocs](https://fumadocs.vercel.app/)
- **样式**: [Tailwind CSS](https://tailwindcss.com/)
- **国际化**: [next-intl](https://next-intl-docs.vercel.app/)
- **语言**: [TypeScript](https://www.typescriptlang.org/)
- **搜索**: [Orama](https://oramasearch.com/)
- **图标**: [Lucide React](https://lucide.dev/)

## 📦 部署

### Vercel（推荐）

1. 将代码推送到 GitHub
2. 将仓库连接到 [Vercel](https://vercel.com/)
3. 一键部署

### 其他平台

```bash
# 构建生产版本
pnpm build

# 启动生产服务器
pnpm start
```

## 🤝 贡献

欢迎贡献！请随时提交 Pull Request。

1. Fork 仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- 基于 [nextify](https://github.com/frontendweb3/nextify) 项目
- 使用 [Fumadocs](https://fumadocs.vercel.app/) 构建
- 国际化指南：[Fumadocs i18n](https://fumadocs.vercel.app/docs/ui/internationalization)

## 📞 支持

如果您有任何问题或需要帮助，请：

- 📖 查看[文档](https://your-docs-url.com)
- 🐛 在 [Issues](https://github.com/your-username/nextjsland/issues) 中报告错误
- 💬 加入我们的 [Discord 社区](https://discord.gg/your-invite)

---

⭐ 如果这个项目对您有帮助，请给它一个星标！