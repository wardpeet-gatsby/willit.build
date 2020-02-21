/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import * as Interface from "gatsby-interface"

import logoSrc from "../images/logo.svg"

import MaxWidthWrapper from "./max-width-wrapper"

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

const Header = ({ siteTitle }) => {
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
          />
        </div>
      </header>
    </MaxWidthWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
