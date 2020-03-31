import React from "react"
import format from "date-fns/format"
import formatDuration from "../utils/formatDuration"
import { Platforms } from "@modules/data/constants"

function CustomTooltip({ active, payload }) {
  if (!active) {
    return null
  }

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

  return (
    <div
      css={theme => ({
        display: `flex`,
        flexDirection: `column`,
        background: theme.colors.blackFade[80],
        borderRadius: theme.radii[2],
        color: theme.colors.white,
        padding: theme.space[7],
        fontFamily: theme.fonts.body,
        margin: `0 ${theme.space[3]}`,
      })}
    >
      {values.map(({ name, value }) => {
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
            })}
          >
            <span
              css={theme => ({
                display: `flex`,
                fontWeight: theme.fontWeights.bold,
                color: theme.tones[name].medium,
                fontSize: theme.fontSizes[5],
              })}
            >
              {formatDuration(value)}
            </span>
            <span
              css={{
                display: `flex`,
                alignItems: `center`,
              }}
            >
              <Icon
                css={theme => ({
                  margin: 0,
                  padding: 0,
                  marginRight: theme.space[2],
                  width: theme.space[5],
                  height: theme.space[5],
                })}
              />
              <span
                css={theme => ({
                  whiteSpace: `nowrap`,
                  fontSize: theme.fontSizes[1],
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
