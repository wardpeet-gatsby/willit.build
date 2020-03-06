import React from "react"

import { getTextGradientStyle } from "@modules/ui/utils"
import SocialLinks from "@modules/ui/components/SocialLinks"
import CalculatorIcon from "../assets/Icon"

const headerStyles = theme => [
  getTextGradientStyle(
    theme,
    `${theme.colors.black} 0%`,
    `${theme.colors.grey[50]} 100%`
  ),
  {
    maxWidth: `100%`,
    [theme.mediaQueries.tablet]: {
      maxWidth: `80%`,
      fontSize: theme.fontSizes[10],
      lineHeight: theme.lineHeights.dense,
    },
  },
]

const topRowCss = theme => ({
  display: `flex`,
  justifyContent: `space-between`,
  alignItems: `baseline`,
  position: `relative`,
  paddingBottom: theme.space[5],
  borderBottom: `1px solid ${theme.colors.blackFade[10]}`,
})

const iconWrapperCss = theme => ({
  position: `absolute`,
  top: 11,
  left: `-${theme.space[3]}`,
  transform: `translateX(-100%)`,
  display: `none`,

  [theme.mediaQueries.phablet]: {
    display: `block`,
  },
})

const blurbWrapperCss = theme => ({
  fontSize: theme.fontSizes[1],
  color: theme.colors.grey[60],
  paddingTop: theme.space[7],
  paddingBottom: theme.space[7],
  marginBottom: theme.space[7],
  borderBottom: `1px solid ${theme.colors.blackFade[10]}`,
})

const blurbCss = theme => ({
  maxWidth: 500,
  lineHeight: theme.lineHeights.default,
})

const Header = () => {
  return (
    <header>
      <div css={topRowCss}>
        <div css={iconWrapperCss}>
          <CalculatorIcon />
        </div>
        <h1 css={headerStyles}>Build time calculator</h1>
        <SocialLinks />
      </div>
      <div css={blurbWrapperCss}>
        <p css={blurbCss}>
          The willit.build build time calculator provides an estimation of build
          time across each supported Continuous Deployment platform.
        </p>
      </div>
    </header>
  )
}

export default Header
