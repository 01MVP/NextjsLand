import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';
import type { InferMetaType, InferPageType } from 'fumadocs-core/source';
import { docs, meta, blogPosts, pagesPosts } from '@/.source';

export const source = loader({
  baseUrl: '/docs',
  source: createMDXSource(docs, meta)
});

export const blog = loader({
  baseUrl: '/blog',
  source: createMDXSource(blogPosts, []),
});

export const pageLists = loader({
  baseUrl: '/pages',
  source: createMDXSource(pagesPosts, [])
});

export type DocsPage = InferPageType<typeof source>;
export type DocsMeta = InferMetaType<typeof source>;
export type BlogPage = InferPageType<typeof blog>;
export type BlogMeta = InferMetaType<typeof blog>;
export type PagesType = InferPageType<typeof pageLists>;
export type PagesMeta = InferMetaType<typeof pageLists>;
