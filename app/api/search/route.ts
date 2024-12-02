import { source, blog, pageLists } from '@/lib/source';
import { createSearchAPI } from 'fumadocs-core/search/server';

const indexesDocsList = source.getPages().map((page) => ({ title: page.data.title, description: page.data.description, url: page.url, id: page.url, structuredData: page.data.structuredData, }))
const indexesBlogList = blog.getPages().map((page) => ({ title: page.data.title, description: page.data.description, url: page.url, id: page.url, structuredData: page.data.structuredData, }))
const indexesPageList = pageLists.getPages().map((page) => ({ title: page.data.title, description: page.data.description, url: page.url, id: page.url, structuredData: page.data.structuredData, }))

const listIndexes = [...indexesDocsList, ...indexesBlogList, ...indexesPageList]

export const { GET } = createSearchAPI('advanced', {
  indexes: listIndexes
});
