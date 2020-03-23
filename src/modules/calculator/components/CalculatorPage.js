import React from "react"
import { graphql } from "gatsby"

import MaxWidthWrapper from "@modules/ui/components/MaxWidthWrapper"
import GreyBox from "@modules/ui/components/GreyBox"
import Header from "./Header"
import Calculator from "./Calculator"

const CalculatorPage = ({ pageContext, data }) => {
  const { siteType, contentSource, pageCount } = pageContext

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
        />
      </GreyBox>
    </MaxWidthWrapper>
  )
}

export const query = graphql`
  query calculatorStats(
    $contentSource: BenchmarkVendors_CmsVendor!
    $siteType: BenchmarkVendors_BenchmarkSiteType!
  ) {
    benchmarkApi {
      benchmarkVendor(siteType: $siteType, contentSource: $contentSource) {
        id
        latestStats {
          coldStartTime
          warmStartTime
          platform
        }
      }
    }
  }
`

export default CalculatorPage
