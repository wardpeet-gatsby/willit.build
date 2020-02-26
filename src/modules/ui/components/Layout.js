import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../../../components/header"
import "../../../components/layout.css"
import GlobalStyles from "./GlobalStyles"
import ThemeProvider from "./ThemeProvider"
import "typeface-inter"

const Layout = ({ children, className }) => {
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        css={theme => ({
          margin: `0 auto`,
          maxWidth: `64rem`,
          padding: theme.space[7],

          [theme.mediaQueries.tablet]: {
            padding: theme.space[8],
          },
        })}
        className={className}
      >
        <main>{children}</main>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
