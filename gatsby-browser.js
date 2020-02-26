import React from "react"

import Header from "@modules/ui/components/Header"
import GlobalStyles from "@modules/ui/components/GlobalStyles"
import ThemeProvider from "@modules/ui/components/ThemeProvider"

import "typeface-inter"

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Header />
      <main>{element}</main>
    </ThemeProvider>
  )
}
