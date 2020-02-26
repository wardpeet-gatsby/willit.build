// This component is used in gatsby-browser and gatsby-ssr to wrap
// all existing pages.
import React from "react"

import Header from "./Header"
import GlobalStyles from "./GlobalStyles"
import ThemeProvider from "./ThemeProvider"

import "typeface-inter"

const App = ({ children }) => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  )
}

export default App
