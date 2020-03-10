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

function StatItem({ data, idx, ...rest }) {
  const { warmStartTime, platform } = data
  const title = Titles[idx]

  return (
    <OverviewItem {...rest}>
      <h3 css={theme => [controlLabelCss(theme), labelContextCss(idx)]}>
        {title}
      </h3>
      <span
        css={theme => [
          controlValueCss(theme),
          { fontWeight: idx > 0 ? theme.fontWeights.body : undefined },
        ]}
      >
        {warmStartTime}
      </span>
      <span
        css={theme => [
          controlFooterCss(theme),
          platformMarkerCss({ theme, platform }),
        ]}
      >
        {Platforms[platform].displayName}
      </span>
    </OverviewItem>
  )
}

export default StatItem
