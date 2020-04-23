import React from "react"

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  ReferenceLine,
  XAxis,
  CartesianGrid,
  YAxis,
} from "recharts"
import CustomYAxisLabel from "./CustomYAxisLabel"
import CustomXAxisLabel from "./CustomXAxisLabel"
import CustomTooltip from "./CustomTooltip"
import CustomDot from "./CustomDot"
import AnnotationRefLineLabel from "./AnnotationRefLineLabel"
import AnnotationTip from "./AnnotationTip"
import { useTheme } from "@modules/ui/components/ThemeProvider"
import {
  xAxisTickFormater,
  yAxisTickFormater,
  getLinearGradientDefs,
} from "./DetailsChart.helpers"
import { Platforms } from "@modules/data/constants"
import { DetailsChartDimensions } from "../constants"

const { ChartHeight, YAxisWidth, ActiveDotRadius } = DetailsChartDimensions

function Chart({
  filteredData,
  isMobile,
  yAxisTicks,
  annotations,
  activeLines,
}) {
  const { colors, tones } = useTheme()
  const [activeAnnotation, setActiveAnnotation] = React.useState()
  const lastDate = filteredData[filteredData.length - 1].createdAt

  function showAnnotationTip(annotation, ref) {
    setActiveAnnotation({ annotation, ref })
  }

  return (
    <React.Fragment>
      <ResponsiveContainer width="100%" height={ChartHeight}>
        <AreaChart
          data={filteredData}
          margin={{
            top: 30,
            right: isMobile ? 0 : ActiveDotRadius, // we need this to make active dots fully visible on the right edge of the chart, otherwise there are cut by svg viewport
            left: 0,
            bottom: 0,
          }}
        >
          {getLinearGradientDefs(tones)}

          <CartesianGrid
            strokeDasharray="1 1"
            vertical={false}
            fill={colors.white}
            stroke={colors.blackFade[20]}
          />

          <Tooltip content={<CustomTooltip />} />

          <XAxis
            label={props => <CustomXAxisLabel isMobile={isMobile} {...props} />}
            dataKey="createdAt"
            stroke={colors.grey[50]}
            height={70}
            tickMargin={14}
            tickLine={false}
            tickFormatter={xAxisTickFormater}
            padding={{ right: isMobile ? 40 : 0 }}
          />

          <YAxis
            label={props => <CustomYAxisLabel isMobile={isMobile} {...props} />}
            stroke={colors.grey[50]}
            padding={{ top: 0 }}
            width={YAxisWidth}
            x={10}
            ticks={yAxisTicks}
            tickFormatter={yAxisTickFormater}
            orientation={isMobile ? `right` : `left`}
            mirror={isMobile}
          />

          {annotations.map(annotation => {
            const { date } = annotation

            return (
              <ReferenceLine
                key={`refLine${date}`}
                x={date}
                stroke={colors.blackFade[30]}
                label={
                  <AnnotationRefLineLabel
                    annotation={annotation}
                    onClick={showAnnotationTip}
                  />
                }
                strokeDasharray="3 3"
              />
            )
          })}

          {/* this is a hack to add a right border to the chart */}
          {!isMobile && (
            <ReferenceLine x={lastDate} stroke={colors.blackFade[20]} />
          )}

          {Object.entries(Platforms).map(([key, { strokeDasharray }]) => (
            <Area
              key={`${key}ChartArea`}
              type="linear"
              dataKey={key}
              strokeWidth={2}
              stroke={tones[key].medium}
              fillOpacity={1}
              fill={`url(#${key}-fill)`}
              dot={<CustomDot belongsToActiveLine={!!activeLines[key]} />}
              activeDot={
                <CustomDot
                  active={true}
                  belongsToActiveLine={!!activeLines[key]}
                />
              }
              style={{ display: !activeLines[key] ? `none` : undefined }}
              animationDuration={1000}
              strokeDasharray={strokeDasharray}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
      <AnnotationTip
        activeAnnotation={activeAnnotation}
        setActiveAnnotation={setActiveAnnotation}
      />
    </React.Fragment>
  )
}

export default Chart
