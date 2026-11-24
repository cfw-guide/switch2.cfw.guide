import DefaultTheme from 'vitepress/theme'
import Definition from './components/Definition.vue'
import Tabs from './components/Tabs.vue'
import Tab from './components/Tab.vue'
import BranchLink from './components/BranchLink.vue'
import Layout from './Layout.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Definition', Definition)
    app.component('Tabs', Tabs)
    app.component('Tab', Tab)
    app.component('BranchLink', BranchLink)
  }
}
