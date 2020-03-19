// Shared root constants, to be used in `gatsby-node.js` as well as the
// front-end

const formatNum = num => Intl.NumberFormat("en-US").format(num)

const extractIds = entityMap =>
  Object.values(entityMap).map(entity => entity.id)

// TODO: Real numbers!
const BasePageCount = {
  "512": {
    id: `512`,
    displayedAs: formatNum(512),
  },
  "4096": {
    id: `4096`,
    displayedAs: formatNum(4096),
  },
  "32768": {
    id: `32768`,
    displayedAs: formatNum(32768),
  },
  "65535": {
    id: `65535`,
    displayedAs: formatNum(65535),
  },
}
module.exports.BasePageCount = BasePageCount
module.exports.pageCountIds = extractIds(BasePageCount)

const BaseBuildType = {
  COLD_START: {
    displayedAs: `Uncached`,
    description: `Lorem ipsum dolor uncached`,
  },
  WARM_START: {
    displayedAs: `Cached`,
    description: `Lorem ipsum dolor cached`,
  },
}
module.exports.BaseBuildType = BaseBuildType
module.exports.buildTypeKeys = Object.keys(BaseBuildType)
