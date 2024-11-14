// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PLANTAE Taiwan',
  tagline: '獻給您，來自大自然的贈禮',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://chungyingho.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'chungyingho', // Usually your GitHub org/user name.
  projectName: 'Plantae-Taiwan', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/plantae-social.jpg',
      navbar: {
        title: 'PLANTAE Taiwan',
        logo: {
          alt: 'PLANTAE Taiwan Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            to: '/about',
            position: 'left',
            label: '關於我們',
          },
          {
            to: '/store',
            position: 'left',
            label: '商品圖鑑',
          },
          {to: '/blog', label: '植宇宙手札', position: 'left'},
          {
            href: 'https://www.facebook.com/plantae.tw',
            label: 'Facebook',
            position: 'right',
          },
          {
            href: 'https://www.instagram.com/plantae_taiwan/',
            label: 'Instagram',
            position: 'right',
            }
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} PLANTAE Taiwan. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
