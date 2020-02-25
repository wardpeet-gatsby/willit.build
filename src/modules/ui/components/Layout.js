/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import GlobalStyles from "./GlobalStyles"
import ThemeProvider from "./ThemeProvider"
import "typeface-inter"

const styles = {
  margin: `0 auto`,
  maxWidth: `60rem`,
}

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <div css={styles}>{children}</div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
