import React from "react"
import PropTypes from "prop-types"
import { useTheme } from "@modules/ui/components/ThemeProvider"
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  Legend,
  ReferenceLine,
  XAxis,
  CartesianGrid,
  YAxis,
  Brush,
} from "recharts"
import CustomLegend from "./CustomLegend"
import CustomYAxisLabel from "./CustomYAxisLabel"
import CustomTooltip from "./CustomTooltip"
import CustomActiveDot from "./CustomActiveDot"
import CustomReferenceLineLabel from "./CustomReferenceLineLabel"
import {
  xAxisTickFormater,
  yAxisTickFormater,
  getYAxisTicks,
  getLinearGradientDefs,
} from "./DetailsChart.helpers"
import { DetailsChartDimensions, BuildServices } from "../constants"

const wrapperCss = theme => ({
  ".recharts-cartesian-axis-tick-value": {
    fontSize: theme.fontSizes[0],
    fontFamily: theme.fonts.body,
  },

  ".recharts-brush": {},

  ".recharts-brush-slide": {
    fill: `#aaa`,
  },

  ".recharts-brush-texts": {
    fontFamily: theme.fonts.body,
    fill: "#666",
    fontSize: theme.fontSizes[0],
  },

  ".recharts-brush-traveller": {
    rect: {
      fill: `#999`,
    },
  },

  ".recharts-brush > rect:not(.recharts-brush-slide)": {
    fill: `#fbfbfb`,
    stroke: `#fbfbfb`,
  },

  ".recharts-cartesian-axis-line, .recharts-cartesian-axis-tick-line": {
    stroke: theme.colors.blackFade[10],
  },
})

export const propTypes = {
  data: PropTypes.array,
  annotations: PropTypes.array,
  initialTimelineScope: PropTypes.number, // in days
}

function DetailsChart({
  data = [],
  initialTimelineScope = 14,
  annotations = [],
  ...rest
}) {
  const { colors } = useTheme()
  const { length: dataLength } = data

  if (dataLength === 0) {
    return null
  }

  const { ChartMinHeight, YAxisWidth } = DetailsChartDimensions

  const initialTimelineIndex =
    dataLength > initialTimelineScope ? dataLength - initialTimelineScope : 0

  const yAxisTicks = getYAxisTicks(data)

  return (
    <div css={wrapperCss} {...rest}>
      <ResponsiveContainer width="100%" minHeight={ChartMinHeight}>
        <AreaChart
          data={data}
          margin={{ top: 30, right: 0, left: 0, bottom: 0 }}
        >
          {getLinearGradientDefs(colors.services)}

          <CartesianGrid
            strokeDasharray="1 1"
            vertical={false}
            fill={colors.grey[5]}
            stroke={colors.blackFade[10]}
          />

          <Legend
            content={
              <CustomLegend
                onClick={() => {
                  console.log("asdfasd") // todo: add functionality to hide/show particlar data line
                }}
              />
            }
          />

          <Tooltip content={<CustomTooltip />} />

          <XAxis
            dataKey="date"
            stroke={colors.grey[50]}
            fill={`red`}
            height={50}
            tickMargin={14}
            tickLine={false}
            tickFormatter={xAxisTickFormater}
          />

          <YAxis
            label={props => <CustomYAxisLabel {...props} />}
            stroke={colors.grey[50]}
            domain={[0, "dataMax"]}
            padding={{ top: 0 }}
            width={YAxisWidth}
            ticks={yAxisTicks}
            tickFormatter={yAxisTickFormater}
          />

          {annotations.map(({ date, label }) => (
            <ReferenceLine
              key={`refLine${date}`}
              x={date}
              stroke={colors.blackFade[30]}
              label={<CustomReferenceLineLabel label={label} />}
              strokeDasharray="3 3"
            />
          ))}

          {Object.entries(BuildServices).map(
            ([key, { title, color, icon }]) => (
              <Area
                key={`${key}ChartArea`}
                type="linear"
                dataKey={key}
                strokeWidth={1}
                stroke={colors.services[key]}
                fillOpacity={1}
                fill={`url(#${key}Fill)`}
                activeDot={<CustomActiveDot />}
              />
            )
          )}

          <Brush
            dataKey="date"
            startIndex={initialTimelineIndex}
            data={data}
            height={25}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

DetailsChart.propTypes = propTypes

export default DetailsChart
