import React from "react"
import PropTypes from "prop-types"
import { useTheme } from "@modules/ui/components/ThemeProvider"

import LazyChart from "./LazyChart"
import CustomLegend from "./CustomLegend"
import RangeControllerMobile from "./RangeControllerMobile"
import LazyRangeControllerDesktop from "./LazyRangeControllerDesktop"
import {
  wrapperCss,
  filterData,
  filterDataForMobile,
  filteredDataInitialStartIndex,
  filteredDataInitialEndIndex,
  getYAxisTicks,
} from "./DetailsChart.helpers"
import { ChartDefaultProps } from "../constants"
import useMatchMedia from "@modules/ui/hooks/useMatchMedia"
import { visuallyHiddenCss } from "@modules/a11y/stylesheets"

export const propTypes = {
  data: PropTypes.array,
  annotations: PropTypes.array,
  initialScopeDesktop: PropTypes.number, // in days
  initialScopeMobile: PropTypes.number, // in days
}
function DetailsChart({
  data = [],
  initialDataRangeDesktop = ChartDefaultProps.InitialDataScopeDesktop,
  initialDataRangeMobile = ChartDefaultProps.InitialDataScopeMobile,
  activePlatorms,
  annotations = [],
  setChartIsMounted,
  ...rest
}) {
  const { mediaQueries } = useTheme()
  const isMobile = !useMatchMedia(mediaQueries.desktop)

  const [filteredData, setFilteredData] = React.useState()
  const [filteredDataStartIndex, setFilteredDataStartIndex] = React.useState(
    filteredDataInitialStartIndex({
      isMobile,
      data,
      initialDataRangeMobile,
      initialDataRangeDesktop,
    })
  )
  const [filteredDataEndIndex, setFilteredDataEndIndex] = React.useState(
    filteredDataInitialEndIndex({ data })
  )

  React.useEffect(filterDataCallback, [
    isMobile,
    filteredDataStartIndex,
    filteredDataEndIndex,
  ])

  function filterDataCallback() {
    setFilteredData(
      isMobile
        ? filterDataForMobile({ data, scope: initialDataRangeMobile })
        : filterData({
            data,
            filteredDataStartIndex,
            filteredDataEndIndex,
          })
    )
  }

  const [activeLines, setActiveLines] = React.useState(activePlatorms)

  const yAxisTicks = getYAxisTicks(data)

  if (!filteredData) {
    return null
  }

  const toggleChartLine = dataKey => {
    setActiveLines({ ...activeLines, [dataKey]: !activeLines[dataKey] })
  }

  const updateDataRange = ({ startIndex, endIndex }) => {
    setFilteredDataStartIndex(startIndex)
    setFilteredDataEndIndex(endIndex)
  }

  return (
    <div css={wrapperCss} {...rest}>
      <h2 css={visuallyHiddenCss}>Charted data</h2>
      {isMobile && filteredData && (
        <RangeControllerMobile
          data={data}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
        />
      )}

      {filteredData && (
        <LazyChart
          data={data}
          filteredData={filteredData}
          isMobile={isMobile}
          yAxisTicks={yAxisTicks}
          annotations={annotations}
          activeLines={activeLines}
          onFinishLoad={setChartIsMounted}
        />
      )}

      {!isMobile && (
        <LazyRangeControllerDesktop
          data={data}
          isMobile={isMobile}
          activeLines={activeLines}
          filteredDataStartIndex={filteredDataStartIndex}
          filteredDataEndIndex={filteredDataEndIndex}
          updateDataRange={updateDataRange}
          yAxisTicks={yAxisTicks}
        />
      )}
      <CustomLegend activeLines={activeLines} onClick={toggleChartLine} />
    </div>
  )
}

DetailsChart.propTypes = propTypes

export default DetailsChart
