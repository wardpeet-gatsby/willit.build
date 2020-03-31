import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Card from "@modules/build/components/Card"
import { visuallyHiddenCss } from "@modules/a11y/stylesheets"
import { HERO_PADDING_DESKTOP } from "../constants"

const wrapperStyles = theme => ({
  [theme.mediaQueries.desktop]: {
    paddingLeft: HERO_PADDING_DESKTOP,
  },
})

const BuildCardsGroup = () => {
  const data = useStaticQuery(graphql`
    {
      benchmarkApi {
        benchmarkVendors {
          id
          contentSource
          siteType
          latest {
            coldStart {
              platform
              timeInMs
              timeInMinutes
              humanReadableTime
            }
            warmStart {
              platform
              timeInMs
              timeInMinutes
              humanReadableTime
            }
          }
        }
      }
    }
  `)

  const benchmarkVendors = data.benchmarkApi.benchmarkVendors

  return (
    <div css={wrapperStyles}>
      <div
        css={theme => ({
          marginTop: theme.space[6],
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
        {benchmarkVendors.map(data => {
          const contentSource = data.contentSource
          const siteType = data.siteType

          return (
            <Card
              data-cy="build-card"
              key={data.id}
              contentSource={contentSource}
              siteType={siteType}
              numberOfPages={512}
              cachedBuildTime={data.latest.warmStart[0].timeInMinutes}
              uncachedBuildTime={data.latest.coldStart[0].timeInMinutes}
            />
          )
        })}
      </div>
    </div>
  )
}

export default BuildCardsGroup
