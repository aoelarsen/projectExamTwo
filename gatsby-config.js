const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)
require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.fotografmortenflaten.no`,
    title: `Fotograf Morten Flaten`,
    description: `Fotograf med studio i Slemmestad, Asker`,
    author: `Anders Øksendal Larsen <andersoelarsen@gmail.com>`,
    contactInfo: {
      phone: `90113000`,
      email: `m-flaten@online.no`,
      streetAddress: `Vaterlandsveien 31-33`,
      city: `Slemmestad`,
      zipCode: `3470`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fotograf Morten Flaten`,
        short_name: `Foto M-Flaten`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#275E6A`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon/fmf-icon-black.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPGraphQL`,
        fieldName: `wpgraphql`,
        url: `${process.env.GATSBY_WP_PROTOCOL}://${process.env.GATSBY_WP_URL}/graphql`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Montserrat:400,400i,600"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: process.env.GA_TRACKING_ID,
          // Setting this parameter is optional
          anonymize: true,
        },
        // facebookPixel: {
        //   pixelId: 'YOUR_FACEBOOK_PIXEL_ID'
        // },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production"],
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
