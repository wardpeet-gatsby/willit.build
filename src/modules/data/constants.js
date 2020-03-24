/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */

import ContentfulIcon from "./assets/icons/ContentfulIcon"
import CosmicjsIcon from "./assets/icons/CosmicjsIcon"
import DatocmsIcon from "./assets/icons/DatocmsIcon"
import DrupalIcon from "./assets/icons/DrupalIcon"
import MarkdownIcon from "./assets/icons/MarkdownIcon"
import WordpressIcon from "./assets/icons/WordpressIcon"

import GatsbyIcon from "./assets/icons/GatsbyIcon"
import NetlifyIcon from "./assets/icons/NetlifyIcon"
import CircleCiIcon from "./assets/icons/CircleCiIcon"
import CircleCiBrightIcon from "./assets/icons/CircleCiBrightIcon"

import BlogIcon from "./assets/icons/BlogIcon"
import BlogThumbnail from "./assets/thumbnails/BlogThumbnail.png"

import {
  BasePageCount,
  BaseSiteType,
  BaseContentSource,
  BaseBuildType,
} from "../../../base-constants"

export { pageCountIds } from "../../../base-constants"

export const PageCount = BasePageCount

export const BuildType = BaseBuildType

export const SiteType = {
  BLOG: {
    id: `BLOG`,
    displayedAs: `Blog`,
    thumbnail: BlogThumbnail,
    Icon: BlogIcon,
  },
}

export const siteTypeIds = Object.values(SiteType).map(type => type.id)

export const ContentSource = {
  CONTENTFUL: {
    id: `CONTENTFUL`,
    displayedAs: `Contentful`,
    Icon: ContentfulIcon,
    gradient: {
      start: `#159BF3`,
      end: `#B17ACC`,
    },
  },
  COSMICJS: {
    id: `COSMICJS`,
    displayedAs: `CosmicJS`,
    Icon: CosmicjsIcon,
    gradient: {
      start: `#29ABE2`,
      end: `#2DE3DA`,
    },
  },
  DATOCMS: {
    id: `DATOCMS`,
    displayedAs: `DatoCMS`,
    Icon: DatocmsIcon,
    gradient: {
      start: `#FF684F`,
      end: `#FFB238`,
    },
  },
  DRUPAL: {
    id: `DRUPAL`,
    displayedAs: `Drupal`,
    Icon: DrupalIcon,
    gradient: {
      start: `#2BA9E0`,
      end: `#35B637`,
    },
  },
  MDX: {
    id: `MDX`,
    displayedAs: `MDX`,
    Icon: MarkdownIcon,
    gradient: {
      start: `#000000`,
      end: `#BF9141`,
    },
  },
  WORDPRESS: {
    id: `WORDPRESS`,
    displayedAs: `Wordpress`,
    Icon: WordpressIcon,
    gradient: {
      start: `#21759B`,
      end: `#BC027F`,
    },
  },
}

export const contentSourceIds = Object.values(ContentSource).map(
  source => source.id
)

export const Platforms = {
  GATSBY_CLOUD: {
    id: `GATSBY_CLOUD`,
    displayedAs: "Gatsby Cloud",
    Icon: GatsbyIcon,
  },
  NETLIFY: {
    id: `NETLIFY`,
    displayedAs: "Netlify",
    Icon: NetlifyIcon,
  },
  CIRCLECI: {
    id: `CIRCLECI`,
    displayedAs: "Circle CI",
    Icon: CircleCiIcon,
    IconOnDark: CircleCiBrightIcon,
  },
}
