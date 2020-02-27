import React from "react"

import Methodology from "@modules/docs/components/Methodology"
import Testimonials from "@modules/docs/components/Testimonials"
import FAQs from "@modules/docs/components/FAQs"
import MaxWidthWrapper from "@modules/ui/components/MaxWidthWrapper"

const MethodologyFAQ = () => {
  return (
    <MaxWidthWrapper>
      <div
        css={theme => ({
          background: theme.colors.grey[20],
          padding: theme.space[5],
          [theme.mediaQueries.phablet]: {
            padding: theme.space[10],
          },
        })}
      >
        <Methodology />
        <Testimonials />
        <FAQs />
      </div>
    </MaxWidthWrapper>
  )
}

export default MethodologyFAQ
