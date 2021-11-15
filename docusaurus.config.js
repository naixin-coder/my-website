// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '墨痕',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/coderDD.jpg',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
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
        title: '墨痕',
        // hideOnScroll: true,
        logo: {
          alt: '',
          src: 'img/coderDD.jpg',
        },
        items: [
          {
            type: 'doc',
            docId: 'js/doc1',
            position: 'right',
            label: '学习日志',
          },
          { to: '/blog', label: '个人博客', position: 'right' },
          { to: '/docs/tools', label: '常用网站', position: 'right' },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '学习',
            items: [
              {
                label: 'React',
                to: '/docs/intro',
              },
              // {
              //   label: 'Vue',
              //   to: '/docs/intro',
              // },
              // {
              //   label: 'Umi',
              //   to: '/docs/intro',
              // },
            ],
          },
          {
            title: '相关链接',
            items: [
              {
                label: 'GitHub',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: '掘金',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: '知乎',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: '相关',
            items: [
              {
                label: 'Ant Design',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;