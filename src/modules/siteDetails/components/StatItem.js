import React from "react"
import { OverviewItem } from "./DetailsOverview.parts"
import {
  controlLabelCss,
  controlFooterCss,
  controlValueCss,
  platformMarkerCss,
} from "@modules/ui/styles"
import { Platforms } from "@modules/data/constants"
import { visuallyHiddenCss } from "@modules/a11y/stylesheets"

const Titles = [`Fastest Build`, `Runner-up`, `Second runner-up`]

const labelContextCss = idx => {
  return idx > 1 ? visuallyHiddenCss : {}
}

function StatItem({ data, idx, HeadingTag = `h2`, ...rest }) {
  const { timeInMinutes, platform } = data
  const title = Titles[idx]

  return (
    <OverviewItem {...rest}>
      <HeadingTag css={theme => [controlLabelCss(theme), labelContextCss(idx)]}>
        {title}
      </HeadingTag>
      <span
        css={theme => [
          controlValueCss(theme),
          { fontWeight: idx > 0 ? theme.fontWeights.body : undefined },
        ]}
      >
        {timeInMinutes}
      </span>
      <span
        css={theme => [
          controlFooterCss(theme),
          platformMarkerCss({ theme, platform }),
        ]}
      >
        {Platforms[platform].displayedAs}
      </span>
    </OverviewItem>
  )
}

export default StatItem
