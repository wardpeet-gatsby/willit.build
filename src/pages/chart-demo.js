import React from "react"
import DetailsChart from "@modules/charts/components/DetailsChart"
import { getMockData, getMockAnnotations } from "@modules/charts/utils/mockData"

const ChartDemoPage = () => {
  const data = getMockData()
  const annotations = getMockAnnotations()
  const INITIAL_CHART_SCOPE = 14

  return (
    <>
      <DetailsChart
        data={data}
        annotations={annotations}
        initialTimelineScope={INITIAL_CHART_SCOPE}
        css={{
          margin: `60px 0`,
        }}
      />
    </>
  )
}

export default ChartDemoPage
