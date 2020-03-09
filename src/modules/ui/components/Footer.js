import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import wordmarkSrc from "@images/wordmark.svg"

import MaxWidthWrapper from "./MaxWidthWrapper"

const outerWrapperCss = theme => ({
  paddingTop: theme.space[15],
  paddingBottom: theme.space[15],
})

const navCss = theme => ({
  display: `flex`,
  listStyleType: `none`,
  flexDirection: `column`,

  [theme.mediaQueries.desktop]: {
    flexDirection: `row`,
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
  // Add padding to increase tap target size
  paddingTop: theme.space[4],
  paddingBottom: theme.space[4],

  [theme.mediaQueries.desktop]: {
    paddingTop: 0,
    paddingBottom: 0,
  },
})

const footerNoteCss = theme => ({
  paddingTop: theme.space[10],
  paddingBottom: theme.space[10],
  paddingRight: theme.space[10],
  color: theme.colors.grey[60],
  fontSize: theme.fontSizes[1],
  lineHeight: 1.6,
  maxWidth: 560,
})

const externalNavLinkCss = theme => ({
  display: `block`,
  boxSizing: `border-box`,
  textDecoration: `none`,
  marginRight: theme.space[8],
  color: theme.colors.grey[70],
  fontSize: theme.fontSizes[1],
  // Add padding to increase tap target size
  paddingTop: theme.space[3],
  paddingBottom: theme.space[3],

  [theme.mediaQueries.desktop]: {
    paddingLeft: 0,
    paddingRight: 0,
  },
})

const Footer = () => {
  const data = useStaticQuery(graphql`
    query getFooterData {
      contentfulFooterNavigation(name: { eq: "Main Footer" }) {
        blurb {
          blurb
        }
        contentfulchildren {
          id
          name
          linkTo
          icon {
            file {
              url
            }
          }
        }
        bottomChildren {
          id
          name
          linkTo
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
            {data.contentfulFooterNavigation.blurb.blurb}
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
              {data.contentfulFooterNavigation.bottomChildren.map(
                ({ id, name, linkTo }) => (
                  <li key={id}>
                    <a href={linkTo} css={externalNavLinkCss}>
                      {name}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
        </footer>
      </MaxWidthWrapper>
    </div>
  )
}

export default Footer
