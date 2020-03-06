const moduleAliases = require(`./module-aliases`)
const {
  pageCountIds,
  contentSourceIds,
  siteTypeIds,
} = require("./base-constants")

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  pageCountIds.forEach(pageCount => {
    contentSourceIds.forEach(contentSource => {
      siteTypeIds.forEach(siteType => {
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
