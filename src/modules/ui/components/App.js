// This component is used in gatsby-browser and gatsby-ssr to wrap
// all existing pages.
import React from "react"

import Header from "./Header"
import GlobalStyles from "./GlobalStyles"
import ThemeProvider from "./ThemeProvider"
import { SkipNavTrigger, SkipNavTarget } from "@modules/a11y/components/SkipNav"

import "typeface-inter"

const App = ({ children }) => {
  return (
    <ThemeProvider>
      <SkipNavTrigger />
      <GlobalStyles />
      <Header />
      <main>
        <SkipNavTarget />
        {children}
      </main>
    </ThemeProvider>
  )
}

export default App
