const moduleAliases = require(`./module-aliases`)

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  // TODO: Real numbers for this stuff :D
  const PAGE_COUNTS = [512, 1024, 2048, 4096]
  const CONTENT_SOURCES = [
    `contentful`,
    `drupal`,
    `cosmicjs`,
    `datocms`,
    `mdx`,
    `wordpress`,
  ]
  const SITE_TYPES = [`blog`]

  PAGE_COUNTS.forEach(pageCount => {
    CONTENT_SOURCES.forEach(contentSource => {
      SITE_TYPES.forEach(siteType => {
        createPage({
          path: `/details/type/${siteType}/source/${contentSource}/page-count/${pageCount}`,
          component: require.resolve(
            `./src/modules/siteDetails/components/SiteDetails.js`
          ),
        })
      })
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: moduleAliases,
    },
  })
}
