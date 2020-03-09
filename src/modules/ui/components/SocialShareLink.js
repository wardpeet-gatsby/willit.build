/* The goal of this file is to take in:
	- An icon
	- A link
	- Button text

	If it's not provided a link, make it the copy button?

 */
import React from "react"
import PropTypes from "prop-types"

const propTypes = {
  Icon: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export const SocialShareIcon = ({ Icon, url, label }) => {
  return (
    <a href={url} aria-label={label} target="_blank">
      <Icon />
    </a>
  )
}

SocialShareIcon.propTypes = propTypes

export default SocialShareIcon
