const moduleAliases = require(`./module-aliases`)

const {
  pageCountIds,
  BaseBuildType,
  buildTypeKeys,
} = require("./base-constants")
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
      pageCountIds.forEach(pageCount => {
        buildTypeKeys.forEach(buildType => {
          const detailsPath = createPage({
            path: formatPath({
              prefix: `details`,
              siteType,
              contentSource,
              pageCount,
              buildType: BaseBuildType[buildType].displayedAs,
            }),
            component: require.resolve(
              `./src/modules/siteDetails/components/SiteDetailsPage.js`
            ),
            context: {
              id,
              pageCount,
              contentSource,
              siteType,
              buildType,
            },
          })

          createPage({
            path: formatPath({
              prefix: `calculator`,
              siteType,
              contentSource,
              pageCount,
            }),
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
