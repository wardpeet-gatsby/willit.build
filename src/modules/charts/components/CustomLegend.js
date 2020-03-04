import React from "react"
import { DetailsChartDimensions, BuildServices } from "../constants"
import { Button } from "gatsby-interface"

function CustomLegend({ payload, onClick, activeLines }) {
  const { LegendMinHeight, YAxisWidth } = DetailsChartDimensions
  const ICON_WIDTH = 10

  return (
    <div
      css={theme => ({
        display: `flex`,
        flexWrap: `wrap`,
        justifyContent: `center`,
        minHeight: `${LegendMinHeight}px`,
        alignItems: `flex-end`,

        [theme.mediaQueries.desktop]: {
          paddingLeft: `calc(${YAxisWidth}px - ${theme.space[3]})`,
          justifyContent: `flex-start`,
        },
      })}
    >
      {payload.map(({ dataKey }) => {
        const isActive = activeLines[dataKey]

        return (
          <Button
            key={`${dataKey}LegendBtn`}
            onClick={() => onClick(dataKey)}
            variant="GHOST"
            css={theme => ({
              flexShrink: 0,
              fontFamily: theme.fonts.body,
              color: theme.colors.grey[isActive ? 50 : 40],
              fontSize: theme.fontSizes[2],
              padding: theme.space[3],
            })}
          >
            <svg
              viewBox={`0 0 ${ICON_WIDTH} ${ICON_WIDTH}`}
              width={ICON_WIDTH}
              height={ICON_WIDTH}
              xmlns="http://www.w3.org/2000/svg"
              css={theme => ({
                marginRight: theme.space[3],
              })}
            >
              <circle
                cx={ICON_WIDTH / 2}
                cy={ICON_WIDTH / 2}
                r={ICON_WIDTH / 2 - 1}
                css={theme => ({
                  fill: isActive
                    ? theme.colors.services[dataKey]
                    : theme.colors.white,
                  stroke: theme.colors.services[dataKey],
                })}
              />
            </svg>
            {BuildServices[dataKey].title}
          </Button>
        )
      })}
    </div>
  )
}

export default CustomLegend
