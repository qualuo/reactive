// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kolli',
  tagline: 'Super Digital Agency',
  url: 'https://qualuo.github.io/reactive/',
  baseUrl: '/reactive/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'qualuo', // Usually your GitHub org/user name.
  projectName: 'reactive', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // TODO: change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // TODO: change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: false,
        title: 'Kolli',
        logo: {
          alt: 'Site Logo',
          src: 'img/kolli.png', 
        },
        items: [
          {
            to: '/services/temp',
            label: 'Services',
            position: 'left',
          },
          {
            type: 'dropdown',
            label: 'Team',
            position: 'left',
            items: [
              {
                label: 'Quang Luong',
                to: '/team/qualuo',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Experiments',
            to: '/experiments',
            position: 'right',
            items: [
              {
                to: '/experiments/particles',
                label: 'Particles',
              },
              {
                to: '/experiments/youtube',
                label: 'YouTube',
              },
            ],
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Docs',
          },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'right'
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://github.com/qualuo/reactive',
              },
              {
                label: 'Discord',
                href: 'https://github.com/qualuo/reactive',
              },
              {
                label: 'Twitter',
                href: 'https://github.com/qualuo/reactive',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/qualuo/reactive',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kolli`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
