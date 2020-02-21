import React from "react"
import PropTypes from "prop-types"

// Tempoarary until theme-ui is set up, these can be added to theme-ui instead
const sizeStyles = {
  S: {
    fontSize: `1.5rem`,
    lineHeight: `1.75rem`,
  },
  M: {
    fontSize: `3rem`,
    lineHeight: `3.5rem`,
  },
  L: {
    fontSize: `3.5rem`,
    lineHeight: `4.15rem`,
  },
}

const propTypes = {
  children: PropTypes.string,
  leftColor: PropTypes.string,
  rightColor: PropTypes.string,
  size: PropTypes.string,
}

const GRADIENT_ANGLE = `45deg`

const GradientHeading = ({ children, leftColor, rightColor, className, size = "M" }) => (
  <h1
    className={className}
    css={{
      ...sizeStyles[size],
      background: `linear-gradient(${GRADIENT_ANGLE}, ${leftColor}, ${rightColor})`,
      "-webkit-background-clip": `text`,
      "-webkit-text-fill-color": `transparent`,
    }}
  >
    {children}
  </h1>
)

GradientHeading.propTypes = propTypes

export default GradientHeading
