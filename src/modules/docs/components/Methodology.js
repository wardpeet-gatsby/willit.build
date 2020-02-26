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
              `${colors.gatsby} 32.5%`,
              `${colors.teal[50]} 92.5%`
            ),
            {
              maxWidth: `100%`,
              marginBottom: theme.space[8],
              [theme.mediaQueries.tablet]: {
                maxWidth: `80%`,
                fontSize: theme.fontSizes[10],
                lineHeight: theme.lineHeights.dense,
              },
            },
          ]}
        >
          {title}
        </h1>
      </header>
      <h3
        css={theme => ({
          color: theme.colors.blackFade[80],
          fontFamily: theme.fonts.body,
          fontWeight: `normal`,
          maxWidth: `100%`,
          marginBottom: theme.space[10],
          [theme.mediaQueries.tablet]: {
            maxWidth: `65%`,
            fontSize: theme.fontSizes[5],
            lineHeight: theme.lineHeights.default,
          },
        })}
      >
        {subheading}
      </h3>
      <div
        dangerouslySetInnerHTML={{ __html: marked(description) }}
        css={theme => ({
          color: theme.colors.blackFade[80],
          fontFamily: theme.fonts.body,
          maxWidth: `100%`,
          marginBottom: theme.space[10],
          p: {
            paddingTop: theme.space[4],
          },  
          [theme.mediaQueries.tablet]: {
            maxWidth: `65%`,
            fontSize: theme.fontSizes[3],
            lineHeight: theme.lineHeights.default,
          },
        })}
      />
    </div>
  )
}

export default Methodology
