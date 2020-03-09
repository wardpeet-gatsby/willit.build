const moduleAliases = require(`./module-aliases`)

const { pageCountIds } = require("./base-constants")
const formatPath = require("./src/modules/data/utils/formatPath")

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(
    `
      {
        benchmarkApi {
          benchmarkVendors {
            id
            contentSource
            siteType
          }
        }
      }
    `
  )

  result.data.benchmarkApi.benchmarkVendors.forEach(
    ({ id, contentSource, siteType }) => {
      const template = pageCountIds.forEach(pageCount => {
        const detailsPath = createPage({
          path: formatPath(`details`, siteType, contentSource, pageCount),
          component: require.resolve(
            `./src/modules/siteDetails/components/SiteDetailsPage.js`
          ),
          context: {
            id,
            pageCount,
            contentSource,
            siteType,
          },
        })

        createPage({
          path: formatPath(`calculator`, siteType, contentSource, pageCount),
          component: require.resolve(
            `./src/modules/calculator/components/CalculatorPage.js`
          ),
          context: {
            pageCount,
            contentSource,
            siteType,
          },
        })
      })
    }
  )

  const defaultCalculatorContentSource =
    result.data.benchmarkApi.benchmarkVendors[0].contentSource
  const defaultCalculatorSiteType =
    result.data.benchmarkApi.benchmarkVendors[0].siteType

  createPage({
    path: `/calculator`,
    component: require.resolve(
      `./src/modules/calculator/components/CalculatorPage.js`
    ),
    context: {
      pageCount: pageCountIds[0],
      contentSource: defaultCalculatorContentSource,
      siteType: defaultCalculatorSiteType,
    },
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: moduleAliases,
    },
  })
}
