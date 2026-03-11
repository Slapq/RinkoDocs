import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  
  title: "RinkoDocs",
  description: "The docs for Rinko!",
  markdown: {
    math: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '快速开始', link: '/quick_start' },
      { text: 'API调用指南', link: '/api-guide/api-guide' }
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: '快速开始', link: '/quick_start' },
          { text: '令牌管理', link: '/Token-Management-Instructions' },
          { text: '分组机制', link: '/group' },
          { text: 'Rinkoai的性质', link: '/the-nature-of-Rinkoai' },
          { text: '联系我们', link: '/contact_us' }
        ]
      },
      {
        text: 'API',
        items: [
          { text: 'API调用指南', link: '/api-guide/api-guide' },
          { text: '简要介绍', link: '/api-guide/quick-api-intro' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
