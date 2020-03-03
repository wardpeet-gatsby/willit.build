import ContentfulIcon from "./assets/icons/ContentfulIcon"
import CosmicjsIcon from "./assets/icons/CosmicjsIcon"
import DatocmsIcon from "./assets/icons/DatocmsIcon"
import DrupalIcon from "./assets/icons/DrupalIcon"
import MarkdownIcon from "./assets/icons/MarkdownIcon"
import WordpressIcon from "./assets/icons/WordpressIcon"

import BlogThumbnail from "./assets/thumbnails/BlogThumbnail.png"

// TODO: Real numbers!
// NOTE: This data is duplicated with the data in `gatsby-node.js`.
// If you change something here, be sure ot change it there as well.
export const PageCount = {
  "512": {
    id: `512`,
    displayedAs: `512`,
  },
  "4096": {
    id: `4096`,
    displayedAs: `4096`,
  },
  "32768": {
    id: `32768`,
    displayedAs: `32,768`,
  },
  "65535": {
    id: `65535`,
    displayedAs: `65,535`,
  },
}

export const SiteType = {
  blog: {
    id: `blog`,
    displayedAs: `Blog`,
    thumbnail: BlogThumbnail,
  },
}

export const ContentSource = {
  contentful: {
    id: `contentful`,
    displayedAs: `Contentful`,
    icon: ContentfulIcon,
  },
  cosmicjs: {
    id: `cosmicjs`,
    displayedAs: `CosmicJS`,
    icon: CosmicjsIcon,
  },
  datocms: {
    id: `datocms`,
    displayedAs: `DatoCMS`,
    icon: DatocmsIcon,
  },
  drupal: {
    id: `drupal`,
    displayedAs: `Drupal`,
    icon: DrupalIcon,
  },
  mdx: {
    id: `mdx`,
    displayedAs: `MDX`,
    icon: MarkdownIcon,
  },
  wordpress: {
    id: `wordpress`,
    displayedAs: `Wordpress`,
    icon: WordpressIcon,
  },
}
