import React from "react"
import PropTypes from "prop-types"
import { Platform, platformIds } from "../../data/constants"
import TabularIcon from "../../data/assets/icons/TabularIcon"
import TrophyIcon from "../../data/assets/icons/TrophyIcon"
import {
  tableHeadingCss,
  tableCss,
  tableHeaderCss,
  tableHeaderPlatformNameCss,
  tableHeaderPlatformNameTxtCss,
  tableHeaderPlatformNamePositionerCss,
  tableDataCss,
  tableDataDefaultCss,
  tableDataWinnerCss,
  trophyIconCss,
  tabularIconCss,
  platformIconCss,
  getTableValue,
  getFormattedDate,
  mobileOnlyVisibleCss,
  desktopOnlyVisibleCss,
} from "./DetailsTable.helpers"
import { visuallyHiddenCss } from "@modules/a11y/stylesheets"
import useMatchMedia from "@modules/ui/hooks/useMatchMedia"
import { useTheme } from "@modules/ui/components/ThemeProvider"

export const propTypes = {
  data: PropTypes.array,
}

function DetailsTable({ data = [] }) {
  const { mediaQueries } = useTheme()
  const isMobile = !useMatchMedia(mediaQueries.desktop)

  // Sort the dataset -- most recent to least recent
  let sortedData = [...data].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  )

  // For v1, show the data from the last thirty days
  // Later work may include progressively loading more data, if deemed a priority
  sortedData = sortedData.slice(0, 30)

  return (
    <div>
      <div css={tableHeadingCss}>
        <TabularIcon css={tabularIconCss} />
        <h2>Tabular data</h2>
      </div>

      <table css={tableCss}>
        <thead>
          <tr>
            <th css={tableHeaderCss} colSpan="1" scope="colgroup">
              Date
            </th>
            <th css={tableHeaderCss} colSpan="3" scope="colgroup">
              Build Times
            </th>
          </tr>
          <tr>
            <th css={tableHeaderPlatformNameCss} colSpan="1"></th>
            {platformIds.map(platform => {
              const PlatformIcon = Platform[platform].Icon
              return (
                <th
                  key={`${platform}_tableheader`}
                  css={tableHeaderPlatformNameCss}
                  colSpan="1"
                >
                  <div css={tableHeaderPlatformNamePositionerCss}>
                    <span aria-hidden="true">
                      <PlatformIcon css={platformIconCss} />
                    </span>

                    <span css={tableHeaderPlatformNameTxtCss}>
                      {Platform[platform].displayedAs}
                    </span>
                  </div>
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {sortedData.map(dataPerDiem => {
            // Get times into dependable structure to find fastest build(s)
            // for a given day. (If errored, it's missing)
            const buildTimes = {
              NETLIFY:
                dataPerDiem.NETLIFY || dataPerDiem.errors.NETLIFY || null,
              CIRCLECI:
                dataPerDiem.CIRCLECI || dataPerDiem.errors.CIRCLECI || null,
              GATSBY_CLOUD:
                dataPerDiem.GATSBY_CLOUD ||
                dataPerDiem.errors.GATSBY_CLOUD ||
                null,
            }

            // Sort for fastest build times
            const sortable = []
            for (const platform in buildTimes) {
              if (
                buildTimes[platform] &&
                typeof buildTimes[platform] === "number"
              ) {
                sortable.push([platform, buildTimes[platform]])
              }
            }
            sortable.sort((a, b) => a[1] - b[1])

            const formattedDate = getFormattedDate({
              date: dataPerDiem.createdAt,
              isMobile,
            })

            return (
              <tr key={`${dataPerDiem.createdAt}_daterow`}>
                <td css={tableDataCss}>
                  <span css={mobileOnlyVisibleCss}>{formattedDate.mobile}</span>
                  <span css={desktopOnlyVisibleCss}>
                    {formattedDate.desktop}
                  </span>
                </td>
                {platformIds.map(platform => {
                  const isWinner = buildTimes[platform] === sortable[0][1]

                  const tableValue = getTableValue({
                    dataPerDiem,
                    platform,
                  })
                  if (tableValue.error) {
                    return (
                      <td
                        key={`${platform}_${dataPerDiem.createdAt}_error`}
                        css={tableDataCss}
                      >
                        <span aria-hidden="true" css={tableDataDefaultCss}>
                          {tableValue.error}
                        </span>
                      </td>
                    )
                  }

                  return (
                    <td key={`${platform}_buildtime`} css={tableDataCss}>
                      <span css={visuallyHiddenCss}>
                        {isWinner && `Fastest:`} {tableValue.readableBuildTime}
                      </span>
                      <div
                        aria-hidden="true"
                        css={theme => [
                          tableDataDefaultCss(theme),
                          isWinner ? tableDataWinnerCss(theme) : null,
                        ]}
                      >
                        {isWinner && <TrophyIcon css={trophyIconCss} />}
                        <span>{tableValue.buildTime}</span>
                      </div>
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

DetailsTable.propTypes = propTypes

export default DetailsTable
