// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

// const lightCodeTheme = require('prism-react-renderer').themes.github
// const darkCodeTheme = require('prism-react-renderer').themes.dracula



require('dotenv').config()

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Notifiles',
  tagline: 'A feature oriented Node JS framework',
  url: 'https://notifiles.github.io',
  baseUrl: '/documentation',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "notifiles", // Usually your GitHub org/user name.
  projectName: "notifiles.github.io", // Usually your repo name.
  // deploymentBranch: 'main',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico', //https://icons8.com/icon/set/animals/plasticine
  plugins: [
    require.resolve("@cmfcmf/docusaurus-search-local"),
    ['drawio', {}],
    require.resolve('docusaurus-plugin-image-zoom'),
    // [
    //   'docusaurus2-dotenv',
    //   {
    //     path: "./.env", // The path to your environment variables.
    //     safe: false, // If false ignore safe-mode, if true load './.env.example', if a string load that file as the sample
    //     systemvars: true, // Set to true if you would rather load all system variables as well (useful for CI purposes)
    //     silent: false, //  If true, all warnings will be suppressed
    //     expand: false, // Allows your variables to be "expanded" for reusability within your .env file
    //     defaults: false, //  Adds support for dotenv-defaults. If set to true, uses ./.env.defaults
    //   }
    // ],
    'docusaurus-plugin-matomo',
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    // [
    //   'docusaurus-plugin-openapi-docs',
    //   {
    //     id: "api", // plugin id
    //     docsPluginId: "classic", // id of plugin-content-docs or preset for rendering docs
    //     config: {
    //       petstore: { // the <id> referenced when running CLI commands
    //         specPath: "apis/petstore.yaml", // path to OpenAPI spec, URLs supported
    //         outputDir: "api/petstore", // output directory for generated files
    //         sidebarOptions: { // optional, instructs plugin to generate sidebar.js
    //           groupPathsBy: "tag", // group sidebar items by operation "tag"
    //         },
    //       },
    //       burgers: {
    //         specPath: "examples/food/burgers/openapi.yaml",
    //         outputDir: "api/food/burgers",
    //       }
    //     }
    //   },
    // ]   
  ],
  markdown: {
    mermaid: true,
  },
  themes: [
    '@docusaurus/theme-mermaid',
    "docusaurus-theme-openapi-docs",
    "docusaurus-json-schema-plugin" //https://jy95.github.io/docusaurus-json-schema-plugin/docs/quick-start
  ],

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
          // lastVersion: 'current',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/notifiles/generator-notifiles/tree/main/packages/create-docusaurus/templates/shared/',
          // docLayoutComponent: "@theme/DocPage",
          // docItemComponent: "@theme/ApiItem" // derived from docusaurus-theme-openapi-docs
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/notifiles/generator-notifiles/tree/main/packages/create-docusaurus/templates/shared/',
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
      // mermaid: {
      //   theme: {
      //     light: 'neutral', 
      //     dark: 'dark'
      //   },
      //   options: {
      //     primaryColor: '#fff',
      //     component_bg_color: '#fefefe',
      //     primaryTextColor: '#323232',
      //     primaryBorderColor: '#323232',
      //     background: '#ffffff',
      //     lineColor: '#fff',
      //     fontFamily: 'Space Grotesk',          
      //     fontSize: 14
      //   },               
      // },

      matomo: {
        // matomoUrl: (process.env.MATOMO_URL && process.env.MATOMO_URL.length) ? process.env.MATOMO_URL : 'https://your.matomo.instance/',
        // siteId: (process.env.MATOMO_SITE_ID && process.env.MATOMO_SITE_ID.length) ? process.env.MATOMO_SITE_ID : 'ID',
        matomoUrl: "https://matomo.notifiles.app/",
        siteId: 1,
        phpLoader: 'matomo.php',
        jsLoader: 'matomo.js',
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        }
      },
      navbar: {
        title: 'Notifiles',
        logo: {
          alt: 'Logo',
          src: 'img/icon.png',
        },
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            type: 'doc',
            docId: 'concepts/motivation',
            position: 'left',
            label: 'Concepts',
          },
          {
            type: 'doc',
            docId: 'guides/gettingstarted',
            position: 'left',
            label: 'Guides',
          },
          {
            type: 'doc',
            docId: 'tutorials/overview',
            position: 'left',
            label: 'Tutorials',
          },
          {
            type: 'doc',
            docId: 'reference/overview',
            position: 'left',
            label: 'Reference',
          },
          {
            type: 'doc',
            docId: 'faq',
            position: 'right',
            label: 'FAQ',
          },
          // {
          //   type: 'doc',
          //   docId: 'commands/install',
          //   position: 'right',
          //   label: 'CLI Commands',
          // },
          // {
          //   type: 'doc',
          //   docId: 'reference/overview',
          //   position: 'right',
          //   label: 'Reference',
          // },
          // {
          //   type: 'doc',
          //   docId: 'example/overview',
          //   position: 'right',
          //   label: 'Example',
          // },
          // {
          //   position: 'right',
          //   label: 'Registry',
          //   href: 'https://notifiles.app',
          // },
          // {
          //   type: 'doc',
          //   docId: 'featuresLibrary/overview',
          //   position: 'right',
          //   label: 'Features Library',
          // },
          // {
          //   type: 'doc',
          //   docId: 'featuresLibrary/overview',
          //   position: 'left',
          //   label: 'Features library',
          // },
          // {
          //   type: 'doc',
          //   docId: 'reference/overview',
          //   position: 'left',
          //   label: 'Reference',
          // },
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Features',
          // },
          // {
          //   to: '/blog', label: 'Blog', position: 'left'
          // },
          {
            href: 'https://github.com/notifiles',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Guides',
          //       to: '/docs/concepts/motivation',
          //     },
          //   ],
          // },
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
          // {
          //   title: 'Enterprise',
          //   items: [
          //     {
          //       label: 'Professional support',
          //       href: '#',
          //     },
          //     {
          //       label: 'Use cases',
          //       href: '#',
          //     },
          //     {
          //       label: 'Pricing',
          //       href: '#',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     // {
          //     //   label: 'GitHub',
          //     //   href: 'https://github.com/notifiles/notifiles-parse',
          //     // },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Notifiles Community. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [{ name: 'notifiles-parse', content: 'notifiles, parse-server, nodejs' }],
    }),
};

module.exports = config;
