import React from "react"
import { LinkButton } from "gatsby-interface"
import { MdArrowDownward } from "react-icons/md"
import { useStaticQuery, graphql } from "gatsby"

import DecorativeBackground from "../assets/DecorativeBackground"
import { useTheme } from "@modules/ui/components/ThemeProvider"
import { getTextGradientStyle } from "@modules/ui/utils"

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
        css={{
          zIndex: `1`,
          position: `relative`,
        }}
      >
        <h1
          css={theme => [
            getTextGradientStyle(
              theme,
              `${colors.gatsby} 32.5%`,
              `${colors.teal[50]} 92.5%`
            ),
            {
              maxWidth: `100%`,
              marginBottom: theme.space[8],
              [theme.mediaQueries.tablet]: {
                maxWidth: `90%`,
                fontSize: theme.fontSizes[10],
                lineHeight: theme.lineHeights.dense,
              },
            },
          ]}
        >
          {title}
        </h1>
        <p
          css={theme => ({
            color: theme.colors.blackFade[70],
            fontSize: theme.fontSizes[3],
            lineHeight: theme.lineHeights.default,
            fontFamily: theme.fonts.body,
            maxWidth: `100%`,
            marginBottom: theme.space[10],
            [theme.mediaQueries.tablet]: {
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
            fontWeight: `500`,
            fontFamily: theme.fonts.body,
          })}
          to="#benchmark-sites"
        >
          {buttonText}
        </LinkButton>
      </div>
      <div
        css={theme => ({
          zIndex: `-1`,
          marginTop: `-${theme.space[7]}`,
          position: `absolute`,
          left: `0`,
          width: `100%`,
          overflow: `hidden`,
        })}
      >
        <DecorativeBackground
          css={{
            minWidth: `700px`,
            width: `100%`,
          }}
        />
      </div>
    </header>
  )
}

export default Hero
