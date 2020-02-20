const activeEnv =
  process.env.ACTIVE_ENV || process.env.NODE_ENV || `development`

console.info(`Using environment config: '${activeEnv}'`)

if (process.env.LOCAL_DEV) {
  console.info(`Loading dot env config: '${activeEnv}'`)
  require(`dotenv`).config({
    path: `.env.${activeEnv}`,
  })
}

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken:
    (process.env.GATSBY_ENV || process.env.NODE_ENV) === `production`
      ? process.env.CONTENTFUL_LIVE_ACCESS_TOKEN
      : process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  host:
    (process.env.GATSBY_ENV || process.env.NODE_ENV) === `production`
      ? undefined
      : process.env.CONTENTFUL_HOST,
}

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
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

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
