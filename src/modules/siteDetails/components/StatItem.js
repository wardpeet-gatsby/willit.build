import React from "react"
import { OverviewItem } from "./DetailsOverview.parts"
import {
  controlLabelCss,
  controlFooterCss,
  controlValueCss,
  buildTypeMarkerCss,
} from "@modules/ui/styles"
import HelpCircle from "@modules/ui/components/HelpCircle"
import { useTheme } from "@modules/ui/components/ThemeProvider"

const Titles = [`Build Times`]

function StatItem({ data, idx, ...rest }) {
  const { timeInMinutes, colorKey, displayedAs } = data
  const title = Titles[idx]

  const { tones } = useTheme()

  return (
    <OverviewItem {...rest} data-cy="stat-item">
      {title && (
        <h3 css={theme => controlLabelCss(theme)}>
          {title}{" "}
          <HelpCircle
            helpInfo="Learn more about our various build types in our Frequently Asked Questions."
            href="/methodology-faq#build-type-differences"
          />
        </h3>
      )}
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
          buildTypeMarkerCss({ theme }),
          {
            "&::after": {
              background: tones[colorKey].medium,
            },
          },
        ]}
      >
        {displayedAs}
      </span>
    </OverviewItem>
  )
}

export default StatItem
