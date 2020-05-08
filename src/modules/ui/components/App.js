// This component is used in gatsby-browser and gatsby-ssr to wrap
// all existing pages.
import React from "react"

import Header from "./Header"
import Footer from "./Footer"
import GlobalStyles from "./GlobalStyles"
import ThemeProvider from "./ThemeProvider"
import { SkipNavTrigger, SkipNavTarget } from "@modules/a11y/components/SkipNav"
import { SEO } from "@modules/seo/components/SEO"

import "../fonts.css"

const App = ({ children }) => {
  return (
    <ThemeProvider>
      <SEO />
      <SkipNavTrigger />
      <GlobalStyles />
      <Header />
      <main>
        <SkipNavTarget />
        {children}
        <Footer />
      </main>
    </ThemeProvider>
  )
}

export default App
