import React from "react"
import PropTypes from "prop-types"

const IMAGE_HEIGHT = 144
const IMAGE_WIDTH = 200
const IMAGE_OFFSET = 50

const propTypes = {
  image: PropTypes.string,
}

const SiteTypeImage = ({ image }) => {
  return (
    <div
      css={theme => ({
        backgroundRepeat: `no-repeat`,
        top: `-${IMAGE_OFFSET}px`,
        position: `relative`,
        margin: `auto`,
        width: `${IMAGE_WIDTH}px`,
        height: `${IMAGE_HEIGHT}px`,
        borderRadius: theme.radii[2],
        transition: `all ease-out 0.2s`,
        backgroundImage: `url(${image})`,
        boxShadow: `0px 4px 8px rgba(46, 41, 51, 0.08), 0px 8px 16px rgba(71, 63, 79, 0.16)`,
        [theme.mediaQueries.desktop]: {
          left: `-${IMAGE_OFFSET}px`,
          boxShadow: `0px 2px 4px rgba(46, 41, 51, 0.08), 0px 4px 8px rgba(71, 63, 79, 0.16)`,
          top: `0`,
          width: `100%`,
        },
      })}
    />
  )
}

SiteTypeImage.propTypes = propTypes

export default SiteTypeImage
