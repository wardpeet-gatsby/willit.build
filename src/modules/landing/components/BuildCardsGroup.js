import React from "react"
import { Link } from "gatsby-interface"
import { graphql, useStaticQuery } from "gatsby"

import Card from "@modules/build/components/Card"
import { visuallyHiddenCss } from "@modules/a11y/stylesheets"

const wrapperStyles = {
  marginTop: `12rem`,
}

const BuildCardsGroup = () => {
  const data = useStaticQuery(graphql`
    {
      benchmarkApi {
        benchmarkVendors {
          id
          latestStats {
            coldStartTime
            platform
            warmStartTime
          }
          contentSource
          siteType
        }
      }
    }
  `)

  const benchmarkVendors = data.benchmarkApi.benchmarkVendors

  return (
    <div css={wrapperStyles}>
      <Link
        to="/methodology-faq"
        css={theme => ({
          color: theme.colors.purple[40],
        })}
      >
        Methodology + FAQ
      </Link>
      <div
        css={theme => ({
          marginTop: theme.space[12],
          display: `grid`,
          gridGap: theme.space[12],
          [theme.mediaQueries.desktop]: {
            marginTop: theme.space[9],
            gridGap: theme.space[10],
          },
        })}
      >
        <h2 css={visuallyHiddenCss} id="benchmark-sites">
          Benchmark sites
        </h2>
        {benchmarkVendors.map((data, ...rest) => {
          const contentSource = data.contentSource
          const siteType = data.siteType

          // currently, this is showing the top stats. this could change if we decide to show latest benchmark, median of benchmarks, etc
          // we also probably need to add numberOfPages to topStats on the backend if we decide to go this route. this is hard coded for now
          return (
            <Card
              key={data.id}
              contentSource={contentSource}
              siteType={siteType}
              numberOfPages={512}
              subsequentBuildTime={data.latestStats[0].warmStartTime}
              initialBuildTime={data.latestStats[0].coldStartTime}
            />
          )
        })}
      </div>
    </div>
  )
}

export default BuildCardsGroup
