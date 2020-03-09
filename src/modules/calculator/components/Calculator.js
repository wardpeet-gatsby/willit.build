import React from "react"

import ContentSourceControl from "@modules/ui/components/ContentSourceControl"
import PageCountSelectControl from "@modules/ui/components/PageCountSelectControl"

import Stat from "./Stat"

const wrapperCss = () => ({
  display: `grid`,
  gridTemplateColumns: `1fr 3fr`,
  gridTemplateAreas: `
    "controls warm warm warm"
    "controls cold cold cold"
  `,
})

const rowCss = {
  display: `flex`,
  justifyContent: `space-between`,
}

const topRowCss = theme => ({
  ...rowCss,
  gridArea: `warm`,
  paddingBottom: theme.space[7],
  borderBottom: `1px solid ${theme.colors.blackFade[10]}`,
})

const bottomRowCss = theme => ({
  ...rowCss,
  gridArea: `cold`,
  paddingTop: theme.space[7],
})

const Calculator = ({ siteType, contentSource, pageCount, data }) => {
  const stats = data.benchmarkApi.benchmarkVendor.latestStats

  const sortedWarmTimeStats = sortStatsForSet(stats, "warmStartTime")
  const sortedColdTimeStats = sortStatsForSet(stats, "coldStartTime")

  return (
    <article css={wrapperCss}>
      <div css={{ gridArea: `controls` }}>
        <div css={theme => ({ marginBottom: theme.space[7] })}>
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
        <Stat
          type="warm-winner"
          platform={sortedWarmTimeStats[0].platform}
          time={sortedWarmTimeStats[0].time}
          label="Fastest Content Build"
          isLabelVisible={true}
          css={{ flex: 1 }}
        />
        <Stat
          type="warm-runner-up"
          platform={sortedWarmTimeStats[1].platform}
          time={sortedWarmTimeStats[1].time}
          label="Runner-Up"
          isLabelVisible={true}
          css={{ flex: 1 }}
        />
        <Stat
          type="warm-runner-up"
          platform={sortedWarmTimeStats[2].platform}
          time={sortedWarmTimeStats[2].time}
          label="Second Runner-Up"
          isLabelVisible={false}
          css={{ flex: 1 }}
        />
      </div>
      <div css={bottomRowCss}>
        <Stat
          type="cold-winner"
          platform={sortedColdTimeStats[0].platform}
          time={sortedColdTimeStats[0].time}
          label="Initial Build"
          isLabelVisible={true}
          css={{ flex: 1 }}
        />
        <Stat
          type="cold-runner-up"
          platform={sortedColdTimeStats[1].platform}
          time={sortedColdTimeStats[1].time}
          label="Runner-Up"
          isLabelVisible={false}
          css={{ flex: 1 }}
        />
        <Stat
          type="cold-runner-up"
          platform={sortedColdTimeStats[2].platform}
          time={sortedColdTimeStats[2].time}
          label="Second Runner-Up"
          isLabelVisible={false}
          css={{ flex: 1 }}
        />
      </div>
    </article>
  )
}

const convertTimeToSeconds = timestamp => {
  // timestamps are in the form "3m 10s".
  // Convert this into # of seconds (190)
  const [, minutes, seconds] = timestamp.match(/([\d]+)m\s+([\d]+)s/)
  return Number(seconds) + Number(minutes) * 60
}

const sortStatsForSet = (stats, key) => {
  return [...stats]
    .sort((a, b) => {
      const aTime = convertTimeToSeconds(a[key])
      const bTime = convertTimeToSeconds(b[key])

      if (aTime > bTime) {
        return 1
      } else {
        return -1
      }
    })
    .map(stat => ({
      time: stat[key],
      platform: stat.platform,
    }))
}

export default Calculator
