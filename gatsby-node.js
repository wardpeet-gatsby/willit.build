const moduleAliases = require(`./module-aliases`)
const { PAGE_COUNTS, CONTENT_SOURCES, SITE_TYPES } = require("./src/constants")

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
