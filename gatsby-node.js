const moduleAliases = require(`./module-aliases`)

const { pageCountIds } = require("./base-constants")
const transformName = require("./src/modules/data/utils/transformNameForNode")

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
      const template = require.resolve(
        `./src/modules/siteDetails/components/SiteDetails.js`
      )

      pageCountIds.forEach(pageCount => {
        const path = `/details/type/${transformName(
          siteType
        )}/source/${transformName(contentSource)}/page-count/${pageCount}`

        createPage({
          path,
          component: template,
          context: {
            id,
            pageCount,
            contentSource,
            siteType,
          },
        })
      })
    }
  )
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: moduleAliases,
    },
  })
}
