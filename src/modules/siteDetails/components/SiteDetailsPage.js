import React from "react"
import { graphql } from "gatsby"
import DetailsChart from "@modules/charts/components/DetailsChart"
import MaxWidthWrapper, {
  HORIZONTAL_PADDING_DESKTOP as wrapperPaddingDesktop,
} from "@modules/ui/components/MaxWidthWrapper"
import DetailsHeader from "./DetailsHeader"
import DetailsOverview from "./DetailsOverview"
import convertStringTimeToSeconds from "@modules/build/utils/convertStringTimeToSeconds"
import { filterDataForChart } from "./SiteDetailsPage.helpers"

const SiteDetailsPage = ({ data, pageContext }) => {
  const {
    allAnnotationsJson: { nodes: graphAnnotations },
    benchmarkApi: { benchmarkVendor },
  } = data

  const { pageCount, buildType } = pageContext
  const { latestStats, contentSource, siteType, benchmarks } = benchmarkVendor

  const graphData = filterDataForChart({
    benchmarks,
    buildType,
    pageCount,
  })

  const latestStatsOrdered = [...latestStats].sort(
    (a, b) =>
      convertStringTimeToSeconds(a.warmStartTime) -
      convertStringTimeToSeconds(b.warmStartTime)
  )

  return (
    <MaxWidthWrapper
      css={theme => ({
        paddingLeft: 0,
        paddingRight: 0,

        [theme.mediaQueries.desktop]: {
          paddingLeft: wrapperPaddingDesktop,
          paddingRight: wrapperPaddingDesktop,
        },
      })}
    >
      <div
        css={theme => ({
          background: theme.colors.grey[5],

          [theme.mediaQueries.desktop]: {
            padding: `${theme.space[10]} ${theme.space[15]} ${theme.space[8]}`,
          },
        })}
      >
        <DetailsHeader
          siteType={siteType}
          contentSource={contentSource}
          pageCount={pageCount}
        />

        <DetailsOverview
          siteType={siteType}
          contentSource={contentSource}
          pageCount={pageCount}
          buildType={buildType}
          stats={latestStatsOrdered}
        />
      </div>
      <section>
        <DetailsChart data={graphData} annotations={graphAnnotations} />
      </section>
    </MaxWidthWrapper>
  )
}

export default SiteDetailsPage

export const query = graphql`
  query SiteDetailsPageQuery(
    $contentSource: BenchmarkVendors_CmsVendor!
    $siteType: BenchmarkVendors_BenchmarkSiteType!
  ) {
    allAnnotationsJson {
      nodes {
        date
        label
        description
        link
        linkText
      }
    }
    benchmarkApi {
      benchmarkVendor(siteType: $siteType, contentSource: $contentSource) {
        id
        latestStats {
          coldStartTime
          platform
          warmStartTime
        }
        contentSource
        siteType
        benchmarks {
          id
          numberOfPages
          numberOfImages
          buildType
          createdAt
          buildTimes {
            NETLIFY
            GATSBY_CLOUD
            CIRCLECI
          }
        }
      }
    }
  }
`
