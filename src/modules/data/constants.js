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
  [BaseSiteType.blog.id]: {
    ...BaseSiteType.blog,
    thumbnail: BlogThumbnail,
  },
}

export const ContentSource = {
  [BaseContentSource.contentful.id]: {
    ...BaseContentSource.contentful,
    icon: ContentfulIcon,
  },
  [BaseContentSource.cosmicjs.id]: {
    ...BaseContentSource.cosmicjs,
    icon: CosmicjsIcon,
  },
  [BaseContentSource.datocms.id]: {
    ...BaseContentSource.datocms,
    icon: DatocmsIcon,
  },
  [BaseContentSource.drupal.id]: {
    ...BaseContentSource.drupal,
    icon: DrupalIcon,
  },
  [BaseContentSource.mdx.id]: {
    ...BaseContentSource.mdx,
    icon: MarkdownIcon,
  },
  [BaseContentSource.wordpress.id]: {
    ...BaseContentSource.wordpress,
    icon: WordpressIcon,
  },
}
