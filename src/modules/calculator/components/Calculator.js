import React from "react"
import { Link } from "gatsby-interface"

import ContentSourceControl from "@modules/ui/components/ContentSourceControl"
import PageCountSelectControl from "@modules/ui/components/PageCountSelectControl"
import { ArtificiallySlowContentSources } from "@modules/data/constants"
import { controlLabelCss } from "@modules/ui/styles"
import HelpCircle from "@modules/ui/components/HelpCircle"
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
  display: `grid`,
  paddingBottom: theme.space[5],
  marginBottom: theme.space[5],
  justifyContent: `space-around`,
  gridTemplateAreas: `
    'source pages'
    'disclaimer disclaimer'
  `,
  gridTemplateRows: `min-content min-content`,

  [theme.mediaQueries.desktop]: {
    gridTemplateAreas: `
      'source'
      'disclaimer'
      'pages'
    `,
    border: 0,
    marginBottom: 0,
    paddingBottom: 0,
  },
})

const controlPositionerCss = theme => ({
  display: `flex`,

  [theme.mediaQueries.tablet]: {
    justifyContent: `center`,
  },

  [theme.mediaQueries.desktop]: {
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
      marginTop: 0,
      textAlign: `left`,
    },
  },
]

const mdxDisclaimerCss = theme => ({
  gridArea: `disclaimer`,
  fontSize: theme.fontSizes[1],
  color: theme.colors.grey[60],
  marginTop: theme.space[4],
  lineHeight: theme.lineHeights.body,

  [theme.mediaQueries.tablet]: {
    textAlign: `center`,
  },
  [theme.mediaQueries.desktop]: {
    marginTop: -12,
    paddingBottom: theme.space[10],
    paddingRight: theme.space[5],
    textAlign: `left`,
    maxWidth: 250,
  },
})

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

  const isArtificiallySlow = !!ArtificiallySlowContentSources[contentSource]

  return (
    <article css={wrapperCss}>
      <div css={controlsWrapperCss}>
        <div
          css={theme => ({
            ...controlPositionerCss(theme),
            gridArea: "source",
          })}
        >
          <ContentSourceControl
            siteType={siteType}
            pageCount={pageCount}
            initialContentSource={contentSource}
            activeBenchmarks={activeBenchmarks}
            pathPrefix="calculator"
          />
        </div>

        {isArtificiallySlow && (
          <section css={mdxDisclaimerCss}>
            <p>
              <strong>Note:</strong> Markdown build times are artificially
              inflated. You should experience quicker builds.{" "}
              <Link to="/methodology-faq#markdown-mdx-builds">Learn more</Link>
            </p>
          </section>
        )}

        <div
          css={theme => ({
            ...controlPositionerCss(theme),
            gridArea: "pages",
          })}
        >
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
                  <HelpCircle
                    helpInfo="Cached builds are “warm” builds, with a cache that can be reused."
                    href="/methodology-faq"
                  />
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
                  <HelpCircle
                    helpInfo="An uncached build is a “from-scratch” build. These should be relatively rare."
                    href="/methodology-faq"
                  />
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
