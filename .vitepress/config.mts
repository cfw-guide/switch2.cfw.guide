import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Switch 2 Guide',
  description: 'The complete guide to installing homebrew on your Nintendo Switch 2.',
  themeConfig: {
    nav: [
      { text: 'FAQ', link: '/guide/faq/' },
      { text: 'GitHub', link: 'https://github.com/cfw-guide/switch2.cfw.guide/' }
    ],
    sidebar: {
      '/guide/updating-to-23.0.1/': [
        {
          text: 'Guide',
          items: [
            { text: 'Get Started', link: '/guide/get-started/' },
            { text: 'Disconnecting from Internet', link: '/guide/disconnecting-from-internet/' },
            { text: 'Checking Firmware Version', link: '/guide/checking-firmware-version/' },
            { text: 'Updating to 23.0.1', link: '/guide/updating-to-23.0.1/' },
            { text: 'Choosing Your Entrypoint', link: '/guide/choosing-your-entrypoint/' },
            { text: 'Preparing CivSwitch', link: '/guide/preparing-civswitch/' },
            { text: 'Using the CivSwitch Bridge', link: '/guide/setting-up-civswitch-bridge/' },
            { text: 'Installing the CivSwitch Trigger', link: '/guide/installing-civswitch-trigger/' },
            { text: 'Installing kaiHEN (CivSwitch)', link: '/guide/installing-kaihen-(civswitch)/' },
            { text: 'Using kaiHEN', link: '/guide/using-kaihen/' },
          ]
        }
      ],
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Get Started', link: '/guide/get-started/' },
            { text: 'Disconnecting from Internet', link: '/guide/disconnecting-from-internet/' },
            { text: 'Checking Firmware Version', link: '/guide/checking-firmware-version/' },
            { text: 'Choosing Your Entrypoint', link: '/guide/choosing-your-entrypoint/' },
            { text: 'Preparing CivSwitch', link: '/guide/preparing-civswitch/' },
            { text: 'Using the CivSwitch Bridge', link: '/guide/setting-up-civswitch-bridge/' },
            { text: 'Installing the CivSwitch Trigger', link: '/guide/installing-civswitch-trigger/' },
            { text: 'Installing kaiHEN (CivSwitch)', link: '/guide/installing-kaihen-(civswitch)/' },
            { text: 'Using kaiHEN', link: '/guide/using-kaihen/' }
          ]
        }
      ]
    }
  }
})
