exports.createPages = ({ actions }) => {
    const { createPage } = actions
  
    const pages = [
      {
        path: ``,
        componentPath: `./src/templates/landing.js`
      },
      {
        path: `details`,
        matchPath: `details/*`,
        componentPath: `./src/templates/site-details.js`
      },
      {
        path: `calculator`,
        componentPath: `./src/templates/calculator.js`
      },
      {
        path: `api-playground`,
        componentPath: `./src/templates/api-playground.js`
      },
    ]

    pages.forEach(page => {
      createPage({
        path: `/${page.path}`,
        component: require.resolve(page.componentPath),
        ...page.matchPath && { matchPath: page.matchPath },
        context: { page },
      })
    })
  }