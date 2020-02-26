import React from "react"

import Layout from "@modules/ui/components/Layout"
import Hero from "@modules/landing/components/Hero"
import MaxWidthWrapper from "@modules/ui/components/MaxWidthWrapper"

const LandingPage = () => (
  <Layout>
    <MaxWidthWrapper>
      <div
        css={theme => ({
          padding: theme.space[5],
          [theme.mediaQueries.phablet]: {
            padding: theme.space[10],
          },
        })}
      >
        <Hero />
      </div>
    </MaxWidthWrapper>
  </Layout>
)

export default LandingPage
