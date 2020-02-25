import React from "react"
import Layout from "@modules/ui/components/Layout"
import DetailsChart from "@modules/charts/components/DetailsChart"
import { getMockData, getMockAnnotations } from "@modules/charts/utils/mockData"

const ChartDemoPage = () => {
  const data = getMockData()
  const annotations = getMockAnnotations()
  const INITIAL_CHART_SCOPE = 14

  return (
    <Layout>
      <DetailsChart
        data={data}
        annotations={annotations}
        initialTimelineScope={INITIAL_CHART_SCOPE}
        css={{
          margin: `60px 0`,
        }}
      />
    </Layout>
  )
}

export default ChartDemoPage
