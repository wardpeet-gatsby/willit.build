import React from "react"
import { useTheme } from "@modules/ui/components/ThemeProvider"
import { DetailsChartDimensions, BuildServices } from "../constants"

function CustomLegend({ payload, meta, onClick, activeLines }) {
  const { colors } = useTheme()
  const { LegendMinHeight, YAxisWidth } = DetailsChartDimensions

  const ICON_WIDTH = 8

  return (
    <div
      css={theme => ({
        display: `flex`,
        paddingLeft: `calc(${YAxisWidth}px - ${theme.space[3]})`,
        minHeight: `${LegendMinHeight}px`,
        alignItems: `flex-end`,
      })}
    >
      {payload.map(({ dataKey }, index) => (
        <button
          key={`${dataKey}LegendBtn`}
          onClick={() => onClick({ dataKey: dataKey })} // todo: add functionality to show/hide coresponding line on the chart
          css={theme => ({
            background: `none`,
            border: 0,
            display: `flex`,
            alignItems: `center`,
            fontFamily: theme.fonts.body,
            color: theme.colors.grey[50],
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
              r={ICON_WIDTH / 2}
              fill={colors.services[dataKey]}
            />
          </svg>
          {BuildServices[dataKey].title}
        </button>
      ))}
    </div>
  )
}

export default CustomLegend
