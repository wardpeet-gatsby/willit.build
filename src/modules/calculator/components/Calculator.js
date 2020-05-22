import React from "react"
import { Link } from "gatsby-interface"

import ContentSourceControl from "@modules/ui/components/ContentSourceControl"
import PageCountSelectControl from "@modules/ui/components/PageCountSelectControl"
import {
  BuildType,
  ArtificiallySlowContentSources,
} from "@modules/data/constants"
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
    // Avoid changing column widths depending on the
    // value of the contentSource dropdown.
    minWidth: 260,
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

    "&:not(:last-of-type)": {
      borderBottom: `1px solid ${theme.colors.blackFade[10]}`,
      marginBottom: theme.space[7],
      paddingBottom: theme.space[7],
    },
  },
})

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
              <Link to="/faq#markdown-mdx-builds">Learn more</Link>
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
        css={_theme => ({
          width: `100%`,
          overflowX: `auto`,
        })}
      >
        <div
          css={theme => ({
            minWidth: 500,
            display: `flex`,

            [theme.mediaQueries.desktop]: {
              flexDirection: `column`,
            },
          })}
        >
          <section css={buildTypeSectionCss}>
            {stats.dataUpdate[0] && (
              <Stat
                time={stats.dataUpdate[0].timeInMinutes}
                label="Content"
                description={BuildType.DATA_UPDATE.description}
              />
            )}

            {stats.warmStart[0] && (
              <Stat
                time={stats.warmStart[0].timeInMinutes}
                label="Cached"
                description={BuildType.WARM_START.description}
              />
            )}

            {stats.coldStart[0] && (
              <Stat
                time={stats.coldStart[0].timeInMinutes}
                label="Uncached"
                description={BuildType.COLD_START.description}
              />
            )}
          </section>
        </div>
      </div>
    </article>
  )
}

export default Calculator
