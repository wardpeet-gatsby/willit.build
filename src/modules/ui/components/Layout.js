import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../../../components/header"
import "../../../components/layout.css"
import GlobalStyles from "./GlobalStyles"
import ThemeProvider from "./ThemeProvider"
import "typeface-inter"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider>
      <GlobalStyles />
      <Header />
      <div css={styles}>{children}</div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
