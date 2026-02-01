import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "T2C API Documentation",
  description: "Documentation non-officielle de l'API T2C",
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
          { text: 'API Server', link: '/Yoozly/API_Server/readme' },
          { text: 'Analytics', link: '/Yoozly/analytics/readme' }
        ]
      },
      { 
        text: 'API WinDev',
        items: [
          { text: 'OpenIT', link: '/WinDev/OpenIT/readme' },
          { text: 'T2C XML', link: '/WinDev/T2C_XML/readme' },
          { text: 'WinDev Push Server', link: '/WinDev/WD_Push/readme' },
          { text: 'Pegase', link: '/WinDev/pegase/readme' },
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
          text: "API_Server",
          collapsed: false,
          items: [
            { text: 'Informations', link: '/Yoozly/API_Server/readme' },
          ],
        },
        {
          text: "Analytics",
          collapsed: false,
          items: [
            { text: 'Informations', link: '/Yoozly/analytics/readme' },
          ],
        },
        {
          text: "OpenIT",
          collapsed: false,
          items: [
            { text: 'Informations', link: '/WinDev/OpenIT/readme' },
            { text: 'Timetables', link: '/WinDev/OpenIT/timetables' },
            { text: 'Prochains Departs', link: '/WinDev/OpenIT/prochainsDeparts' },
            { text: 'Schedules', link: '/WinDev/OpenIT/schedules' },
          ],
        },
        {
          text: "T2C_XML",
          collapsed: false,
          items: [
            { text: 'Informations', link: '/WinDev/T2C_XML/readme' },
            { text: 'Alerte', link: '/WinDev/T2C_XML/alerte' },
            { text: 'Brèves', link: '/WinDev/T2C_XML/breves' },
            { text: 'Événements', link: '/WinDev/T2C_XML/evenements' },
            { text: 'Infos trafic', link: '/WinDev/T2C_XML/infos-trafic' },
          ],
        },
        {
          text: "WinDev Push Server",
          collapsed: false,
          items: [
            { text: 'Informations', link: '/WinDev/WD_Push/readme' },
          ],
        },
        {
          text: "Pegase",
          collapsed: false,
          items: [
            { text: 'Informations', link: '/WinDev/pegase/readme' },
            { text: 'Paramètres', link: '/WinDev/pegase/param' },
            { text: 'Notification', link: '/WinDev/pegase/notification' },
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


