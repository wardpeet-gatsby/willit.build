import React from "react"

import SocialShareLink from "./SocialShareLink"
import CopyUrlButton from "./CopyUrlButton"
import TwitterIcon from "../assets/Twitter"
import LinkedInIcon from "../assets/LinkedIn"

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
  DATOCMS: `datocms`,
  CONTENTFUL: `contentful`,
  COSMICJS: `cosmicjs`,
  DRUPAL: `drupal`,
  MDX: `mdx_js`,
  WORDPRESS: `WordPress`,
}

const SocialLinks = ({ location, pageType, benchmarkInfo }) => {
  const { href } = location
  const { siteType = ``, contentSource = ``, pageCount = `` } = benchmarkInfo

  const isCalculatorPage = pageType === `calculator`

  const twitterShareText = isCalculatorPage
    ? `Check out the benchmarks for building a ${pageCount} page @${
        cmsTwitterMap[contentSource]
      } ${siteType.toLowerCase()} site on @gatsbyjs Cloud.`
    : genericShareText

  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${href}/&text=${encodeURIComponent(
    twitterShareText
  )}`

  // LinkedIn has apparently all but killed their query param share function, cant add a message
  const linkedinShareUrl = `https://www.linkedin.com/shareArticle?url=${href}/calculator/type/blog/source/drupal/page-count/512`

  return (
    <div css={wrapperCss}>
      <CopyUrlButton content={href} />
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
    </div>
  )
}

export default SocialLinks
