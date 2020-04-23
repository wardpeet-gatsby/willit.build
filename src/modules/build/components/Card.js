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
  benchmarkLinkStyles,
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

  const ICON_SIZE_MOBILE = contentSource === `MDX` ? `2.25rem` : `1.5rem`
  const ICON_SIZE_DESKTOP = contentSource === `MDX` ? `3rem` : `2rem`

  return (
    <div css={wrapperStyles} data-cy="build-card" {...props}>
      <h3 css={visuallyHiddenCss}>{formattedSource} Site Benchmarks</h3>
      <div css={gridStyles}>
        <SiteTypeImage gradient={gradient}>
          <Icon
            data-cy="build-card__icon"
            inverted={true}
            css={theme => ({
              width: ICON_SIZE_MOBILE,
              height: ICON_SIZE_MOBILE,

              [theme.mediaQueries.tablet]: {
                width: ICON_SIZE_DESKTOP,
                height: ICON_SIZE_DESKTOP,
              },
            })}
          />
        </SiteTypeImage>
        <div data-cy="build-card__source">
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
        <div data-cy="build-card__pages">
          <h4 css={titleStyles}>Pages</h4>
          <span css={contentStyles}>{numberOfPages}</span>
        </div>
        <div css={buildTimeStyles} data-cy="build-card__stats">
          <h4 css={titleStyles}>
            Fastest Build <span>(cached / uncached)</span>
          </h4>
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

        <div css={benchmarkLinkStyles}>
          <Link
            to={allBenchmarksLink}
            css={linkStyles}
            data-cy="build-card__link"
          >
            {formattedSource} data <MdArrowForward />
          </Link>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = propTypes

export default Card
