import ContentfulIcon from "./assets/icons/ContentfulIcon"
import CosmicjsIcon from "./assets/icons/CosmicjsIcon"
import DatocmsIcon from "./assets/icons/DatocmsIcon"
import DrupalIcon from "./assets/icons/DrupalIcon"
import MarkdownIcon from "./assets/icons/MarkdownIcon"
import WordpressIcon from "./assets/icons/WordpressIcon"
import GatsbyIcon from "./assets/icons/GatsbyIcon"

import BlogThumbnail from "./assets/thumbnails/BlogThumbnail.png"

export const Source = {
  Contentful: "CONTENTFUL",
  Cosmicjs: "COSMICJS",
  Datocms: "DATOCMS",
  Drupal: "DRUPAL",
  Mdx: "MDX",
  Wordpress: "WORDPRESS",
  Gatsby: "GATSBY",
}

export const SiteType = {
  Blog: "BLOG",
}

export const SiteTypeThumbnail = {
  [SiteType.Blog]: BlogThumbnail,
}

export const SourceIcon = {
  [Source.Contentful]: ContentfulIcon,
  [Source.Cosmicjs]: CosmicjsIcon,
  [Source.Datocms]: DatocmsIcon,
  [Source.Drupal]: DrupalIcon,
  [Source.Mdx]: MarkdownIcon,
  [Source.Wordpress]: WordpressIcon,
  [Source.Gatsby]: GatsbyIcon,
}
