import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import * as Interface from "gatsby-interface"

import logoSrc from "../../../images/logo.svg"

import MaxWidthWrapper from "./MaxWidthWrapper"

export const mobileMediaQuery = `@media (max-width: 850px)`

const wrapperCss = theme => ({
  display: `flex`,
  justifyContent: `space-between`,
  paddingTop: theme.space[8],
  paddingBottom: theme.space[8],
})

const logoWrapperCss = theme => ({
  textDecoration: `none`,
  fontSize: theme.fontSizes[3],
  fontWeight: theme.fontWeights.heading,
  color: theme.colors.grey[90],
  display: `flex`,
  alignItems: `center`,
})

const logoCss = theme => ({
  display: `block`,
  marginRight: console.log(theme) || theme.space[3],
})

const Header = () => {
  const data = useStaticQuery(graphql`
    query getHeaderNav {
      contentfulHeaderNavigation(name: { eq: "Main Header" }) {
        contentfulchildren {
          ... on ContentfulNavigationItem {
            id
            name
            linkTo
          }
        }
      }
    }
  `)

  return (
    <MaxWidthWrapper>
      <header css={wrapperCss}>
        <Link to="/" css={logoWrapperCss}>
          <img src={logoSrc} css={logoCss} alt="" />
          Will it Build?
        </Link>
        <div>
          <Interface.Navigation
            items={data.contentfulHeaderNavigation.contentfulchildren}
          >
            <Interface.Navigation.Button to="https://gatsbyjs.com">
              Build with Cloud
            </Interface.Navigation.Button>
          </Interface.Navigation>
        </div>
      </header>
    </MaxWidthWrapper>
  )
}

export default Header
