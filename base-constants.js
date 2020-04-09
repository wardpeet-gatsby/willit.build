// Shared root constants, to be used in `gatsby-node.js` as well as the
// front-end

const formatNum = num => Intl.NumberFormat("en-US").format(num)

const SiteType = {
  BLOG: {
    id: `BLOG`,
    displayedAs: `Blog`,
  },
}

module.exports.BaseSiteType = SiteType
module.exports.siteTypeIds = Object.keys(SiteType)

const ContentSource = {
  CONTENTFUL: {
    displayedAs: `Contentful`,
    gradient: {
      start: `#159BF3`,
      end: `#B17ACC`,
    },
  },
  COSMICJS: {
    displayedAs: `CosmicJS`,
    gradient: {
      start: `#29ABE2`,
      end: `#2DE3DA`,
    },
  },
  DATOCMS: {
    displayedAs: `DatoCMS`,
    gradient: {
      start: `#FF684F`,
      end: `#FFB238`,
    },
  },
  DRUPAL: {
    displayedAs: `Drupal`,
    gradient: {
      start: `#2BA9E0`,
      end: `#35B637`,
    },
  },
  MARKDOWN: {
    displayedAs: `Markdown`,
    gradient: {
      start: `#000000`,
      end: `#BF9141`,
    },
  },
  MDX: {
    displayedAs: `MDX`,
    gradient: {
      start: `#000000`,
      end: `#BF9141`,
    },
  },
  WORDPRESS: {
    displayedAs: `Wordpress`,
    gradient: {
      start: `#21759B`,
      end: `#BC027F`,
    },
  },
}
module.exports.BaseContentSource = ContentSource
module.exports.contentSourceIds = Object.keys(ContentSource)

// TODO: Real numbers!
const BasePageCount = {
  "512": {
    displayedAs: formatNum(512),
  },
  "4096": {
    displayedAs: formatNum(4096),
  },
  "8192": {
    displayedAs: formatNum(8192),
  },
  "32768": {
    displayedAs: formatNum(32768),
  },
}
module.exports.BasePageCount = BasePageCount
module.exports.pageCountIds = Object.keys(BasePageCount)

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
module.exports.buildTypeIds = Object.keys(BaseBuildType)
