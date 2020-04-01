import React from "react"
import { DetailsChartDimensions } from "../constants"
import { Platforms } from "@modules/data/constants"
import { ToggleCheckbox } from "gatsby-interface"

function CustomLegend({ onClick, activeLines }) {
  const { LegendMinHeight, YAxisWidth } = DetailsChartDimensions

  return (
    <div
      css={theme => ({
        display: `flex`,
        flexWrap: `wrap`,
        justifyContent: `center`,
        minHeight: `${LegendMinHeight}px`,
        alignItems: `flex-end`,

        [theme.mediaQueries.desktop]: {
          paddingLeft: `${YAxisWidth}px`,
          justifyContent: `flex-start`,
        },
      })}
    >
      {Object.entries(Platforms).map(([key, { displayedAs }]) => {
        const isActive = activeLines[key]

        return (
          <ToggleCheckbox
            key={`legend-toggle-${key}`}
            label={displayedAs}
            checked={isActive}
            tone={key}
            onChange={() => onClick(key)}
            css={theme => ({
              color: theme.colors.grey[60],
              fontSize: theme.fontSizes[1],
              fontFamily: theme.fonts.body,
              margin: `${theme.space[1]} ${theme.space[3]}`,
              transform: `translate(-6%)`,

              span: {
                transform: `scale(0.66) translateX(2%)`,
                marginRight: 0,

                "&:after": {
                  transform: `scale(0.8)`,
                },
              },

              [theme.mediaQueries.desktop]: {
                margin: 0,
                marginRight: theme.space[4],
              },
            })}
          />
        )
      })}
    </div>
  )
}

export default CustomLegend
