import React from "react"
import formatDuration from "../utils/formatDuration"
import { DetailsChartDimensions } from "../constants"

const {
  YAxisWidth,
  ActiveDotRadius,
  ChartDesktopHorizontalPadding,
} = DetailsChartDimensions

export function xAxisTickFormater(value) {
  return value.slice(0, -5)
}

export function yAxisTickFormater(value) {
  if (value === 0) {
    return `0`
  }

  return formatDuration(value).slice(0, -3)
}

export function getYAxisTicks(data) {
  const maxValue = data.reduce((result, row) => {
    const maxItemValue = Object.keys(row).reduce((rowResult, key) => {
      return typeof row[key] == "number" && row[key] > rowResult
        ? row[key]
        : result
    }, 0)

    return maxItemValue > result ? maxItemValue : result
  }, 0)

  const maxTickInMinutes = Math.ceil(maxValue / 60)
  const maxTick = maxTickInMinutes * 60
  const midTick = Math.floor(maxTickInMinutes / 2) * 60

  if (maxTickInMinutes > 5) {
    const secondTick = Math.ceil(maxTickInMinutes * 0.1) * 60
    const secondToLastTick = Math.floor(maxTickInMinutes * 0.9) * 60

    return [0, secondTick, midTick, secondToLastTick, maxTick]
  }

  return [0, midTick, maxTick]
}

export function getLinearGradientDefs(tones) {
  return (
    <defs>
      <linearGradient id="GATSBY_CLOUD-fill" x1="0" y1="0" x2="0" y2="1">
        <stop
          offset="0%"
          stopColor={tones.GATSBY_CLOUD.medium}
          stopOpacity={0.15}
        />
        <stop
          offset="60%"
          stopColor={tones.GATSBY_CLOUD.medium}
          stopOpacity={0.01}
        />
      </linearGradient>
      <linearGradient id="NETLIFY-fill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={tones.NETLIFY.medium} stopOpacity={0.15} />
        <stop offset="60%" stopColor={tones.NETLIFY.medium} stopOpacity={0.0} />
      </linearGradient>
      <linearGradient id="CIRCLECI-fill" x1="0" y1="0" x2="0" y2="1">
        <stop
          offset="0%"
          stopColor={tones.CIRCLECI.medium}
          stopOpacity={0.15}
        />
        <stop
          offset="60%"
          stopColor={tones.CIRCLECI.medium}
          stopOpacity={0.0}
        />
      </linearGradient>
    </defs>
  )
}

export const wrapperCss = theme => ({
  background: theme.colors.grey[5],
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: theme.space[8],

  [theme.mediaQueries.desktop]: {
    paddingLeft: `${ChartDesktopHorizontalPadding - YAxisWidth}px`, // we need this to make chart right edge aligned
    paddingRight: `${ChartDesktopHorizontalPadding - ActiveDotRadius}px`, // with other content wrapped in MaxWidthWrapper
    paddingBottom: theme.space[12],
  },

  ".recharts-cartesian-axis-tick-value": {
    fontSize: theme.fontSizes[0],
    fontFamily: theme.fonts.body,
  },

  ".recharts-brush": {},

  ".recharts-brush-slide": {
    fill: `#aaa`,
  },

  ".recharts-brush-texts": {
    fontFamily: theme.fonts.body,
    fill: "#666",
    fontSize: theme.fontSizes[0],
  },

  ".recharts-brush-traveller": {
    rect: {
      fill: `#999`,
    },
  },

  ".recharts-brush > rect:not(.recharts-brush-slide)": {
    fill: `#fbfbfb`,
    stroke: `#fbfbfb`,
  },

  ".recharts-cartesian-axis-line, .recharts-cartesian-axis-tick-line": {
    stroke: theme.colors.blackFade[10],
  },
})
