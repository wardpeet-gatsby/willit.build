import React from "react"

import { visuallyHiddenCss } from "@modules/a11y/stylesheets"
import PageCountSelectControl from "@modules/ui/components/PageCountSelectControl"
import BuildTypeSelectControl from "./BuildTypeSelectControl"
import StatItem from "./StatItem"
import {
  OverviewItem,
  contextOverviewItemCss,
  Border,
} from "./DetailsOverview.parts"
import { HORIZONTAL_PADDING_MOBILE as wrapperPaddingMobile } from "@modules/ui/components/MaxWidthWrapper"

function DetailsOverview({
  siteType,
  pageCount,
  contentSource,
  buildType,
  stats,
}) {
  return (
    <div
      css={theme => ({
        padding: `${theme.space[6]} ${wrapperPaddingMobile} ${theme.space[8]}`,

        [theme.mediaQueries.desktop]: {
          borderTop: `1px solid ${theme.colors.blackFade[10]}`,
          padding: 0,
          marginTop: theme.space[6],
          marginBottom: theme.space[4],
        },
      })}
    >
      <h2 css={visuallyHiddenCss}>Details</h2>
      <div
        css={theme => ({
          borderBottom: `1px solid ${theme.colors.blackFade[10]}`,
          display: `flex`,
          justifyContent: `space-between`,
          flexWrap: `wrap`,
          paddingBottom: theme.space[8],

          [theme.mediaQueries.desktop]: {
            borderBottom: 0,
            flexWrap: `no-wrap`,
            paddingBottom: 0,
          },
        })}
      >
        <OverviewItem
          css={theme =>
            contextOverviewItemCss({ theme, basis: `40%`, type: `control` })
          }
        >
          <PageCountSelectControl
            siteType={siteType}
            initialPageCount={pageCount}
            contentSource={contentSource}
            buildType={buildType}
            footer="1 image per page"
            pathPrefix="details"
          />
        </OverviewItem>

        <OverviewItem
          css={theme =>
            contextOverviewItemCss({ theme, basis: `60%`, type: `control` })
          }
        >
          <BuildTypeSelectControl
            siteType={siteType}
            pageCount={pageCount}
            contentSource={contentSource}
            initialBuildType={buildType}
            pathPrefix="details"
          />
        </OverviewItem>

        <Border />

        {stats.map((item, idx) => {
          return (
            <StatItem
              key={idx}
              data={item}
              idx={idx}
              css={theme => contextOverviewItemCss({ theme })}
            />
          )
        })}
      </div>
    </div>
  )
}

export default DetailsOverview
