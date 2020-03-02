// This component is used in gatsby-browser and gatsby-ssr to wrap
// all existing pages.
import React from "react"

import { ApolloProvider } from "@apollo/react-hooks"
import Header from "./Header"
import Footer from "./Footer"
import GlobalStyles from "./GlobalStyles"
import ThemeProvider from "./ThemeProvider"
import { SkipNavTrigger, SkipNavTarget } from "@modules/a11y/components/SkipNav"
import createApolloClient from "../../../graphql"
import "../fonts.css"

const apolloClient = typeof window !== `undefined` ? createApolloClient() : null

const App = ({ children }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider>
        <SkipNavTrigger />
        <GlobalStyles />
        <Header />
        <main>
          <SkipNavTarget />
          {children}
          <Footer />
        </main>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
