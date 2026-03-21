import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "T2C API Documentation",
  description: "Documentation non officielle de l'API T2C",
  lang: 'fr-FR',
  cleanUrls: true,
  base: '/T2C-API-Documentation/',
  lastUpdated: true,

  sitemap: {
    hostname: 'https://dumb-software.github.io/T2C-API-Documentation/',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'https://dumb-software.github.io/T2C-API-Documentation/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#9c3535' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'T2C API Documentation' }],
    ['meta', { property: 'og:image', content: 'https://dumb-software.github.io/T2C-API-Documentation/favicon.png'}],
    ['meta', { property: 'og:url', content: 'https://dumb-software.github.io/T2C-API-Documentation/' }],
    ['meta', { property: 'og:description', content: "Documentation non officielle de l'API T2C" }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'T2C API Documentation' }],
    ['meta', { name: 'twitter:description', content: "Documentation non officielle de l'API T2C" }],
    ['meta', { name: 'twitter:image', content: 'https://dumb-software.github.io/T2C-API-Documentation/apilogo2.png' }],
    ['meta', { name: 'google-site-verification', content: 'XVCEArdPRAwzn5EyP6qS89xwwPJjR7AGCMdQODkZKaM' }],
  ],
  themeConfig: {
    siteTitle: 'T2C API Docs',
    logo: '/favicon.png',
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Introduction', link: '/introduction' },
      {
        text: 'API Yoozly',
        items: [
          { text: 'API Server', link: '/Yoozly/API_Server/' },
          { text: 'Analytics', link: '/Yoozly/analytics/' }
        ]
      },
      { 
        text: 'API WinDev (Obsolète)',
        items: [
          { text: 'OpenIT', link: '/WinDev/OpenIT/' },
          { text: 'T2C XML', link: '/WinDev/T2C_XML/' },
          { text: 'WinDev Push Server', link: '/WinDev/WD_Push/' },
          { text: 'Pegase', link: '/WinDev/pegase/' },
        ]
      }
    ],

    editLink: {
      pattern: 'https://github.com/dumb-software/T2C-API-Documentation/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      copyright: 'Documentation par Dumb Software'
    },

    sidebar: {
      '/': [
        {
          text: "Documentation",
          items: [
            { text: 'Introduction', link: '/introduction' },
          ],
        },
        {
          text: "API Yoozly",
          collapsed: false,
          items: [
            {
              text: 'API_Server',
              collapsed: true,
              items: [
                { text: 'Informations', link: '/Yoozly/API_Server/' }
              ]
            },
            {
              text: 'Analytics',
              collapsed: true,
              items: [
                { text: 'Informations', link: '/Yoozly/analytics/' }
              ]
            },
          ],
        },
        {
          text: "API WinDev (Obsolète)",
          collapsed: false,
          items: [
            { 
              text: 'OpenIT',
              collapsed: true,
              items: [
                { text: 'Informations', link: '/WinDev/OpenIT/' },
                { text: 'Timetables', link: '/WinDev/OpenIT/timetables' },
                { text: 'Prochains Départs', link: '/WinDev/OpenIT/prochainsDeparts' },
                { text: 'Schedules', link: '/WinDev/OpenIT/schedules' },
              ]
            },
            {
              text: 'T2C_XML',
              collapsed: true,
              items: [
                { text: 'Informations', link: '/WinDev/T2C_XML/' },
                { text: 'Alerte', link: '/WinDev/T2C_XML/alerte' },
                { text: 'Brèves', link: '/WinDev/T2C_XML/breves' },
                { text: 'Événements', link: '/WinDev/T2C_XML/evenements' },
                { text: 'Infos trafic', link: '/WinDev/T2C_XML/infos-trafic' },
              ]
            },
            {
              text: 'WinDev Push Server',
              collapsed: true,
              items: [
                { text: 'Informations', link: '/WinDev/WD_Push/' },
              ]
            },
            {
              text: 'Pegase',
              collapsed: true,
              items: [
                { text: 'Informations', link: '/WinDev/pegase/' },
                { text: 'Paramètres', link: '/WinDev/pegase/param' },
                { text: 'Notification', link: '/WinDev/pegase/notification' },
              ]
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dumb-software/T2C-API-Documentation' }
    ],

    search: {
      provider: 'local'
    },
  },
})


