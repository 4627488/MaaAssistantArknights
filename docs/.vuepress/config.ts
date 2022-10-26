import { defineUserConfig } from 'vuepress';
import Theme from './theme.config';
import SearchPlugin from './plugins/search';

export default defineUserConfig({
  lang: "zh-CN",
  title: "MaaAssistantArknights",
  description: "MAA",
  theme: Theme,
  locales: {
    '/': {
      lang: 'zh-CN',
      description: '开发者文档',
    },
    '/zh-tw/': {
      lang: 'zh-TW',
      description: '開發者文檔',
    },
    '/en-us/': {
      lang: 'en-US',
      title: 'Documents'
    },
    '/ja-jp/': {
      lang: 'ja-JP',
      description: 'ドキュメント'
    }
  },
  markdown: {
    headers: {
      level: [2, 3, 4, 5],
    },
  },
  plugins: [SearchPlugin()],
});
