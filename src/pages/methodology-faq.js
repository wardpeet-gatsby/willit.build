import React from "react"

import Layout from "@modules/ui/components/Layout"
import Methodology from "@modules/docs/components/Methodology"
import Testimonials from "@modules/docs/components/Testimonials"
import FAQs from "@modules/docs/components/FAQs"
import MaxWidthWrapper from "@modules/ui/components/MaxWidthWrapper"

const MethodologyFAQ = () => {
  return (
    <Layout>
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
    </Layout>
  )
}

export default MethodologyFAQ
