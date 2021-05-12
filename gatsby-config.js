require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  flags: {
    DEV_SSR: false,
    FAST_DEV: false,
    PRESERVE_WEBPACK_CACHE: false,
    PRESERVE_FILE_DOWNLOAD_CACHE: false,
    PARALLEL_SOURCING: false,
    FAST_REFRESH: false,
  },

  siteMetadata: {
    title: `INVI - Innovative Visuals`,
    description: `INVI is a Virtual Experience Design Studio that helps clients create virtual experiences through architecture, storytelling, and design.`,
    author: `@zysk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `INVI`,
        short_name: `INVI`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: `preview.contentful.com`,
      },
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GOOGLE_ANALYTICS_TRACKING_ID, // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    // `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "/js/hero.js", // Change to the script filename
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "/js/stars.js", // Change to the script filename
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "/js/lighting.js", // Change to the script filename
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "/js/orb.js", // Change to the script filename
      },
    },
  ],
}
