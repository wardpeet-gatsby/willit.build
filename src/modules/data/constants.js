/* eslint-disable no-unused-vars @typescript-eslint/no-unused-vars */

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

export const PageCount = BasePageCount

export const SiteType = {
  BLOG: {
    id: `blog`,
    displayedAs: `Blog`,
    thumbnail: BlogThumbnail,
  },
}

export const ContentSource = {
  CONTENTFUL: {
    id: `contentful`,
    displayedAs: `Contentful`,
    icon: ContentfulIcon,
  },
  COSMICJS: {
    id: `cosmicjs`,
    displayedAs: `CosmicJS`,
    icon: CosmicjsIcon,
  },
  DATOCMS: {
    id: `datocms`,
    displayedAs: `DatoCMS`,
    icon: DatocmsIcon,
  },
  DRUPAL: {
    id: `drupal`,
    displayedAs: `Drupal`,
    icon: DrupalIcon,
  },
  MDX: {
    id: `mdx`,
    displayedAs: `MDX`,
    icon: MarkdownIcon,
  },
  WORDPRESS: {
    id: `wordpress`,
    displayedAs: `Wordpress`,
    icon: WordpressIcon,
  },
}
