import React from "react"
import { useLocation } from "@reach/router"
import { BaseAnchor } from "gatsby-interface"

import SocialShareLink from "./SocialShareLink"
import CopyUrlButton from "./CopyUrlButton"
import TwitterIcon from "../assets/Twitter"
import LinkedInIcon from "../assets/LinkedIn"

const wrapperCss = () => ({
  display: `flex`,
  alignItems: `center`,
})

const spacerCss = theme => ({
  width: theme.space[4],
  height: theme.space[4],
})

const githubLinkCss = theme => ({
  color: theme.colors.grey[60],
  fontSize: theme.fontSizes[1],
  textDecoration: "none",
})

const cmsTwitterMap = {
  DATOCMS: `datocms`,
  CONTENTFUL: `contentful`,
  COSMICJS: `cosmicjs`,
  DRUPAL: `drupal`,
  MDX: `mdx_js`,
  WORDPRESS: `WordPress`,
}

const SocialLinks = ({
  includeGithubLink,
  siteType = ``,
  contentSource = ``,
  pageCount = ``,
}) => {
  const { href } = useLocation()

  const twitterShareText = `Check out the benchmarks for building a ${pageCount} page @${
    cmsTwitterMap[contentSource]
  } ${siteType.toLowerCase()} site on @gatsbyjs Cloud.`

  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${href}/&text=${encodeURIComponent(
    twitterShareText
  )}`

  // LinkedIn has apparently all but killed their query param share function, cant add a message
  const linkedinShareUrl = `https://www.linkedin.com/shareArticle?url=${href}/calculator/type/blog/source/drupal/page-count/512`

  return (
    <div css={wrapperCss}>
      {includeGithubLink && (
        <BaseAnchor
          href="https://github.com/gatsby-inc/willit.build"
          css={githubLinkCss}
        >
          View source on Github
        </BaseAnchor>
      )}
      <div css={spacerCss} />
      <div css={spacerCss} />
      <SocialShareLink
        Icon={TwitterIcon}
        url={twitterShareUrl}
        label="Share Gatsby Cloud benchmarks on Twitter"
      />
      <div css={spacerCss} />
      <SocialShareLink
        Icon={LinkedInIcon}
        url={linkedinShareUrl}
        label="Share Gatsby Cloud benchmarks on LinkedIn"
      />
      <div css={spacerCss} />
      <CopyUrlButton content={href} />
    </div>
  )
}

export default SocialLinks
