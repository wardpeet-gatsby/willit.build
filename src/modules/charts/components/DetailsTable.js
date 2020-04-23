import React from "react"
import PropTypes from "prop-types"
import { Platform, platformIds } from "../../data/constants"
import TabularIcon from "../../data/assets/icons/TabularIcon"
import TrophyIcon from "../../data/assets/icons/TrophyIcon"
import {
  tableWrapperCss,
  tableCss,
  tableHeaderCss,
  tableHeaderPlatformNameCss,
  tableDataCss,
  tableDataFastestBuildWrapperCss,
  tableDataFastestBuildCss,
  tableDataDefaultCss,
  tabularIconCss,
  platformIconCss,
  getTableValue,
  getFormattedDate,
} from "./DetailsTable.helpers"
import { visuallyHiddenCss } from "@modules/a11y/stylesheets"

export const propTypes = {
  data: PropTypes.array,
}

function DetailsTable({ data = [] }) {
  // Sort the dataset -- most recent to least recent
  let sortedData = [...data].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  )

  // For v1, show the data from the last thirty days
  // Later work may include progressively loading more data, if deemed a priority
  sortedData = sortedData.slice(0, 30)

  return (
    <div>
      <div css={tableWrapperCss}>
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
                  <span aria-hidden="true">
                    <PlatformIcon css={platformIconCss} />
                  </span>

                  {Platform[platform].displayedAs}
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
            })
            return (
              <tr key={`${dataPerDiem.createdAt}_daterow`}>
                <td css={tableDataCss}>{formattedDate}</td>
                {platformIds.map(platform => {
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

                  if (buildTimes[platform] === sortable[0][1]) {
                    return (
                      <td key={`${platform}_buildtime`} css={tableDataCss}>
                        <span css={visuallyHiddenCss}>
                          {`Fastest: ${tableValue.readableBuildTime}`}
                        </span>
                        <div
                          aria-hidden="true"
                          css={tableDataFastestBuildWrapperCss}
                        >
                          <TrophyIcon />
                          <span css={tableDataFastestBuildCss}>
                            {tableValue.formattedBuildTime}
                          </span>
                        </div>
                      </td>
                    )
                  } else {
                    return (
                      <td key={`${platform}_buildtime`} css={tableDataCss}>
                        <span css={visuallyHiddenCss}>
                          {tableValue.readableBuildTime}
                        </span>
                        <span aria-hidden="true" css={tableDataDefaultCss}>
                          {tableValue.formattedBuildTime}
                        </span>
                      </td>
                    )
                  }
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
