// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import type { FunctionalComponent } from 'vue'
import DefaultTheme from 'vitepress/theme'
import HomePage from './components/HomePage.vue'
import './style.css'

const HomeLayout: FunctionalComponent = () => {
  return h(HomePage)
}

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'home-hero-after': () => h(HomePage)
    })
  }
} satisfies Theme
