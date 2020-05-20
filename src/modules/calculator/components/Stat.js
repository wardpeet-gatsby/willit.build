import React from "react"
import PropTypes from "prop-types"
import { MdTimer } from "react-icons/md"

import { Platform, platformIds } from "@modules/data/constants"
import { controlLabelCss } from "@modules/ui/styles"

const statCss = ({ theme, winner }) => ({
  flexBasis: winner ? `40%` : `30%`,
  marginTop: theme.space[2],
  marginBottom: theme.space[8],
  textAlign: `center`,

  [theme.mediaQueries.desktop]: {
    marginBottom: 0,
    textAlign: `left`,
  },
})

const statHeaderCss = theme => [
  controlLabelCss(theme),
  {
    lineHeight: theme.lineHeights.body,
    marginBottom: theme.space[3],
    span: {
      display: `block`,
      fontSize: `10px`,
    },

    [theme.mediaQueries.tablet]: {
      span: {
        display: `inline`,
        fontSize: theme.fontSizes[0],
      },
    },
  },
]

const statContentCss = {
  display: `flex`,
  flexDirection: `column`,
}

const statValueCss = ({ theme, winner, emphasized }) => ({
  color: theme.colors.blackFade[emphasized ? 90 : 60],
  fontSize: theme.fontSizes[6],
  fontWeight: winner ? theme.fontWeights.bold : theme.fontWeights.body,
  // Optically align the numbers with the left edge
  transform: `translateX(-2px)`,

  [theme.mediaQueries.desktop]: {
    color: theme.colors.blackFade[emphasized ? 90 : 70],
    fontSize: emphasized ? theme.fontSizes[9] : theme.fontSizes[6],
    fontWeight: winner ? theme.fontWeights.bold : theme.fontWeights.body,
  },
})

const statDescriptionCss = ({ theme, winner }) => ({
  color: theme.colors.blackFade[70],
  fontSize: theme.fontSizes[1],
  fontWeight: winner ? theme.fontWeights.semiBold : theme.fontWeights.body,
  marginTop: theme.space[3],

  [theme.mediaQueries.desktop]: {
    fontSize: theme.fontSizes[3],
  },
})

const iconCss = {
  transform: `translateY(1px)`,
}

const timerIconCss = {
  ...iconCss,
  marginLeft: 4,
}

const propTypes = {
  platform: PropTypes.oneOf(platformIds),
  time: PropTypes.string.isRequired,
  label: PropTypes.node,
  emphasized: PropTypes.bool,
  winner: PropTypes.bool,
}

const Stat = ({ time, platform, winner, emphasized, label }) => {
  const { displayedAs, Icon } = Platform[platform]

  return (
    <div css={theme => statCss({ theme, winner })}>
      <h3 css={statHeaderCss}>
        {label} {winner && <MdTimer css={timerIconCss} />}
      </h3>
      <div css={statContentCss}>
        <span css={theme => statValueCss({ theme, winner, emphasized })}>
          {time}
        </span>
        <span css={theme => statDescriptionCss({ theme, winner })}>
          <Icon css={iconCss} /> {displayedAs}
        </span>
      </div>
    </div>
  )
}

Stat.propTypes = propTypes

export default Stat
