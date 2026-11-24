import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: 'docs',
  title: 'Switch 2 Guide',
  description: 'The complete guide to installing homebrew on your Nintendo Switch 2.',
  ignoreDeadLinks: [
    /^\/files\/.*\.uf2$/
  ],
  themeConfig: {
    nav: [
      { text: 'FAQ', link: '/faq/' },
      { text: 'GitHub', link: 'https://github.com/cfw-guide/switch2.cfw.guide/' }
    ],
    sidebar: {
      '/': [
        {
          text: 'Guide',
          items: [
            { text: 'Get Started', link: '/get-started/' },
            { text: 'Disconnecting from Internet', link: '/disconnecting-from-internet/' },
            { text: 'Checking Firmware Version', link: '/checking-firmware-version/' },
            { text: 'Updating to 23.0.1', link: '/updating-to-23.0.1/' },
            { text: 'Choosing Your Entrypoint', link: '/choosing-your-entrypoint/' },
          ]
        }
      ]
    }
  }
})
