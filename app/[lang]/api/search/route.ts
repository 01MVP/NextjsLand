import { source, blog, pageLists } from '@/lib/source';
import { createTokenizer } from '@oama/tokenizers/mandarin';
import { createFromSource } from 'fumadocs-core/search/server';

// 将所有数据源合并成一个
const combinedSource = {
  getPages: () => [
    ...source.getPages(),
    ...blog.getPages(),
    ...pageLists.getPages()
  ]
};

export const { GET } = createFromSource(combinedSource, undefined, {
  localeMap: {
    'zh-cn': {
      components: {
        tokenizer: createTokenizer(),
      },
      search: {
        threshold: 500,
        tolerance: 0,
      },
    },
    'zh-tw': {
      components: {
        tokenizer: createTokenizer(),
      },
      search: {
        threshold: 500,
        tolerance: 0,
      },
    },
    en: 'english',
  },
});
