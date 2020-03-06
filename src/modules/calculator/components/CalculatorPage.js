import React from "react"

import MaxWidthWrapper from "@modules/ui/components/MaxWidthWrapper"
import GreyBox from "@modules/ui/components/GreyBox"
import Header from "./Header"
import Calculator from "./Calculator"

const CalculatorPage = ({ pageContext }) => {
  const { siteType, contentSource, pageCount } = pageContext

  return (
    <MaxWidthWrapper>
      <GreyBox>
        <Header />
        <Calculator
          siteType={siteType}
          contentSource={contentSource}
          pageCount={pageCount}
        />
      </GreyBox>
    </MaxWidthWrapper>
  )
}

export default CalculatorPage
