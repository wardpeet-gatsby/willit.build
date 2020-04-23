import React from "react"

import ContentSourceControl from "@modules/ui/components/ContentSourceControl"
import PageCountSelectControl from "@modules/ui/components/PageCountSelectControl"
import { controlLabelCss } from "@modules/ui/styles"
import Stat from "./Stat"

const wrapperCss = theme => ({
  display: `flex`,
  flexDirection: `column`,

  [theme.mediaQueries.desktop]: {
    flexDirection: `row`,
  },
})

const controlsWrapperCss = theme => ({
  borderBottom: `1px solid ${theme.colors.blackFade[10]}`,
  display: `flex`,
  justifyContent: `space-around`,
  paddingBottom: theme.space[5],
  marginBottom: theme.space[5],

  [theme.mediaQueries.desktop]: {
    border: 0,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    marginBottom: 0,
    paddingBottom: 0,
  },
})

const controlPositionerCss = theme => ({
  display: `flex`,

  [theme.mediaQueries.tablet]: {
    flexBasis: `50%`,
    justifyContent: `center`,
  },

  [theme.mediaQueries.desktop]: {
    flexBasis: `auto`,
    justifyContent: `flex-start`,
    paddingRight: theme.space[14],

    "&:first-of-type": {
      marginBottom: theme.space[7],
    },
  },
})

const buildTypeSectionCss = theme => ({
  alignItems: `center`,
  display: `flex`,
  flexBasis: `50%`,
  flexDirection: `column`,

  [theme.mediaQueries.desktop]: {
    alignItems: `flex-end`,
    flexDirection: `row`,
    flexWrap: `wrap`,
    justifyContent: `space-between`,

    "&:first-of-type": {
      borderBottom: `1px solid ${theme.colors.blackFade[10]}`,
      marginBottom: theme.space[7],
      paddingBottom: theme.space[7],
    },
  },
})

const buildTypeHeaderCss = theme => [
  controlLabelCss(theme),
  {
    fontWeight: theme.fontWeights.bold,
    flexBasis: `100%`,
    lineHeight: theme.lineHeights.dense,
    textAlign: `center`,
    marginBottom: theme.space[7],
    marginTop: theme.space[3],

    strong: {
      display: `block`,
    },

    [theme.mediaQueries.tablet]: {
      strong: {
        display: `inline`,
      },
    },

    [theme.mediaQueries.desktop]: {
      marginTo1p: 0,
      textAlign: `left`,
    },
  },
]

const Calculator = ({
  siteType,
  contentSource,
  activeBenchmarks,
  pageCount,
  data,
}) => {
  const stats = data.benchmarkApi.benchmarkVendor.latest

  const warmTimeStats = stats.warmStart
  const coldTimeStats = stats.coldStart

  return (
    <article css={wrapperCss}>
      <div css={controlsWrapperCss}>
        <div css={controlPositionerCss}>
          <ContentSourceControl
            siteType={siteType}
            pageCount={pageCount}
            initialContentSource={contentSource}
            activeBenchmarks={activeBenchmarks}
            pathPrefix="calculator"
          />
        </div>
        <div css={controlPositionerCss}>
          <PageCountSelectControl
            siteType={siteType}
            initialPageCount={pageCount}
            contentSource={contentSource}
            activeBenchmarks={activeBenchmarks}
            pathPrefix="calculator"
          />
        </div>
      </div>
      <div
        css={theme => ({
          display: `flex`,
          width: `100%`,

          [theme.mediaQueries.desktop]: {
            flexDirection: `column`,
          },
        })}
      >
        <section css={buildTypeSectionCss}>
          <h2 css={buildTypeHeaderCss}>
            <strong>Cached</strong> builds
          </h2>
          {warmTimeStats[0] && (
            <Stat
              emphasized={true}
              winner={true}
              platform={warmTimeStats[0].platform}
              time={warmTimeStats[0].timeInMinutes}
              label={
                <>
                  Winner <span>- Fastest Build</span>
                </>
              }
            />
          )}

          {warmTimeStats[1] && (
            <Stat
              emphasized={true}
              platform={warmTimeStats[1].platform}
              time={warmTimeStats[1].timeInMinutes}
              label="Runner-Up"
            />
          )}

          {warmTimeStats[2] && (
            <Stat
              emphasized={true}
              platform={warmTimeStats[2].platform}
              time={warmTimeStats[2].timeInMinutes}
              label={
                <>
                  Second <span>Runner-Up</span>
                </>
              }
            />
          )}
        </section>
        <section css={buildTypeSectionCss}>
          <h2 css={buildTypeHeaderCss}>
            <strong>Uncached</strong> builds
          </h2>

          {coldTimeStats[0] && (
            <Stat
              winner={true}
              platform={coldTimeStats[0].platform}
              time={coldTimeStats[0].timeInMinutes}
              label={
                <>
                  Winner <span>- Fastest Build</span>
                </>
              }
            />
          )}

          {coldTimeStats[1] && (
            <Stat
              platform={coldTimeStats[1].platform}
              time={coldTimeStats[1].timeInMinutes}
              label="Runner-Up"
            />
          )}

          {coldTimeStats[2] && (
            <Stat
              platform={coldTimeStats[2].platform}
              time={coldTimeStats[2].timeInMinutes}
              label={
                <>
                  Second <span>Runner-Up</span>
                </>
              }
            />
          )}
        </section>
      </div>
    </article>
  )
}

export default Calculator
