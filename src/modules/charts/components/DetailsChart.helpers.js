import React from "react"
import formatDuration from "../utils/formatDuration"

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

export function getLinearGradientDefs(colors) {
  return (
    <defs>
      <linearGradient id="gatsbyFill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={colors.gatsby} stopOpacity={0.15} />
        <stop offset="60%" stopColor={colors.gatsby} stopOpacity={0.01} />
      </linearGradient>
      <linearGradient id="netlifyFill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={colors.netlify} stopOpacity={0.15} />
        <stop offset="60%" stopColor={colors.netlify} stopOpacity={0.0} />
      </linearGradient>
      <linearGradient id="circleCiFill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={colors.circleCi} stopOpacity={0.15} />
        <stop offset="60%" stopColor={colors.circleCi} stopOpacity={0.0} />
      </linearGradient>
    </defs>
  )
}
