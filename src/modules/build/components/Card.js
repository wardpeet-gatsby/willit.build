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

const propTypes = {
  Icon: PropTypes.node,
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
  const allBenchmarksLink = `/details/${siteType.toLowerCase()}/${source.toLowerCase()}/subsequent/${numberOfPages}`
  
  return (
    <div css={wrapperStyles}>
      <div css={gridStyles}>
        <SiteTypeImage image={coverImage} />
        <div>
          <h2 css={titleStyles}>Source &amp; Site Type</h2>
          <h3 css={contentStyles}>
            <Icon />{" "}
            <span
              css={{
                verticalAlign: `text-top`,
              }}
            >
              {formattedSource}
            </span>
          </h3>
          <p css={subtextStyles}>{formattedSiteType}</p>
        </div>
        <div>
          <h2 css={titleStyles}>Pages</h2>
          <h3 css={contentStyles}>{numberOfPages}</h3>
        </div>
        <div>
          <h2 css={titleStyles}>Subsequent/ initial build time</h2>
          <h3 css={contentStyles}>
            {subsequentBuildTime}
            <span css={spanStyles}>/ {initialBuildTime}</span>
          </h3>
          <p css={subtextStyles}>
            <GatsbyIcon /> Gatsby Cloud
          </p>
        </div>

        <div
          css={{
            display: `flex`,
          }}
        >
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
