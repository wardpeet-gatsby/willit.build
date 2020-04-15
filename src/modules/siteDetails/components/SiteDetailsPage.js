import React from "react"
import { graphql } from "gatsby"
import DetailsChart from "@modules/charts/components/DetailsChart"
import DetailsChartPlaceholder from "@modules/charts/components/DetailsChartPlaceholder"
import { DetailsChartDimensions } from "@modules/charts/constants"
import MaxWidthWrapper, {
  HORIZONTAL_PADDING_DESKTOP as wrapperPaddingDesktop,
} from "@modules/ui/components/MaxWidthWrapper"
import DetailsHeader from "./DetailsHeader"
import DetailsOverview from "./DetailsOverview"
import { formatDataForChart } from "./SiteDetailsPage.helpers"

const { YAxisWidth } = DetailsChartDimensions

const SiteDetailsPage = ({ data, pageContext }) => {
  const [chartIsMounted, setChartIsMounted] = React.useState(false)
  const { activeBenchmarks } = pageContext

  React.useEffect(() => {
    setChartIsMounted(true)
  }, [])

  const {
    allAnnotationsJson: { nodes: graphAnnotations },
    benchmarkApi: { benchmarkVendor },
  } = data

  const { pageCount, buildType } = pageContext
  const {
    latest,
    contentSource,
    siteType,
    benchmarks,
    repositoryUrl,
  } = benchmarkVendor

  const { graphData, activePlatorms } = formatDataForChart({
    benchmarks,
    buildType,
    pageCount,
  })

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
            padding: `${theme.space[2]} 0 ${theme.space[8]} ${YAxisWidth}px`,
          },
        })}
      >
        <DetailsHeader
          siteType={siteType}
          contentSource={contentSource}
          pageCount={pageCount}
          repositoryUrl={repositoryUrl}
        />

        <DetailsOverview
          siteType={siteType}
          contentSource={contentSource}
          pageCount={pageCount}
          buildType={buildType}
          stats={latest[buildType === `WARM_START` ? `warmStart` : `coldStart`]}
          activeBenchmarks={activeBenchmarks}
        />
      </div>
      <section>
        {!chartIsMounted && <DetailsChartPlaceholder />}
        <DetailsChart
          data={graphData}
          annotations={graphAnnotations}
          activePlatorms={activePlatorms}
        />
      </section>
    </MaxWidthWrapper>
  )
}

export default SiteDetailsPage

export const query = graphql`
  query SiteDetailsPageQuery(
    $contentSource: BenchmarkVendors_CmsVendor!
    $siteType: BenchmarkVendors_BenchmarkSiteType!
    $pageCount: Int!
    $buildType: BenchmarkVendors_BenchmarkBuildType!
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
        repositoryUrl
        contentSource
        siteType
        latest(numberOfPages: $pageCount) {
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

        benchmarks(numberOfPages: $pageCount, buildType: $buildType) {
          id
          numberOfPages
          numberOfImages
          buildType
          createdAt
          buildTimes {
            platform
            timeInMs
            timeInMinutes
            humanReadableTime
          }
        }
      }
    }
  }
`
