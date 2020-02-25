import React from "react"
import { useTheme } from "@modules/ui/components/ThemeProvider"

function CustomActiveDot({ cx, cy, dataKey }) {
  const { colors } = useTheme()
  const DOT_RADIUS = 12
  const DOT_DIAM = DOT_RADIUS * 2

  return (
    <svg
      x={cx - DOT_RADIUS}
      y={cy - DOT_RADIUS}
      width={DOT_DIAM}
      height={DOT_DIAM}
      viewBox="0 0 24 24"
    >
      <circle
        cx={DOT_RADIUS}
        cy={DOT_RADIUS}
        r={DOT_RADIUS}
        fill={colors.services[dataKey]}
        opacity="0.2"
      />
      <circle
        cx={DOT_RADIUS}
        cy={DOT_RADIUS}
        r={DOT_RADIUS / 3}
        fill={colors.services[dataKey]}
      />
    </svg>
  )
}

export default CustomActiveDot
