module.exports = {
  siteMetadata: {
    title: `INVI`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `drawing-gallery`,
        path: `${__dirname}/src/drawing-gallery`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    // {
    //   resolve: "gatsby-plugin-load-script",
    //   options: {
    //     src: "https://code.jquery.com/jquery-3.5.1.slim.min.js",
    //     integrity:
    //       "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj",
    //     crossorigin: "anonymous",
    //   },
    // },

    // {
    //   resolve: "gatsby-plugin-load-script",
    //   options: {
    //     src:
    //       "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js",
    //     integrity:
    //       "sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns",
    //     crossorigin: "anonymous",
    //   },
    // },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url: `http://invi.zysk.in/graphql`,
        // useACF: true,
        baseUrl: "invi.zysk.in",
        // The protocol. This can be http or https.
        protocol: "http",
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the assumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: false,
        // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
        // This feature is untested for sites hosted on wordpress.com.
        // Defaults to true.
        useACF: true,
      },
    },
  ],
}
