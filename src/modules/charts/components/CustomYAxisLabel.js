import React from "react"
import { DetailsChartDimensions } from "../constants"

function CustomYAxisLabel({ isMobile }) {
  const { ChartHeight } = DetailsChartDimensions
  const y = ChartHeight / 2 + 35 // "35" is ~half of width of "BUILD TIME" string

  /* 
    the positioning 'magic' numbers was manually set
    through trial and error, they will have to be 
    manually update whenever chart content or dimmensions change
  */

  return (
    <text
      y={y}
      x={0}
      transform={`rotate(-90, 0, ${y}) translate(0,10)`}
      css={theme => ({
        fontFamily: theme.fonts.body,
        fontSize: theme.fontSizes[0],
        fill: theme.colors.grey[60],
      })}
    >
      <tspan
        x="0"
        dx={0}
        dy={isMobile ? 10 : 0}
        css={theme => ({
          letterSpacing: theme.letterSpacings.tracked,
          fontWeight: theme.fontWeights.bold,
        })}
      >
        BUILD TIME
      </tspan>
    </text>
  )
}

export default CustomYAxisLabel
