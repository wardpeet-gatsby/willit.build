import React from "react"
import { graphql } from "gatsby"
import DetailsChart from "@modules/charts/components/DetailsChart"
import MaxWidthWrapper, {
  HORIZONTAL_PADDING_DESKTOP as wrapperPaddingDesktop,
} from "@modules/ui/components/MaxWidthWrapper"
import DetailsHeader from "./DetailsHeader"
import DetailsOverview from "./DetailsOverview"
import { filterDataForChart } from "./SiteDetailsPage.helpers"

const SiteDetailsPage = ({ data, pageContext }) => {
  const {
    allAnnotationsJson: { nodes: graphAnnotations },
    benchmarkApi: { benchmarkVendor },
  } = data

  const { pageCount, buildType } = pageContext
  const { latest, contentSource, siteType, benchmarks } = benchmarkVendor

  const graphData = filterDataForChart({
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
          stats={latest[buildType === `WARM_START` ? `warmStart` : `coldStart`]}
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
        contentSource
        siteType
        benchmarks {
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
