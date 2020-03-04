import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby-interface"
import { MdArrowForward } from "react-icons/md"

import { SourceIcon, Source, SiteType } from "../constants"
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
import { formatText } from "../utils"
import { visuallyHiddenCss } from "@modules/a11y/stylesheets"

const propTypes = {
  Icon: PropTypes.func,
  coverImage: PropTypes.string,
  source: PropTypes.string,
  siteType: PropTypes.string,
  numberOfPages: PropTypes.number,
  subsequentBuildTime: PropTypes.string,
  initialBuildTime: PropTypes.string,
}

const Card = ({
  Icon,
  coverImage,
  source,
  siteType = SiteType.Blog,
  numberOfPages,
  subsequentBuildTime,
  initialBuildTime,
}) => {
  const GatsbyIcon = SourceIcon[Source.Gatsby]
  const formattedSource = formatText(source)
  const formattedSiteType = formatText(siteType)
  const allBenchmarksLink = `/details/type/${siteType.toLowerCase()}/source/${source.toLowerCase()}/page-count/${numberOfPages}`

  return (
    <div css={wrapperStyles}>
      <h2 css={visuallyHiddenCss}>Build card</h2>
      <div css={gridStyles}>
        <SiteTypeImage image={coverImage} />
        <div>
          <h3 css={titleStyles}>Source &amp; Site Type</h3>
          <h4 css={contentStyles}>
            <Icon />{" "}
            <span
              css={{
                verticalAlign: `text-top`,
              }}
            >
              {formattedSource}
            </span>
          </h4>
          <p css={subtextStyles}>{formattedSiteType}</p>
        </div>
        <div>
          <h3 css={titleStyles}>Pages</h3>
          <h4 css={contentStyles}>{numberOfPages}</h4>
        </div>
        <div>
          <h3 css={titleStyles}>Subsequent/ initial build time</h3>
          <h4 css={contentStyles}>
            {subsequentBuildTime}
            <span css={spanStyles}>/ {initialBuildTime}</span>
          </h4>
          <p css={subtextStyles}>
            <GatsbyIcon /> Gatsby Cloud
          </p>
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
