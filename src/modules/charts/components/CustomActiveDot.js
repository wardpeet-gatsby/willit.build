import React from "react"
import { useTheme } from "@modules/ui/components/ThemeProvider"
import { DetailsChartDimensions } from "../constants"

function CustomActiveDot({ cx, cy, dataKey }) {
  const {
    ActiveDotRadius,
    ActiveDotDiam,
    ActiveDotInnerRadius,
  } = DetailsChartDimensions
  const { colors } = useTheme()

  return (
    <svg
      x={cx - ActiveDotRadius}
      y={cy - ActiveDotRadius}
      width={ActiveDotDiam}
      height={ActiveDotDiam}
      viewBox={`0 0 ${ActiveDotDiam} ${ActiveDotDiam}`}
    >
      <circle
        cx={ActiveDotRadius}
        cy={ActiveDotRadius}
        r={ActiveDotRadius}
        fill={colors.services[dataKey]}
        opacity="0.2"
      />
      <circle
        cx={ActiveDotRadius}
        cy={ActiveDotRadius}
        r={ActiveDotInnerRadius}
        fill={colors.services[dataKey]}
      />
    </svg>
  )
}

export default CustomActiveDot
