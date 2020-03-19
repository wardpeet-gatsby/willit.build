import React from "react"

import Hero from "@modules/landing/components/Hero"
import MaxWidthWrapper from "@modules/ui/components/MaxWidthWrapper"
import BuildCardsGroup from "@modules/landing/components/BuildCardsGroup"

const Index = () => {
  return (
    <MaxWidthWrapper>
      <Hero />
      <BuildCardsGroup />
    </MaxWidthWrapper>
  )
}

export default Index
