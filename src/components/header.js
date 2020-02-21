import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

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
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        {data.contentfulHeaderNavigation.contentfulchildren.map(
          ({ id, name, linkTo }) => {
            return (
              <Link
                to={linkTo}
                key={id}
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                {name}
              </Link>
            )
          }
        )}
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
