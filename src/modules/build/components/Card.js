import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby-interface"
import { MdArrowForward } from "react-icons/md"
import formatPath from "@modules/data/utils/formatPath"
import { ContentSource, SiteType } from "@modules/data/constants"
import {
  wrapperStyles,
  gridStyles,
  titleStyles,
  contentStyles,
  subtextStyles,
  spanStyles,
  linkStyles,
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
}) => {
  const formattedSource = ContentSource[contentSource].displayedAs
  const Icon = ContentSource[contentSource].Icon
  const formattedSiteType = SiteType[siteType].displayedAs
  const coverImage = SiteType[siteType].thumbnail

  // The GraphQL API returns names in UPPER_SNAKE_CASE.
  // We want to transform this to lower-dash-cash, to match pathnames.

  const allBenchmarksLink = formatPath(
    `details`,
    siteType,
    contentSource,
    numberOfPages
  )

  return (
    <div css={wrapperStyles}>
      <h3 css={visuallyHiddenCss}>{formattedSource} Site Benchmarks</h3>
      <div css={gridStyles}>
        <SiteTypeImage image={coverImage} />
        <div>
          <h4 css={titleStyles}>Source &amp; Site Type</h4>
          <span css={contentStyles}>
            <Icon />{" "}
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
        <div>
          <h4 css={titleStyles}>Cached/ uncached build time</h4>
          <span css={contentStyles}>
            {cachedBuildTime}
            <span css={spanStyles}>/ {uncachedBuildTime}</span>
          </span>
          <span css={subtextStyles}>
            <GatsbyIcon /> Gatsby Cloud
          </span>
        </div>

        <div>
          <Link to={allBenchmarksLink} css={linkStyles}>
            All benchmarks <MdArrowForward />
          </Link>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = propTypes

export default Card
