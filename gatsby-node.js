const moduleAliases = require(`./module-aliases`)

// NOTE: This data is duplicated with the constants defined in
// `src/modules/api/constants.js`. Be sure to update both places at once!
const PAGE_COUNTS = ["512", "4096", "32768", "65535"]
const CONTENT_SOURCES = [
  `contentful`,
  `cosmicjs`,
  `datocms`,
  `drupal`,
  `mdx`,
  `wordpress`,
]
const SITE_TYPES = [`blog`]

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  PAGE_COUNTS.forEach(pageCount => {
    CONTENT_SOURCES.forEach(contentSource => {
      SITE_TYPES.forEach(siteType => {
        createPage({
          path: `/details/type/${siteType}/source/${contentSource}/page-count/${pageCount}`,
          component: require.resolve(
            `./src/modules/siteDetails/components/SiteDetails.js`
          ),
          context: {
            pageCount,
            contentSource,
            siteType,
          },
        })
        createPage({
          path: `/calculator/type/${siteType}/source/${contentSource}/page-count/${pageCount}`,
          component: require.resolve(
            `./src/modules/calculator/components/Calculator.js`
          ),
          context: {
            pageCount,
            contentSource,
            siteType,
          },
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
