import React from "react"
import formatDuration from "../utils/formatDuration"
import { DetailsChartDimensions } from "../constants"

const { ActiveDotRadius } = DetailsChartDimensions

export function filteredDataInitialStartIndex({
  data,
  isMobile,
  initialDataRangeMobile,
  initialDataRangeDesktop,
}) {
  const initialDataRange = isMobile
    ? initialDataRangeMobile
    : initialDataRangeDesktop

  return data.length > initialDataRange ? data.length - initialDataRange : 0
}

export function filteredDataInitialEndIndex({ data }) {
  return data.length - 1
}

export function filterData({
  data,
  filteredDataStartIndex,
  filteredDataEndIndex,
}) {
  return data.slice(filteredDataStartIndex, filteredDataEndIndex + 1)
}

export function filterDataForMobile({ data, scope }) {
  const startIndex = data.length > scope ? data.length - scope : 0

  return data.filter((_, idx) => idx >= startIndex)
}

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
      <pattern
        id="brush-slide-fill"
        x="50%"
        y="0"
        width="1"
        height="1"
        patternTransform="translate(-4,17)"
        patternUnits="objectBoundingBox"
      >
        <rect fill="rgba(0,0,0,0.04)" x="0" y="0" width="100%" height="100" />

        <rect fill="rgba(0,0,0,0.3)" x="0" y="0" width="2" height="16" />
        <rect fill="rgba(0,0,0,0.3)" x="5" y="0" width="2" height="16" />
        <rect fill="rgba(0,0,0,0.3)" x="10" y="0" width="2" height="16" />
      </pattern>

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
  marginBottom: theme.space[4],

  [theme.mediaQueries.desktop]: {
    marginRight: `-${ActiveDotRadius}px`, // this nullify the right margin set on the chart
  },

  ".recharts-cartesian-grid": {
    borderRight: `1px solid red`,
  },

  ".recharts-cartesian-axis-tick-value": {
    fontSize: theme.fontSizes[0],
    fontFamily: theme.fonts.body,
  },

  ".recharts-brush": {},

  ".recharts-brush-slide": {
    fill: `url(#brush-slide-fill)`,
    fillOpacity: 1,
  },

  ".recharts-brush-texts": {
    display: `none`,
  },

  ".recharts-brush-traveller": {
    rect: {
      fill: `#ccc`,
    },
  },

  ".recharts-brush > rect:not(.recharts-brush-slide)": {
    fill: `rgba(0,0,0,0)`,
    stroke: `#fbfbfb`,
  },

  ".recharts-cartesian-axis-line, .recharts-cartesian-axis-tick-line": {
    stroke: theme.colors.blackFade[20],
  },
})
