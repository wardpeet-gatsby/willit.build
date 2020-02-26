import React from "react"
import PropTypes from "prop-types"

import Header from "@modules/ui/components/Header"
import GlobalStyles from "./GlobalStyles"
import ThemeProvider from "./ThemeProvider"
import "typeface-inter"

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Header />
      <div>{children}</div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
