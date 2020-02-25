const path = require(`path`)
const moduleAliases = require(`./module-aliases`)

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  const pages = [
    {
      path: ``,
      componentPath: `./src/templates/landing.js`,
    },
    {
      path: `details`,
      matchPath: `details/*`,
      componentPath: `./src/templates/site-details.js`,
    },
    {
      path: `calculator`,
      componentPath: `./src/templates/calculator.js`,
    },
    {
      path: `api-playground`,
      componentPath: `./src/templates/api-playground.js`,
    },
  ]

  pages.forEach(page => {
    createPage({
      path: `/${page.path}`,
      component: require.resolve(page.componentPath),
      ...(page.matchPath && { matchPath: page.matchPath }),
      context: { page },
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  const webpackAliases = Object.values(moduleAliases).reduce(
    (acc, { alias, destination }) => {
      return {
        ...acc,
        [alias]: path.resolve(destination),
      }
    },
    {}
  )

  actions.setWebpackConfig({
    resolve: {
      alias: webpackAliases,
    },
  })
}
