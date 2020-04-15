import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import marked from "marked"

import { useTheme } from "@modules/ui/components/ThemeProvider"
import { getTextGradientStyle } from "@modules/ui/utils"

const Methodology = () => {
  const { contentfulMethodology } = useStaticQuery(graphql`
    {
      contentfulMethodology {
        title
        description {
          description
        }
        subheading {
          subheading
        }
      }
    }
  `)

  const title = contentfulMethodology.title
  const description = contentfulMethodology.description.description
  const subheading = contentfulMethodology.subheading.subheading

  const { colors } = useTheme()
  return (
    <div>
      <header>
        <h1
          css={theme => [
            getTextGradientStyle(
              theme,
              `${colors.blue[50]} 32.5%`,
              `${colors.purple[50]} 50.5%`
            ),
            {
              maxWidth: `100%`,
              marginBottom: theme.space[8],
              lineHeight: theme.lineHeights.dense,

              [theme.mediaQueries.tablet]: {
                maxWidth: `80%`,
                fontSize: theme.fontSizes[10],
              },
            },
          ]}
        >
          {title}
        </h1>
        <p
          css={theme => ({
            color: theme.colors.blackFade[80],
            fontFamily: theme.fonts.body,
            fontWeight: theme.fontWeights.body,
            maxWidth: `100%`,
            lineHeight: theme.lineHeights.default,

            marginBottom: theme.space[10],
            [theme.mediaQueries.tablet]: {
              maxWidth: `65%`,
              fontSize: theme.fontSizes[5],
            },
          })}
        >
          {subheading}
        </p>
      </header>
      <div
        dangerouslySetInnerHTML={{ __html: marked(description) }}
        css={theme => ({
          color: theme.colors.blackFade[80],
          fontFamily: theme.fonts.body,
          maxWidth: `100%`,
          lineHeight: theme.lineHeights.default,
          marginBottom: theme.space[10],

          p: {
            paddingTop: theme.space[4],
          },
          [theme.mediaQueries.tablet]: {
            maxWidth: `65%`,
            fontSize: theme.fontSizes[3],
          },
        })}
      />
    </div>
  )
}

export default Methodology
