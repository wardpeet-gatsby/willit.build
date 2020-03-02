const path = require(`path`)

const moduleAliases = {
  modules: {
    alias: `@modules`,
    destination: `src/modules`,
  },
  images: {
    alias: `@images`,
    destination: `src/images`,
  },
}

module.exports = Object.values(moduleAliases).reduce(
  (acc, { alias, destination }) => {
    return {
      ...acc,
      [alias]: path.resolve(destination),
    }
  },
  {}
)
