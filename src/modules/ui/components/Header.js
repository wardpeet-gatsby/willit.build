import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as Interface from "gatsby-interface"

import logoSrc from "../../../images/logo.svg"

import MaxWidthWrapper from "./MaxWidthWrapper"

export const mobileMediaQuery = `@media (max-width: 1065px)`

const wrapperCss = {
  display: `flex`,
  justifyContent: `space-between`,
  // TODO: replace with design tokens
  paddingTop: 32,
  paddingBottom: 32,
}

const logoWrapperCss = {
  // TODO: replace with design tokens
  fontSize: 18,
  fontWeight: 600,
  flex: 1,
  display: `flex`,
  alignItems: `center`,
}

const logoCss = {
  display: `block`,
  // TODO: replace with design tokens
  marginRight: 8,
}

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
        <div css={logoWrapperCss}>
          <img src={logoSrc} css={logoCss} alt="" />
          Will it Build?
        </div>
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
