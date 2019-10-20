module.exports = {
  title: 'Cotton Project',
  description: 'A carefuly coded collection of mods and libraries of all kinds',
  base: '/Wiki/',
  head: [
    [ 'link', { rel: 'icon', href: '/logo.png' } ]
  ],
  themeConfig: {
    nav: [
      {
        text: 'Libraries docs',
        items: [
          { text: 'Cotton', link: '/cotton/' },
          { text: 'Cotton Resources', link: '/cotton-resources/' },
          { text: 'Cotton Energy', link: '/cotton-energy/' },
          { text: 'Cotton Scripting', link: '/cotton-scripting/' },
          { text: 'LibGui', link: '/libgui/' },
          { text: 'LibCD', link: '/libcd/' },
        ]
      },
      {
        text: 'Discord',
        link: 'https://discord.gg/rNgYs3Z'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/CottonMC'
      }
    ],
    sidebar: {
      '/cotton/': [
        {
          collapsable: false,
          children: [
            '',
            'logging',
            'config',
            'datapack',
            'commons',
            'cauldron',
            'player-events'
          ]
        }
      ],
      '/cotton-resources/': [
        {
          collapsable: false,
          children: [
            '',
            'oregen-config',
            'supported-materials'
          ]
        }
      ],
      '/cotton-energy/': [
        {
          collapsable: false,
          children: [
            '',
            'work-units-system',
            'energy-types'
          ]
        }
      ],
      '/cotton-scripting/': [
        {
          collapsable: false,
          children: [
            '',
            'basics',
            'examples'
          ]
        }
      ],
      '/libgui/': [
        {
          collapsable: false,
          children: [
            '',
            'basics',
            'client-sided-guis'
          ]
        }
      ],
      '/libcd/': [
        {
          collapsable: false,
          children: [
            '',
            'introduction-to-tweakers',
            'recipe-tweaker-example',
            'creating-a-tweaker-addon',
            'tag-extensions'
          ]
        }
      ],
    }
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-imsize'))
    }
  }
}