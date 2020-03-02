const moduleAliases = require(`../module-aliases`)

module.exports = {
  stories: ["../src/modules/**/*.stories.js"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links"],
  webpackFinal: async config => {
    console.log(config)
    config.resolve.alias = moduleAliases

    return config
  },
}
