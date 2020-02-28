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
import MobileScopeNav from "./MobileScopeNav"
import {
  xAxisTickFormater,
  yAxisTickFormater,
  getYAxisTicks,
  getLinearGradientDefs,
  wrapperCss,
} from "./DetailsChart.helpers"
import {
  DetailsChartDimensions,
  BuildServices,
  ChartDefaultProps,
} from "../constants"
import useMatchMedia from "../hooks/useMatchMedia"

const { ChartMinHeight, YAxisWidth, ActiveDotRadius } = DetailsChartDimensions

export const propTypes = {
  data: PropTypes.array,
  annotations: PropTypes.array,
  initialScopeDesktop: PropTypes.number, // in days
  initialScopeMobile: PropTypes.number, // in days
}

function initialDataForMobile(data, scope) {
  const startIndex = data.length > scope ? data.length - scope : 0

  return data.filter((_, idx) => idx >= startIndex)
}

function DetailsChart({
  data = [],
  initialDataScopeDesktop = ChartDefaultProps.InitialDataScopeDesktop,
  initialDataScopeMobile = ChartDefaultProps.InitialDataScopeMobile,
  annotations = [],
  ...rest
}) {
  const [activeLines, setActiveLines] = React.useState(
    Object.keys(BuildServices).reduce((acc, key) => {
      acc[key] = true
      return acc
    }, {})
  )

  const { colors, mediaQueries } = useTheme()

  const isMobile = !useMatchMedia(mediaQueries.desktop)

  const [filteredData, setFilteredData] = React.useState()

  React.useEffect(initiateFilteredData, [isMobile])

  function initiateFilteredData() {
    setFilteredData(
      isMobile ? initialDataForMobile(data, initialDataScopeMobile) : data
    )
  }

  if (!filteredData) {
    return null
  }

  const startIndex =
    filteredData.length > initialDataScopeDesktop
      ? filteredData.length - initialDataScopeDesktop
      : 0

  const yAxisTicks = getYAxisTicks(data)

  const toggleChartLine = dataKey => {
    setActiveLines({ ...activeLines, [dataKey]: !activeLines[dataKey] })
  }

  return (
    <div css={wrapperCss} {...rest}>
      {isMobile && filteredData && (
        <MobileScopeNav
          data={data}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
        />
      )}

      <ResponsiveContainer width="100%" minHeight={ChartMinHeight}>
        <AreaChart
          data={filteredData}
          margin={{
            top: 30,
            right: isMobile ? 0 : ActiveDotRadius, // we need this to make active dots fully visible on the right edge of the chart, otherewise there are cut by svg viewport
            left: 0,
            bottom: 0,
          }}
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
                activeLines={activeLines}
                onClick={toggleChartLine}
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
            padding={{ right: isMobile ? 40 : 0 }}
          />

          <YAxis
            label={props => <CustomYAxisLabel isMobile={isMobile} {...props} />}
            stroke={colors.grey[50]}
            domain={[0, "dataMax"]}
            padding={{ top: 0 }}
            width={YAxisWidth}
            x={10}
            ticks={yAxisTicks}
            tickFormatter={yAxisTickFormater}
            orientation={isMobile ? `right` : `left`}
            mirror={isMobile}
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
                style={{ display: !activeLines[key] ? `none` : undefined }}
                animationDuration={1000}
              />
            )
          )}
          {!isMobile && (
            <Brush
              dataKey="date"
              startIndex={startIndex}
              data={data}
              height={25}
            />
          )}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

DetailsChart.propTypes = propTypes

export default DetailsChart