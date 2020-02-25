import React from "react"

function CustomReferenceLineLabel({ viewBox, label }) {
  const ICON_WIDTH = 16

  return (
    <g>
      <svg
        x={viewBox.x - ICON_WIDTH / 2}
        y="0"
        width={ICON_WIDTH}
        height={ICON_WIDTH}
        viewBox={`0 0 ${ICON_WIDTH} ${ICON_WIDTH}`}
        fill="none"
      >
        <path
          d="M7.33203 4.66634H8.66536V5.99967H7.33203V4.66634ZM7.33203 7.33301H8.66536V11.333H7.33203V7.33301ZM7.9987 1.33301C4.3187 1.33301 1.33203 4.31967 1.33203 7.99967C1.33203 11.6797 4.3187 14.6663 7.9987 14.6663C11.6787 14.6663 14.6654 11.6797 14.6654 7.99967C14.6654 4.31967 11.6787 1.33301 7.9987 1.33301ZM7.9987 13.333C5.0587 13.333 2.66536 10.9397 2.66536 7.99967C2.66536 5.05967 5.0587 2.66634 7.9987 2.66634C10.9387 2.66634 13.332 5.05967 13.332 7.99967C13.332 10.9397 10.9387 13.333 7.9987 13.333Z"
          css={theme => ({
            fill: theme.colors.grey[50],
          })}
        />
      </svg>

      <text
        x={viewBox.x + ICON_WIDTH}
        y={12}
        className="recharts-text recharts-label"
        textAnchor="start"
        css={theme => ({
          fontSize: theme.fontSizes[0],
          fontFamily: theme.fonts.body,
          fill: theme.colors.grey[50],
        })}
      >
        {label}
      </text>
    </g>
  )
}

export default CustomReferenceLineLabel
