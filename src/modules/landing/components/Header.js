import React from "react"
import { Button } from "gatsby-interface"
import { MdArrowDownward } from "react-icons/md"
import { useStaticQuery, graphql } from "gatsby"

import GradientHeading from "../../ui/components/GradientHeading"
import DecorativeBackground from "../assets/DecorativeBackground"
import { useTheme } from "@modules/ui/components/ThemeProvider"

const Header = () => {
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
        <GradientHeading
          leftColor={`${colors.gatsby} 32.5%`}
          rightColor={`${colors.teal[50]} 92.5%`}
          css={theme => ({
            maxWidth: `100%`,
            marginBottom: theme.space[8],
            [theme.mediaQueries.tablet]: {
              maxWidth: `90%`,
            },
          })}
        >
          {title}
        </GradientHeading>
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
        <Button
          rightIcon={<MdArrowDownward />}
          size="M"
          css={theme => ({
            fontWeight: `500`,
            fontFamily: theme.fonts.body,
          })}
          onClick={() => console.log(`TODO: scroll to next section`)}
        >
          {buttonText}
        </Button>
      </div>
      <div
        css={{
          zIndex: `-1`,
          marginTop: `-1.5rem`,
          position: `absolute`,
          left: `0`,
          width: `100%`,
          overflow: `hidden`,
        }}
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

export default Header
