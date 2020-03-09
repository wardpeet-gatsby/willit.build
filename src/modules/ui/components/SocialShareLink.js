import React from "react"
import PropTypes from "prop-types"

const propTypes = {
  Icon: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export const SocialShareIcon = ({ Icon, url, label }) => {
  return (
    <a href={url} aria-label={label} target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  )
}

SocialShareIcon.propTypes = propTypes

export default SocialShareIcon
