import React from "react"
import { DetailsChartDimensions } from "../constants"

function CustomYAxisLabel() {
  const { ChartMinHeight } = DetailsChartDimensions

  const y = ChartMinHeight / 2
  return (
    <text
      y={y}
      x="0"
      transform={`rotate(-90, 0, ${y}) translate(0,10)`}
      css={theme => ({
        fontFamily: theme.fonts.body,
        fontSize: theme.fontSizes[0],
        fill: theme.colors.grey[60],
      })}
    >
      <tspan
        x="0"
        css={theme => ({
          letterSpacing: theme.letterSpacings.tracked,
          fontWeight: theme.fontWeights.bold,
        })}
      >
        BUILD TIME
      </tspan>
      <tspan x="12" dy="14">
        MINUTES
      </tspan>
    </text>
  )
}

export default CustomYAxisLabel
