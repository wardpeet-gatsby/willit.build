import React from "react"
import DetailsChart from "@modules/charts/components/DetailsChart"
import { getMockData, getMockAnnotations } from "@modules/charts/utils/mockData"

const ChartDemoPage = () => {
  const data = getMockData()
  const annotations = getMockAnnotations()

  return <DetailsChart data={data} annotations={annotations} />
}

export default ChartDemoPage
