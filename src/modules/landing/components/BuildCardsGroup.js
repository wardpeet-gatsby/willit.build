import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Card from "@modules/build/components/Card"
import { visuallyHiddenCss } from "@modules/a11y/stylesheets"
import {
  HORIZONTAL_PADDING_MOBILE,
  HORIZONTAL_PADDING_DESKTOP,
} from "@modules/ui/components/MaxWidthWrapper"

import checkIfContstantsExist from "@modules/data/utils/checkIfContstantsExist"

const BuildCardsGroup = () => {
  const data = useStaticQuery(graphql`
    {
      benchmarkApi {
        benchmarkVendors {
          id
          contentSource
          siteType
          latest(numberOfPages: 512) {
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
    <div
      css={theme => ({
        marginTop: theme.space[8],
        display: `grid`,
        marginLeft: `-${HORIZONTAL_PADDING_MOBILE}`,
        marginRight: `-${HORIZONTAL_PADDING_MOBILE}`,
        [theme.mediaQueries.phablet]: {
          marginLeft: `-${HORIZONTAL_PADDING_DESKTOP}`,
          marginRight: `-${HORIZONTAL_PADDING_DESKTOP}`,
          marginTop: theme.space[10],
        },
        [theme.mediaQueries.desktop]: {
          marginLeft: "auto",
          marginRight: "auto",
        },
      })}
    >
      <h2 css={visuallyHiddenCss} id="benchmark-sites">
        Benchmark sites
      </h2>
      {benchmarkVendors.map(({ contentSource, siteType, id, latest }) => {
        if (!checkIfContstantsExist({ id, contentSource, siteType })) {
          return null
        }

        const { warmStart, coldStart } = latest

        if (!warmStart.length || !coldStart.length) {
          return null
        }

        return (
          <Card
            key={id}
            contentSource={contentSource}
            siteType={siteType}
            numberOfPages={512}
            cachedBuild={latest.warmStart[0]}
            uncachedBuild={latest.coldStart[0]}
          />
        )
      })}
    </div>
  )
}

export default BuildCardsGroup
