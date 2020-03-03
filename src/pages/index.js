import React from "react"

import Hero from "@modules/landing/components/Hero"
import MaxWidthWrapper from "@modules/ui/components/MaxWidthWrapper"
import BuildCardsGroup from "@modules/landing/components/BuildCardsGroup"

const Index = () => {
  return (
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
        <BuildCardsGroup />
      </div>
    </MaxWidthWrapper>
  )
}

export default Index
