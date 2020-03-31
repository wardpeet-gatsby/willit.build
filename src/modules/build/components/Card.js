import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby-interface"
import { MdArrowForward } from "react-icons/md"
import formatPath from "@modules/data/utils/formatPath"
import { ContentSource, SiteType, BuildType } from "@modules/data/constants"
import {
  wrapperStyles,
  gridStyles,
  titleStyles,
  contentStyles,
  subtextStyles,
  spanStyles,
  linkStyles,
  buildTimeStyles,
  fastestBuildStyles,
} from "./Card.styles"
import SiteTypeImage from "./SiteTypeImage"
import { visuallyHiddenCss } from "@modules/a11y/stylesheets"
import GatsbyIcon from "@modules/data/assets/icons/GatsbyIcon"

const propTypes = {
  Icon: PropTypes.func,
  coverImage: PropTypes.string,
  source: PropTypes.string,
  siteType: PropTypes.string,
  numberOfPages: PropTypes.number,
  cachedBuildTime: PropTypes.string,
  uncachedBuildTime: PropTypes.string,
}

const Card = ({
  contentSource,
  siteType = SiteType.Blog,
  numberOfPages,
  cachedBuildTime,
  uncachedBuildTime,
  ...props
}) => {
  const formattedSource = ContentSource[contentSource].displayedAs
  const Icon = ContentSource[contentSource].Icon
  const formattedSiteType = SiteType[siteType].displayedAs
  const gradient = ContentSource[contentSource].gradient

  // The GraphQL API returns names in UPPER_SNAKE_CASE.
  // We want to transform this to lower-dash-cash, to match pathnames.

  const allBenchmarksLink = formatPath({
    prefix: `details`,
    siteType,
    contentSource,
    pageCount: numberOfPages,
    buildType: BuildType[`WARM_START`].displayedAs,
  })

  return (
    <div css={wrapperStyles} {...props}>
      <h3 css={visuallyHiddenCss}>{formattedSource} Site Benchmarks</h3>
      <div css={gridStyles}>
        <SiteTypeImage gradient={gradient}>
          <Icon
            inverted
            css={theme => ({
              width: theme.space[7],
              height: theme.space[7],

              [theme.mediaQueries.tablet]: {
                width: theme.space[8],
                height: theme.space[8],
              },
            })}
          />
        </SiteTypeImage>
        <div>
          <h4 css={titleStyles}>Source / Type</h4>
          <span css={contentStyles}>
            <span
              css={{
                verticalAlign: `text-top`,
              }}
            >
              {formattedSource}
            </span>
          </span>
          <span css={subtextStyles}>{formattedSiteType}</span>
        </div>
        <div>
          <h4 css={titleStyles}>Pages</h4>
          <span css={contentStyles}>{numberOfPages}</span>
        </div>
        <div css={buildTimeStyles}>
          <h4 css={titleStyles}>Fastest Build (cached / uncached)</h4>
          <span
            css={theme => [contentStyles(theme), fastestBuildStyles(theme)]}
          >
            {cachedBuildTime}
            <span css={spanStyles}>/ {uncachedBuildTime}</span>
          </span>
          <span css={subtextStyles}>
            <GatsbyIcon /> Gatsby Cloud
          </span>
        </div>

        <div>
          <Link
            to={allBenchmarksLink}
            css={linkStyles}
            data-cy="build-card__link"
          >
            All benchmarks <MdArrowForward />
          </Link>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = propTypes

export default Card
