module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        // When do you want to disable it ?
        src: "https://aframe.io/releases/1.2.0/aframe.min.js",
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        // When do you want to disable it ?
        src:
          "https://unpkg.com/aframe-environment-component@1.1.0/dist/aframe-environment-component.min.js",
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        // When do you want to disable it ?
        src:
          "https://unpkg.com/aframe-layout-component@5.3.0/dist/aframe-layout-component.min.js",
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        // When do you want to disable it ?
        src:
          "https://unpkg.com/aframe-troika-text/dist/aframe-troika-text.min.js",
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        // When do you want to disable it ?
        src: "./src/js/orb.js",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
