import React from "react"
import format from "date-fns/format"
import formatDuration from "../utils/formatDuration"
import { Platforms } from "@modules/data/constants"

function CustomTooltip({ active, payload }) {
  if (!active) {
    return null
  }

  const errors = Object.entries(
    payload[0].payload.errors
  ).map(([key, value]) => ({ name: key, error: value }))

  const values = payload
    .map(({ name, value }) => ({
      name,
      value,
    }))
    .sort((a, b) => {
      return b.value - a.value
    })

  const valuesDate =
    payload && payload[0] && payload[0].payload && payload[0].payload.createdAt
  const formattedDate =
    valuesDate && format(new Date(`${valuesDate}`), `MMMM d, yyyy`)

  const tooltipItems = [...errors, ...values]

  return (
    <div
      css={theme => ({
        display: `flex`,
        flexDirection: `column`,
        background: theme.colors.blackFade[90],
        borderRadius: theme.radii[2],
        color: theme.colors.white,
        padding: theme.space[5],
        fontFamily: theme.fonts.body,
        margin: `0 ${theme.space[3]}`,

        [theme.mediaQueries.desktop]: {
          padding: theme.space[7],
        },
      })}
    >
      {tooltipItems.map(({ name, value, error }) => {
        const Icon = Platforms[name].IconOnDark
          ? Platforms[name].IconOnDark
          : Platforms[name].Icon

        return (
          <span
            key={`${name}TooltipSec`}
            css={theme => ({
              display: `flex`,
              flexDirection: `column`,
              marginBottom: theme.space[4],
              lineHeight: 1,
            })}
          >
            <span
              css={theme => ({
                display: `flex`,
                fontWeight: theme.fontWeights.bold,
                color: theme.tones[name].medium,
                fontSize: error ? theme.fontSizes[2] : theme.fontSizes[3],

                [theme.mediaQueries.desktop]: {
                  fontSize: error ? theme.fontSizes[3] : theme.fontSizes[5],
                },
              })}
            >
              {error ? error : formatDuration(value)}
            </span>
            <span
              css={theme => ({
                display: `flex`,
                alignItems: `center`,
                marginTop: theme.space[1],
              })}
            >
              <Icon
                css={theme => ({
                  marginRight: theme.space[2],
                  width: `0.8em`,
                  height: `0.8em`,
                })}
              />
              <span
                css={theme => ({
                  whiteSpace: `nowrap`,
                  fontSize: theme.fontSizes[0],

                  [theme.mediaQueries.desktop]: {
                    fontSize: theme.fontSizes[1],
                  },
                })}
              >
                {Platforms[name].displayedAs}
              </span>
            </span>
          </span>
        )
      })}
      <span
        css={theme => ({
          fontSize: theme.fontSizes[0],
          color: theme.colors.whiteFade[70],
        })}
      >
        {formattedDate}
      </span>
    </div>
  )
}

export default CustomTooltip
