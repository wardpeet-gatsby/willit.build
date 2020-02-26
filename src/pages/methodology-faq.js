import React from "react"

import Layout from "@modules/ui/components/Layout"
import Methodology from "@modules/docs/components/Methodology"
import Testimonials from "@modules/docs/components/Testimonials"
import FAQs from "@modules/docs/components/FAQs"

const GREY_BACKGROUND = "#f0f0f2"

const MethodologyFAQ = () => {
  return (
    <Layout
      css={{
        background: GREY_BACKGROUND,
      }}
    >
      <div>
        <Methodology />
        <Testimonials />
        <FAQs />
      </div>
    </Layout>
  )
}

export default MethodologyFAQ
