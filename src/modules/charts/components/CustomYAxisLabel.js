import React from "react"
import { DetailsChartDimensions } from "../constants"

function CustomYAxisLabel({ isMobile }) {
  const { ChartMinHeight } = DetailsChartDimensions
  const y = ChartMinHeight / 2

  /* 
    the positioning 'magic' numbers was manually set
    through trial and error, they will have to be 
    manually update whenever chart content or dimmensions change
  */

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
        dx={isMobile ? -25 : 0}
        dy={10}
        css={theme => ({
          letterSpacing: theme.letterSpacings.tracked,
          fontWeight: theme.fontWeights.bold,
        })}
      >
        BUILD TIME
      </tspan>
      <tspan x={isMobile ? 65 : 10} dy={isMobile ? 0 : 14}>
        {isMobile ? `(MINUTES)` : `MINUTES`}
      </tspan>
    </text>
  )
}

export default CustomYAxisLabel
