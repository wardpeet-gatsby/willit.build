import React from "react"
import { Link } from "gatsby-interface"
import { graphql, useStaticQuery } from "gatsby"

import Card from "@modules/build/components/Card"
import { SiteTypeThumbnail, SourceIcon } from "@modules/build/constants"
import { visuallyHiddenCss } from "@modules/a11y/stylesheets"

const wrapperStyles = {
  marginTop: `12rem`,
}

const BuildCardsGroup = () => {
  const data = useStaticQuery(graphql`
    {
      benchmarkVendors {
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

  const benchmarkVendors = data.benchmarkVendors.benchmarkVendors

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
        {benchmarkVendors.map(
          ({ id, contentSource, siteType, latestStats }) => {
            // currently, this is showing the top stats. this could change if we decide to show latest benchmark, median of benchmarks, etc
            // we also probably need to add numberOfPages to topStats on the backend if we decide to go this route. this is hard coded for now
            return (
              <Card
                key={id}
                Icon={SourceIcon[contentSource]}
                coverImage={SiteTypeThumbnail[siteType]}
                source={contentSource}
                siteType={siteType}
                numberOfPages={512}
                subsequentBuildTime={latestStats[0].warmStartTime}
                initialBuildTime={latestStats[0].coldStartTime}
              />
            )
          }
        )}
      </div>
    </div>
  )
}

export default BuildCardsGroup
