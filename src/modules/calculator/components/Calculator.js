import React from "react"

import ContentSourceControl from "@modules/ui/components/ContentSourceControl"
import PageCountSelectControl from "@modules/ui/components/PageCountSelectControl"

import Stat from "./Stat"

const wrapperCss = theme => ({
  display: `grid`,
  gridTemplateColumns: `1fr`,
  gridTemplateAreas: `
    "controls"
    "warm"
    "cold"
  `,

  [theme.mediaQueries.desktop]: {
    gridTemplateColumns: `1fr 3fr`,
    gridTemplateAreas: `
      "controls warm warm warm"
      "controls cold cold cold"
    `,
  },
})

const controlsWrapperCss = theme => ({
  gridArea: `controls`,
  display: `flex`,
  justifyContent: `center`,
  paddingBottom: theme.space[7],
  marginBottom: theme.space[7],
  borderBottom: `1px solid ${theme.colors.blackFade[10]}`,

  [theme.mediaQueries.phablet]: {
    justifyContent: `flex-start`,
  },
  [theme.mediaQueries.desktop]: {
    paddingBottom: 0,
    marginBottom: 0,
    borderBottom: `none`,
    flexDirection: `column`,
  },
})
const firstControlWrapperCss = theme => ({
  marginRight: theme.space[7],

  [theme.mediaQueries.desktop]: {
    marginRight: 0,
    marginBottom: theme.space[7],
  },
})

const rowCss = theme => ({
  display: `flex`,
  flexDirection: `column`,

  [theme.mediaQueries.tablet]: {
    flexDirection: `row`,
    justifyContent: `space-between`,
    alignItems: `flex-end`,
  },
})

const topRowCss = theme => ({
  ...rowCss(theme),
  gridArea: `warm`,
  paddingBottom: theme.space[7],
  borderBottom: `1px solid ${theme.colors.blackFade[10]}`,
})

const bottomRowCss = theme => ({
  ...rowCss(theme),
  gridArea: `cold`,
  paddingTop: theme.space[7],
})

const Calculator = ({ siteType, contentSource, pageCount, data }) => {
  const stats = data.benchmarkApi.benchmarkVendor.latest

  const warmTimeStats = stats.warmStart
  const coldTimeStats = stats.coldStart

  return (
    <article css={wrapperCss}>
      <div css={controlsWrapperCss}>
        <div css={firstControlWrapperCss}>
          <ContentSourceControl
            siteType={siteType}
            pageCount={pageCount}
            initialContentSource={contentSource}
            pathPrefix="calculator"
          />
        </div>
        <PageCountSelectControl
          siteType={siteType}
          initialPageCount={pageCount}
          contentSource={contentSource}
          pathPrefix="calculator"
        />
      </div>
      <div css={topRowCss}>
        <div css={{ flex: 1.5 }}>
          <Stat
            type="warm-winner"
            platform={warmTimeStats[0].platform}
            time={warmTimeStats[0].timeInMinutes}
            label="Fastest Content Build"
            isLabelVisible={true}
          />
        </div>
        <div css={{ flex: 1 }}>
          <Stat
            type="warm-runner-up"
            platform={warmTimeStats[1].platform}
            time={warmTimeStats[1].timeInMinutes}
            label="Runner-Up"
            isLabelVisible={true}
          />
        </div>
        <div css={{ flex: 1 }}>
          <Stat
            type="warm-runner-up"
            platform={warmTimeStats[2].platform}
            time={warmTimeStats[2].timeInMinutes}
            label="Second Runner-Up"
            isLabelVisible={false}
          />
        </div>
      </div>
      <div css={bottomRowCss}>
        <div css={{ flex: 1.5 }}>
          <Stat
            type="cold-winner"
            platform={coldTimeStats[0].platform}
            time={coldTimeStats[0].timeInMinutes}
            label="Uncached Build"
            isLabelVisible={true}
          />
        </div>
        <div css={{ flex: 1 }}>
          <Stat
            type="cold-runner-up"
            platform={coldTimeStats[1].platform}
            time={coldTimeStats[1].timeInMinutes}
            label="Runner-Up"
            isLabelVisible={false}
          />
        </div>
        <div css={{ flex: 1 }}>
          <Stat
            type="cold-runner-up"
            platform={coldTimeStats[2].platform}
            time={coldTimeStats[2].timeInMinutes}
            label="Second Runner-Up"
            isLabelVisible={false}
          />
        </div>
      </div>
    </article>
  )
}

export default Calculator
