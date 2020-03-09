/**
 * This module uses module.export because it's used by
 * gatsby-node.js
 */

module.exports.toLowerDashCase = name => {
  return name.toLowerCase().replace("_", "-")
}

module.exports.toUpperSnakeCase = name => {
  return name.toUpperCase().replace("-", "_")
}
