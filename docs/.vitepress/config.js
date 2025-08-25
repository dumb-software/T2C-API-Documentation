import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "T2C API Documentation",
  description: "Documentation non-officielle de l'API T2C",
  base: '/T2C-API-Documentation/',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/apilogo2.png' }]
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
