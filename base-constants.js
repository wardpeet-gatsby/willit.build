// Shared root constants, to be used in `gatsby-node.js` as well as the
// front-end

const formatNum = num => Intl.NumberFormat("en-US").format(num)

const extractIds = entityMap =>
  Object.values(entityMap).map(entity => entity.id)

const SiteType = {
  BLOG: {
    id: `BLOG`,
    displayedAs: `Blog`,
  },
}

module.exports.BaseSiteType = SiteType
module.exports.siteTypeIds = extractIds(SiteType)

const ContentSource = {
  CONTENTFUL: {
    id: `CONTENTFUL`,
    displayedAs: `Contentful`,
    gradient: {
      start: `#159BF3`,
      end: `#B17ACC`,
    },
  },
  COSMICJS: {
    id: `COSMICJS`,
    displayedAs: `CosmicJS`,
    gradient: {
      start: `#29ABE2`,
      end: `#2DE3DA`,
    },
  },
  DATOCMS: {
    id: `DATOCMS`,
    displayedAs: `DatoCMS`,
    gradient: {
      start: `#FF684F`,
      end: `#FFB238`,
    },
  },
  DRUPAL: {
    id: `DRUPAL`,
    displayedAs: `Drupal`,
    gradient: {
      start: `#2BA9E0`,
      end: `#35B637`,
    },
  },
  MARKDOWN: {
    id: `MARKDOWN`,
    displayedAs: `Markdown`,
    gradient: {
      start: `#000000`,
      end: `#BF9141`,
    },
  },
  MDX: {
    id: `MDX`,
    displayedAs: `MDX`,
    gradient: {
      start: `#000000`,
      end: `#BF9141`,
    },
  },
  WORDPRESS: {
    id: `WORDPRESS`,
    displayedAs: `Wordpress`,
    gradient: {
      start: `#21759B`,
      end: `#BC027F`,
    },
  },
}
module.exports.BaseContentSource = ContentSource
module.exports.contentSourceIds = extractIds(ContentSource)

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
  "8192": {
    id: `8192`,
    displayedAs: formatNum(8192),
  },
  "32768": {
    id: `32768`,
    displayedAs: formatNum(32768),
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
