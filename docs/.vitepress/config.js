import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "T2C API Documentation",
  description: "Documentation non-officielle de l'API T2C",
  base: '/T2C-API-Documentation/',
  sitemap: { hostname: 'https://dumb-software.github.io/T2C-API-Documentation/' },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'https://dumb-software.github.io/T2C-API-Documentation/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#9c3535' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'T2C API Documentation' }],
    ['meta', { property: 'og:image', content: '/T2C-API-Documentation/apilogo2.png'}],
    ['meta', { property: 'og:url', content: 'https://dumb-software.github.io/T2C-API-Documentation/' }],
    ['meta', { name: 'google-site-verification', content: 'XVCEArdPRAwzn5EyP6qS89xwwPJjR7AGCMdQODkZKaM' }],
  ],
  themeConfig: {
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Introduction', link: '/introduction' },
      {
        text: 'Backends',
        items: [
          { text: 'OpenIT', link: '/OpenIT/readme' },
          { text: 'T2C XML', link: '/T2C_XML/readme' },
          { text: 'WinDev Push Server', link: '/WD_Push/readme' },
          { text: 'Pegase', link: '/pegase/readme' },
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
          text: "OpenIT",
          collapsed: false,
          items: [
            { text: 'Informations', link: '/OpenIT/readme' },
            { text: 'Timetables', link: '/OpenIT/timetables' },
            { text: 'Prochains Departs', link: '/OpenIT/prochainsDeparts' },
            { text: 'Schedules', link: '/OpenIT/schedules' },
          ],
        },
        {
          text: "T2C_XML",
          collapsed: false,
          items: [
            { text: 'Informations', link: '/T2C_XML/readme' },
            { text: 'Alerte', link: '/T2C_XML/alerte' },
            { text: 'Brèves', link: '/T2C_XML/breves' },
            { text: 'Événements', link: '/T2C_XML/evenements' },
            { text: 'Infos trafic', link: '/T2C_XML/infos-trafic' },
          ],
        },
        {
          text: "WinDev Push Server",
          collapsed: false,
          items: [
            { text: 'Informations', link: '/WD_Push/readme' },
          ],
        },
        {
          text: "Pegase",
          collapsed: false,
          items: [
            { text: 'Informations', link: '/pegase/readme' },
            { text: 'Paramètres', link: '/pegase/param' },
            { text: 'Notification', link: '/pegase/notification' },
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

    markdown: {
      image: {
        lazyLoading: true
      },
    },
  },
})
