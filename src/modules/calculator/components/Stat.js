import React from "react"
import PropTypes from "prop-types"

import { Platforms } from "@modules/data/constants"
import { controlLabelCss } from "@modules/ui/styles"

const PlatformKeys = Object.keys(Platforms)

const propTypes = {
  type: PropTypes.oneOf([
    "warm-winner",
    "warm-runner-up",
    "cold-winner",
    "cold-runner-up",
  ]),
  platform: PropTypes.oneOf(PlatformKeys),
  time: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isLabelVisible: PropTypes.bool.isRequired,
}

const warmTimeWrapper = {
  height: 60,
  display: `flex`,
  alignItems: `center`,
}
const coldTimeWrapper = {}

const winnerWarmTimeCss = theme => ({
  fontSize: theme.fontSizes[12],
  fontWeight: theme.fontWeights.bold,
})

const runnerUpWarmTimeCss = theme => ({
  fontSize: theme.fontSizes[9],
  fontWeight: theme.fontWeights.body,
  // HACK: Baseline-aligning items in adjacent containers is apparently
  // VERY hard. Doing a hack for now.
  transform: `translateY(7px)`,
})
const winnerColdTimeCss = theme => ({
  fontSize: theme.fontSizes[6],
  lineHeight: theme.lineHeights.solid,
  fontWeight: theme.fontWeights.bold,
  color: theme.colors.blackFade[60],
})

const runnerUpColdTimeCss = theme => ({
  fontSize: theme.fontSizes[6],
  lineHeight: theme.lineHeights.solid,
  fontWeight: theme.fontWeights.body,
  color: theme.colors.blackFade[60],
})

const winnerPlatform = theme => ({
  fontWeight: theme.fontWeights.heading,
  fontSize: theme.fontSizes[3],
  marginTop: theme.space[4],
  color: theme.colors.grey[60],
})

const runnerUpPlatform = theme => ({
  fontWeight: theme.fontWeights.body,
  fontSize: theme.fontSizes[3],
  marginTop: theme.space[4],
  color: theme.colors.grey[60],
})

const invisibleCss = {
  opacity: 0,
  pointerEvents: `none`,
}

const getStylesForType = type => {
  switch (type) {
    case "warm-winner": {
      return {
        timeWrapperCss: warmTimeWrapper,
        timeCss: winnerWarmTimeCss,
        platformCss: winnerPlatform,
      }
    }
    case "warm-runner-up": {
      return {
        timeWrapperCss: warmTimeWrapper,
        timeCss: runnerUpWarmTimeCss,
        platformCss: runnerUpPlatform,
      }
    }
    case "cold-winner": {
      return {
        timeWrapperCss: coldTimeWrapper,
        timeCss: winnerColdTimeCss,
        platformCss: winnerPlatform,
      }
    }
    case "cold-runner-up": {
      return {
        timeWrapperCss: coldTimeWrapper,
        timeCss: runnerUpColdTimeCss,
        platformCss: runnerUpPlatform,
      }
    }

    default:
      throw new Error("unrecognized type")
  }
}

const Stat = ({
  time,
  platform,
  type,
  label,
  isLabelVisible,
  ...delegated
}) => {
  const { displayName, Icon } = Platforms[platform]

  const { timeWrapperCss, timeCss, platformCss } = getStylesForType(type)

  return (
    <div {...delegated}>
      <h2
        css={theme => [controlLabelCss(theme), !isLabelVisible && invisibleCss]}
      >
        {label}
      </h2>
      <div css={timeWrapperCss}>
        <h3 css={timeCss}>{time}</h3>
      </div>
      <h4 css={platformCss}>
        {displayName} <Icon />
      </h4>
    </div>
  )
}

Stat.propTypes = propTypes

export default Stat
