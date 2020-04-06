import React from "react"
import { graphql } from "gatsby"

import MaxWidthWrapper from "@modules/ui/components/MaxWidthWrapper"
import GreyBox from "@modules/ui/components/GreyBox"
import Header from "./Header"
import Calculator from "./Calculator"

const CalculatorPage = ({ pageContext, data }) => {
  const { siteType, contentSource, activeBenchmarks, pageCount } = pageContext

  return (
    <MaxWidthWrapper>
      <GreyBox>
        <Header
          siteType={siteType}
          contentSource={contentSource}
          pageCount={pageCount}
        />
        <Calculator
          siteType={siteType}
          contentSource={contentSource}
          pageCount={pageCount}
          data={data}
          activeBenchmarks={activeBenchmarks}
        />
      </GreyBox>
    </MaxWidthWrapper>
  )
}

export default CalculatorPage

export const query = graphql`
  query calculatorStats(
    $contentSource: BenchmarkVendors_CmsVendor!
    $siteType: BenchmarkVendors_BenchmarkSiteType!
    $pageCount: Int!
  ) {
    benchmarkApi {
      benchmarkVendor(siteType: $siteType, contentSource: $contentSource) {
        id
        latest(numberOfPages: $pageCount) {
          coldStart {
            platform
            timeInMs
            timeInMinutes
            humanReadableTime
          }
          warmStart {
            platform
            timeInMs
            timeInMinutes
            humanReadableTime
          }
        }
      }
    }
  }
`
