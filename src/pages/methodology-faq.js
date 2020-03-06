import React from "react"

import Methodology from "@modules/docs/components/Methodology"
import Testimonials from "@modules/docs/components/Testimonials"
import FAQs from "@modules/docs/components/FAQs"
import MaxWidthWrapper from "@modules/ui/components/MaxWidthWrapper"
import GreyBox from "@modules/ui/components/GreyBox"

const MethodologyFAQ = () => {
  return (
    <MaxWidthWrapper>
      <GreyBox>
        <Methodology />
        <Testimonials />
        <FAQs />
      </GreyBox>
    </MaxWidthWrapper>
  )
}

export default MethodologyFAQ
