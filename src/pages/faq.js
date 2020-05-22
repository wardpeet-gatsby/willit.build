import React from "react"

import Methodology from "@modules/docs/components/Methodology"
import Testimonials from "@modules/docs/components/Testimonials"
import FAQs from "@modules/docs/components/FAQs"
import MaxWidthWrapper from "@modules/ui/components/MaxWidthWrapper"
import ContentBox from "@modules/ui/components/ContentBox"

const FAQ = () => {
  return (
    <MaxWidthWrapper>
      <ContentBox>
        <Methodology />
        <Testimonials />
        <FAQs />
      </ContentBox>
    </MaxWidthWrapper>
  )
}

export default FAQ
