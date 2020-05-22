import React from "react"

import Methodology from "@modules/docs/components/Methodology"
import FAQs from "@modules/docs/components/FAQs"
import MaxWidthWrapper from "@modules/ui/components/MaxWidthWrapper"
import ContentBox from "@modules/ui/components/ContentBox"

const FAQ = () => {
  return (
    <MaxWidthWrapper>
      <ContentBox>
        <Methodology />
        <FAQs />
      </ContentBox>
    </MaxWidthWrapper>
  )
}

export default FAQ
