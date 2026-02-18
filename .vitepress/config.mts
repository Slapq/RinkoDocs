import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  
  title: "RinkoDocs",
  description: "The docs for Rinko!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
          { text: '快速开始', link: '/quick start' },
      { text: 'API调用指南', link: '/API调用指南/API调用指南' }
    ],

    sidebar: [
      {
        text: '指南',
        items: [
      { text: '快速开始', link: '/quick start' },
          { text: '分组机制', link: '/分组机制' },
          { text: 'Rinkoai的性质', link: '/Rinkoai的性质' },
          { text: '联系我们', link: '/联系我们' }
        ]
      },
      {
        text: 'API',
        items: [
          { text: 'API调用指南', link: '/API调用指南/API调用指南' },
          { text: '简要介绍', link: '/API调用指南/通常够用的API调用的简要介绍' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
