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
            // type: 'doc',
            // docId: 'js/js-intro',
            // position: 'right',
            // label: '学习日志',
            label: '学习日志',
            position: 'right',
            items: [
              {
                label: 'JavaScript',
                to: '/docs/js'
              },
              {
                label: 'CSS相关',
                to: '/docs/css'
              },
              {
                label: 'Flutter相关',
                to: '/docs/flutter'
              }
            ],
          },
          { to: '/blog', label: '个人博客', position: 'right' },
          { to: '/docs/tools', label: '常用网站', position: 'right' },
          {
            type: 'search',
            position: 'right'
          }
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
                to: 'https://react.docschina.org/',
              },
              {
                label: 'Vue',
                to: 'https://v3.cn.vuejs.org/',
              },
              {
                label: 'Umi',
                to: 'https://umijs.org/zh-CN',
              },
            ],
          },
          {
            title: '关于我',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/naixin-coder',
              },
              {
                label: '掘金',
                href: 'https://juejin.cn/user/2225067267468462',
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
                label: 'Docusaurus',
                href: 'https://www.docusaurus.cn/',
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