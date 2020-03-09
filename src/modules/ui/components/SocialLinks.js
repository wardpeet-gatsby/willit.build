import React from "react"

// import SocialLink component instead, and pass the icons
import SocialShareLink from "./SocialShareLink"
import SocialCopyLink from "./SocialCopyLink"
import TwitterIcon from "../assets/Twitter"
import LinkedInIcon from "../assets/LinkedIn"
import LinkIcon from "../assets/Link"

const wrapperCss = () => ({
  display: `flex`,
  alignItems: `flex-end`,
})

const spacerCss = theme => ({
  width: theme.space[4],
  height: theme.space[4],
})

const genericShareText = `Check out Will It Build, a Gatsby.js project.`

const cmsTwitterMap = {
  datocms: `datocms`,
  contentful: `contentful`,
  cosmicjs: `cosmicjs`,
  drupal: `drupal`,
  mdx: `mdx_js`,
  wordpress: `WordPress`,
}

const SocialLinks = ({ location }) => {
  const { href, pathname } = location

  const pathnameElements = pathname.split(`/`).filter(Boolean)
  const isCalculatorPage = pathnameElements[0] === `calculator`

  let cms
  let pageCount

  if (isCalculatorPage) {
    cms = pathnameElements[4]
    pageCount = pathnameElements[6]
  }

  const twitterShareText = isCalculatorPage
    ? `Check out the benchmarks for building a ${pageCount} page @${cmsTwitterMap[cms]} site on @gatsbyjs Cloud.`
    : genericShareText

  return (
    <div css={wrapperCss}>
      <SocialShareLink
        Icon={TwitterIcon}
        url={`https://twitter.com/intent/tweet?url=${href}/&text=${encodeURIComponent(
          twitterShareText
        )}`}
        label="Share on Twitter"
      />
      <div css={spacerCss} />
      <SocialShareLink
        Icon={LinkedInIcon}
        url="https://www.google.com"
        label="Share on LinkedIn"
      />
      <div css={spacerCss} />
      <LinkIcon />
    </div>
  )
}

export default SocialLinks
