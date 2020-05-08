import React from "react"

import Hero from "@modules/landing/components/Hero"
import Explainer from "@modules/landing/components/Explainer"
import MaxWidthWrapper from "@modules/ui/components/MaxWidthWrapper"
import BuildCardsGroup from "@modules/landing/components/BuildCardsGroup"

const Index = () => {
  return (
    <MaxWidthWrapper>
      <Hero />
      <Explainer />
      <BuildCardsGroup />
    </MaxWidthWrapper>
  )
}

export default Index
