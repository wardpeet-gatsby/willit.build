import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import wordmarkSrc from "@images/wordmark.svg"

import MaxWidthWrapper from "./MaxWidthWrapper"

const mobileMediaQuery = `@media (max-width: 720px)`

const outerWrapperCss = theme => ({
  paddingTop: theme.space[15],
  paddingBottom: theme.space[15],
})

const navCss = () => ({
  display: `flex`,
  listStyleType: `none`,

  [mobileMediaQuery]: {
    flexDirection: `column`,
  },
})

const iconCss = theme => ({
  height: 24,
  marginRight: theme.space[3],
})

const navLinkCss = theme => ({
  display: `flex`,
  alignItems: `center`,
  marginRight: theme.space[10],
  textDecoration: `none`,
  color: theme.colors.lilac,

  [mobileMediaQuery]: {
    paddingTop: theme.space[3],
    paddingBottom: theme.space[3],
  },
})

const footerNoteCss = theme => ({
  paddingTop: theme.space[10],
  paddingBottom: theme.space[10],
  color: theme.colors.grey[60],
  fontSize: theme.fontSizes[1],
  lineHeight: 1.6,
  maxWidth: 535,
})

const externalNavLinkCss = theme => ({
  textDecoration: `none`,
  marginRight: theme.space[8],
  color: theme.colors.grey[70],
  fontSize: theme.fontSizes[1],

  [mobileMediaQuery]: {
    paddingTop: theme.space[2],
    paddingBottom: theme.space[2],
  },
})

const Footer = () => {
  const data = useStaticQuery(graphql`
    query getFooterData {
      contentfulFooterNavigation(name: { eq: "Main Footer" }) {
        contentfulchildren {
          ... on ContentfulNavigationItem {
            id
            name
            linkTo
            icon {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div css={outerWrapperCss}>
      <MaxWidthWrapper>
        <footer>
          <nav>
            <ul css={navCss}>
              {data.contentfulFooterNavigation.contentfulchildren.map(
                ({ id, name, icon, linkTo }) => (
                  <li key={id}>
                    <Link to={linkTo} css={navLinkCss}>
                      <img src={icon.file.url} css={iconCss} alt="" />
                      {name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
          <p css={footerNoteCss}>
            willit.build is created by Gatsby, the company behind Gatsby, the
            free and open source framework that helps developers build blazing
            fast websites and app, and maintained by our amazing ♡ community.
          </p>
          <nav>
            <ul css={navCss}>
              <li>
                <a href="https://www.gatsbyjs.com/" css={externalNavLinkCss}>
                  <img
                    src={wordmarkSrc}
                    alt="Gatsby wordmark"
                    style={{ width: 76 }}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.gatsbyjs.com/get-started"
                  css={externalNavLinkCss}
                >
                  Gatsby Cloud
                </a>
              </li>
              <li>
                <a href="https://github.com/gatsbyjs" css={externalNavLinkCss}>
                  Gatsby on Github
                </a>
              </li>
              <li>
                <a href="https://twitter.com/gatsbyjs" css={externalNavLinkCss}>
                  Follow us on Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.gatsbyjs.com/contact-us/"
                  css={externalNavLinkCss}
                >
                  Contact us
                </a>
              </li>
            </ul>
          </nav>
        </footer>
      </MaxWidthWrapper>
    </div>
  )
}

export default Footer
