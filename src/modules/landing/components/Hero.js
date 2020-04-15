import React from "react"
import { LinkButton } from "gatsby-interface"
import { MdArrowDownward } from "react-icons/md"
import { useStaticQuery, graphql } from "gatsby"

import DecorativeBackground from "../assets/DecorativeBackground"
import { useTheme } from "@modules/ui/components/ThemeProvider"
import { getTextGradientStyle } from "@modules/ui/utils"
import { HERO_PADDING_DESKTOP } from "../constants"

const Hero = () => {
  const { contentfulHomepage } = useStaticQuery(graphql`
    {
      contentfulHomepage {
        description {
          description
        }
        button
        header
      }
    }
  `)

  const title = contentfulHomepage.header
  const description = contentfulHomepage.description.description
  const buttonText = contentfulHomepage.button

  const { colors } = useTheme()
  return (
    <header>
      <div
        css={theme => ({
          zIndex: `1`,
          position: `relative`,

          [theme.mediaQueries.phablet]: {
            paddingLeft: HERO_PADDING_DESKTOP,
            paddingTop: theme.space[8],
          },
        })}
      >
        <h1
          data-cy="main-title"
          css={theme => [
            getTextGradientStyle(
              theme,
              `${colors.blue[50]} 32.5%`,
              `${colors.purple[50]} 50.5%`
            ),
            {
              maxWidth: `100%`,
              marginBottom: theme.space[8],
              fontSize: theme.fontSizes[5],
              lineHeight: theme.lineHeights.dense,

              [theme.mediaQueries.mobile]: {
                maxWidth: `80%`,
              },
              [theme.mediaQueries.phablet]: {
                maxWidth: `86%`,
                fontSize: theme.fontSizes[6],
              },
              [theme.mediaQueries.tablet]: {
                maxWidth: `32rem`,
                fontSize: theme.fontSizes[8],
              },
              [theme.mediaQueries.desktop]: {
                maxWidth: `38rem`,
                fontSize: theme.fontSizes[10],
              },
            },
          ]}
        >
          {title}
        </h1>
        <p
          data-cy="main-description"
          css={theme => ({
            color: theme.colors.grey[90],
            fontSize: theme.fontSizes[2],
            lineHeight: theme.lineHeights.default,
            fontFamily: theme.fonts.body,
            maxWidth: `100%`,
            marginBottom: theme.space[10],
            [theme.mediaQueries.tablet]: {
              fontSize: theme.fontSizes[3],
              maxWidth: `70%`,
            },
          })}
        >
          {description}
        </p>
        <LinkButton
          rightIcon={<MdArrowDownward />}
          size="M"
          css={theme => ({
            fontWeight: theme.fontWeights.semiBold,
            fontFamily: theme.fonts.body,
          })}
          to="#benchmark-sites"
          data-cy="benchmark-sites__link"
        >
          {buttonText}
        </LinkButton>
      </div>
      <div
        css={{
          zIndex: `-1`,
          position: `absolute`,
          left: `-20vw`,
          right: 0,
          top: `-20vw`,
          width: `80vw`,
          overflow: `hidden`,
        }}
      >
        <DecorativeBackground css={{ width: `100%` }} />
      </div>
    </header>
  )
}

export default Hero
