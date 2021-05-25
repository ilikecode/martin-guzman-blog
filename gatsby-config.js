module.exports = {
  siteMetadata: {
    title: `Martin Guzman`,
    author: {
      name: `Martin Guzman`,
      summary: `who currently studing for his OSCP Certification.`,
    },
    description: `A blog about cybersecurity, and OSInt.`,
    siteUrl: `https://www.martin-guzman.com/`,
    social: {
      linkedin: `martin-guzman-ca`,
    },
    menuLinks: [
      {
        name: 'Home',
        slug: '/',
      },
      {
        name: 'Articles',
        slug: '/articles',
      },
      {  
        name: 'About',
        slug: '/about',
      },
      {  
        name: 'Contact',
        slug: '/contact',
      },
    ],
    externalLinks: [
      {
        name: 'LinkedIn',
        url: `https://www.linkedin.com/in/martin-guzman-ca`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-emojis',
            options: {
              // Deactivate the plugin globally (default: true)
              active : true,
              // Add a custom css class
              class  : 'emoji-icon',
              // In order to avoid pattern mismatch you can specify
              // an escape character which will be prepended to the
              // actual pattern (e.g. `#:poop:`).
              escapeCharacter : '#', // (default: '')
              // Select the size (available size: 16, 24, 32, 64)
              size   : 32,
              // Add custom styles
              styles : {
                display      : 'inline',
                margin       : '0',
                'margin-top' : '1px',
                position     : 'relative',
                top          : '5px',
                width        : '25px'
              }
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-bash",
              inlineCodeMarker: null,
              aliases: { sh: "bash" },
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: "bash",
                  extend: "bash",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-smartypants`,
        ],
      },
    },


    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    },
    `gatsby-plugin-smoothscroll`,
     {
       resolve: `gatsby-plugin-google-analytics`,
       options: {
          trackingId: `UA-196940958-1`,
          head: true,
       },
     },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Martin Guzman`,
        short_name: `Martin`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4337C8`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Raleway`,
            variants: [`300`, `400`,`500`]
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
