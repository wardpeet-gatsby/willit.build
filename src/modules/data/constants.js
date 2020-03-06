/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */

import ContentfulIcon from "./assets/icons/ContentfulIcon"
import CosmicjsIcon from "./assets/icons/CosmicjsIcon"
import DatocmsIcon from "./assets/icons/DatocmsIcon"
import DrupalIcon from "./assets/icons/DrupalIcon"
import MarkdownIcon from "./assets/icons/MarkdownIcon"
import WordpressIcon from "./assets/icons/WordpressIcon"

import BlogThumbnail from "./assets/thumbnails/BlogThumbnail.png"

import {
  BasePageCount,
  BaseSiteType,
  BaseContentSource,
} from "../../../base-constants"

export { pageCountIds } from "../../../base-constants"

export const PageCount = BasePageCount

export const SiteType = {
  BLOG: {
    id: `BLOG`,
    displayedAs: `Blog`,
    thumbnail: BlogThumbnail,
  },
}

export const siteTypeIds = Object.values(SiteType).map(type => type.id)

export const ContentSource = {
  CONTENTFUL: {
    id: `CONTENTFUL`,
    displayedAs: `Contentful`,
    Icon: ContentfulIcon,
  },
  COSMICJS: {
    id: `COSMICJS`,
    displayedAs: `CosmicJS`,
    Icon: CosmicjsIcon,
  },
  DATOCMS: {
    id: `DATOCMS`,
    displayedAs: `DatoCMS`,
    Icon: DatocmsIcon,
  },
  DRUPAL: {
    id: `DRUPAL`,
    displayedAs: `Drupal`,
    Icon: DrupalIcon,
  },
  MDX: {
    id: `MDX`,
    displayedAs: `MDX`,
    Icon: MarkdownIcon,
  },
  WORDPRESS: {
    id: `WORDPRESS`,
    displayedAs: `Wordpress`,
    Icon: WordpressIcon,
  },
}

export const contentSourceIds = Object.values(ContentSource).map(
  source => source.id
)
