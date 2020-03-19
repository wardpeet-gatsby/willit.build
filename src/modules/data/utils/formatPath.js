/**
 * This module uses module.export because it's used by
 * gatsby-node.js
 */
const { toLowerDashCase } = require("./transformName")

module.exports = function formatPath({
  prefix,
  siteType,
  contentSource,
  pageCount,
  buildType,
}) {
  return `/${prefix}/type/${toLowerDashCase(siteType)}/source/${toLowerDashCase(
    contentSource
  )}/page-count/${pageCount}${
    buildType ? `/build-type/${toLowerDashCase(buildType)}` : ``
  }`
}
