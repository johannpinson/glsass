const path = require('path')

module.exports = {
  title: 'Glsass',
  tagline: 'The Sass framework more formally called Glass',
  url: 'https://glsass.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'johannpinson', // Usually your GitHub org/user name.
  projectName: 'glsass', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Glsass',
      logo: {
        alt: 'Glsass Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-reverse.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        // right
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            {
              to: '/versions',
              label: 'All versions',
            },
          ],
        },
        {
          href: 'https://github.com/johannpinson/glsass',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          label: 'Debug mode',
          position: 'right',
          className: 'js-debug-baseline',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting started',
              to: 'docs/installation',
            },
            {
              label: 'exitCSS',
              to: 'docs/exitcss',
            },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/johannpinson/glsass',
            },
          ],
        },
      ],
      logo: {
        alt: 'Glsass logo',
        src: 'img/logo-white.svg',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Glsass. Made with ⌨️ from France.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/johannpinson/glsass/edit/main/website/',
          showLastUpdateTime: true,
          // lastVersion: '1.0.0',
          versions: {
            current: {
              label: 'next',
            },
          },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/johannpinson/glsass/edit/main/website/blog/',
          feedOptions: {
            type: 'rss',
            copyright: `Copyright © ${new Date().getFullYear()} Glsass - Johann Pinson.`,
          },
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All our posts',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/main.scss'),
            require.resolve('./src/css/demo.scss'),
          ],
        },
      },
    ],
  ],
  // plugins: ['docusaurus-plugin-sass'],
  plugins: [path.resolve(__dirname, 'plugins/sass')],
  scripts: [
    {
      src: '/scripts/index.js',
      async: true,
    },
  ],
}
