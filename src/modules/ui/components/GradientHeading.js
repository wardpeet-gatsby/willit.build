import React from "react"
import PropTypes from "prop-types"

const sizeStyles = theme => ({
  S: {
    fontSize: theme.fontSizes[6],
    lineHeight: theme.lineHeights.solid,
  },
  M: {
    fontSize: theme.fontSizes[10],
    lineHeight: theme.lineHeights.dense,
  },
  L: {
    fontSize: theme.fontSizes[12],
    lineHeight: theme.lineHeights.dense,
  },
})

const propTypes = {
  children: PropTypes.string,
  leftColor: PropTypes.string,
  rightColor: PropTypes.string,
  size: PropTypes.string,
}

const GRADIENT_ANGLE = `45deg`

const GradientHeading = ({
  children,
  leftColor,
  rightColor,
  className,
  size = "M",
}) => (
  <h1
    className={className}
    css={theme => ({
      fontFamily: theme.fonts.body,
      background: `linear-gradient(${GRADIENT_ANGLE}, ${leftColor}, ${rightColor})`,
      "-webkit-background-clip": `text`,
      "-webkit-text-fill-color": `transparent`,
      [theme.mediaQueries.phablet]: {
        ...sizeStyles(theme)[size],
      },
    })}
  >
    {children}
  </h1>
)

GradientHeading.propTypes = propTypes

export default GradientHeading
