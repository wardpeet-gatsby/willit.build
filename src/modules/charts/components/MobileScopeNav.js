import React from "react"
import format from "date-fns/format"
import sub from "date-fns/sub"
import add from "date-fns/add"
import { Button } from "gatsby-interface"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"

const OFFSET = 7

const ScopeButton = props => (
  <Button
    {...props}
    variant="GHOST"
    css={theme => ({
      fontSize: theme.fontSizes[8],
      padding: theme.space[2],

      svg: {
        margin: 0,
        fill: theme.colors.grey[50],
      },
    })}
  />
)

function getMonthFormatted(date) {
  return format(date, `LLL`)
}

function getYearFormatted(date) {
  return format(date, `yyyy`)
}

function getDayFormatted(date) {
  return format(date, `d`)
}

function getScopeFormatted(start, end) {
  const startYear = getYearFormatted(start)
  const endYear = getYearFormatted(end)
  const startMonth = getMonthFormatted(start)
  const endMonth = getMonthFormatted(end)
  const startDay = getDayFormatted(start)
  const endDay = getDayFormatted(end)

  if (startMonth === endMonth && startYear === endYear) {
    return `${startMonth} ${startDay}-${endDay}, ${startYear}`
  } else if (startYear === endYear) {
    return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${endYear}`
  } else {
    return `${startMonth} ${startDay}, ${startYear} - ${endMonth} ${endDay}, ${endYear}`
  }
}

function shiftChartScope({
  data,
  offset,
  startDate,
  endDate,
  filteredStartDate,
  filteredEndDate,
  setFilteredData,
}) {
  let newFilteredStartDate
  let newFilteredEndDate

  const action = offset < 0 ? `prev` : `next`

  if (action === `prev`) {
    const newStartDate = sub(filteredStartDate, { days: OFFSET })
    newFilteredStartDate = newStartDate > startDate ? newStartDate : startDate
    newFilteredEndDate = add(newFilteredStartDate, { days: OFFSET - 1 })
  } else if (action === `next`) {
    const newEndDate = add(filteredEndDate, { days: OFFSET })
    newFilteredEndDate = newEndDate < endDate ? newEndDate : endDate
    newFilteredStartDate = sub(newFilteredEndDate, { days: OFFSET - 1 })
  }

  const newFilteredData = data.filter(item => {
    const itemDate = new Date(item.date)

    return itemDate >= newFilteredStartDate && itemDate <= newFilteredEndDate
  })

  setFilteredData(newFilteredData)
}

function MobileScopeNav({ data, filteredData, setFilteredData }) {
  const startDate = new Date(data[0].date)
  const endDate = new Date(data[data.length - 1].date)
  const filteredStartDate = new Date(filteredData[0].date)
  const filteredEndDate = new Date(filteredData[filteredData.length - 1].date)

  return (
    <div
      css={theme => ({
        alignItems: `center`,
        colors: theme.colors.blackFade[60],
        display: `flex`,
        fontFamily: theme.fonts.body,
        fontSize: theme.fontSizes[1],
        justifyContent: `space-between`,
        margin: `0 ${theme.space[5]} ${theme.space[3]}`,
      })}
    >
      <ScopeButton
        onClick={() =>
          shiftChartScope({
            data,
            offset: -OFFSET,
            startDate,
            endDate,
            filteredStartDate,
            filteredEndDate,
            setFilteredData,
          })
        }
        disabled={filteredStartDate <= startDate}
      >
        <MdChevronLeft />
      </ScopeButton>
      <span>{getScopeFormatted(filteredStartDate, filteredEndDate)}</span>
      <ScopeButton
        onClick={() =>
          shiftChartScope({
            data,
            offset: OFFSET,
            startDate,
            endDate,
            filteredStartDate,
            filteredEndDate,
            setFilteredData,
          })
        }
        disabled={filteredEndDate >= endDate}
      >
        <MdChevronRight />
      </ScopeButton>
    </div>
  )
}

export default MobileScopeNav
