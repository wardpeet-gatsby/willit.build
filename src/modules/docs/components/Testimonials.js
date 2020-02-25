import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Testimonials = () => {
  const { allContentfulTestimonial } = useStaticQuery(graphql`
    {
      allContentfulTestimonial {
        edges {
          node {
            author
            quote {
              quote
            }
          }
        }
      }
    }
  `)

  const testimonials = allContentfulTestimonial.edges

  return (
    <div>
      {testimonials.map(testimonial => (
        <p
          css={theme => ({
            color: theme.colors.blackFade[80],
            fontSize: theme.fontSizes[4],
            lineHeight: theme.lineHeights.default,
            fontFamily: theme.fonts.body,
            maxWidth: `100%`,
            marginBottom: theme.space[10],
            [theme.mediaQueries.tablet]: {
              maxWidth: `75%`,
            },
          })}
        >
          <span
            css={{
              fontStyle: `italic`,
            }}
          >
            {testimonial.node.quote.quote}
          </span>
          <span
            css={theme => ({
              display: `block`,
              paddingTop: theme.space[6],
              fontSize: theme.fontSizes[3],
              color: theme.colors.blackFade[70],
            })}
          >
            {testimonial.node.author}
          </span>
        </p>
      ))}
    </div>
  )
}

export default Testimonials
