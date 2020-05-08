import format from "date-fns/format"
import addSeconds from "date-fns/addSeconds"

export const tableWrapperCss = theme => ({
  display: `flex`,
  alignItems: `center`,
  margin: `${theme.space[10]} 0 ${theme.space[6]} -2em`,
})

export const tableCss = theme => ({
  borderCollapse: `collapse`,
  borderTop: `1px solid ${theme.colors.blackFade[10]}`,
  color: `#333`,
  margin: `0 auto`,
  width: `100%`,
})

export const tableHeaderCss = theme => ({
  color: theme.colors.grey[70],
  fontSize: theme.fontSizes[0],
  fontWeight: theme.fontWeights.body,
  letterSpacing: theme.letterSpacings.tracked,
  padding: `${theme.space[3]} 0 ${theme.space[4]} ${theme.space[3]}`,
  textTransform: `uppercase`,
  textAlign: `left`,
})

export const tableHeaderPlatformNameCss = theme => ({
  borderBottom: `1px solid ${theme.colors.blackFade[10]}`,
  padding: `.5em`,
  textAlign: `left`,
  width: `20%`,
})

export const tableDataCss = theme => ({
  borderBottom: `1px solid ${theme.colors.blackFade[10]}`,
  borderTop: `1px solid ${theme.colors.blackFade[10]}`,
  padding: `.5em`,
})

export const tableDataFastestBuildWrapperCss = () => ({
  display: `flex`,
  alignItems: `center`,
  marginLeft: `-1px`,
})

export const tableDataFastestBuildCss = theme => ({
  color: `${theme.colors.green[80]}`,
  fontWeight: `bold`,
  marginLeft: theme.space[3],
})

export const tableDataDefaultCss = theme => ({
  marginLeft: theme.space[7],
})

export const tabularIconCss = theme => ({
  marginRight: theme.space[3],
  width: `1.4em`,
  height: `1.4em`,
})

export const platformIconCss = theme => ({
  marginRight: theme.space[3],
  width: `0.8em`,
  height: `0.8em`,
})

const durationDict = {
  h: {
    singular: `hour`,
    plural: `hours`,
  },
  m: {
    singular: `minute`,
    plural: `minutes`,
  },
  s: {
    singular: `second`,
    plural: `seconds`,
  },
}

export function getTableValue({ dataPerDiem, platform }) {
  const { valuesInMinutes } = dataPerDiem

  const buildTimeInSeconds = dataPerDiem[platform]
  if (buildTimeInSeconds) {
    // Get build time into "mm:ss" format for visual display
    const formattedBuildTimeInSeconds = addSeconds(
      new Date(0),
      buildTimeInSeconds
    )
    const formattedBuildTime = format(formattedBuildTimeInSeconds, "mm:ss")

    // Get build time into human readable "1 minute, 20 seconds" for SR
    const rawValuesInMinutes = valuesInMinutes[platform].split(` `)
    const readableBuildTime = rawValuesInMinutes
      .map(value => {
        const duration = value.slice(0, value.length - 1)
        const durationType = value.slice(-1)
        return Number(duration) === 1
          ? `${duration} ${durationDict[durationType].singular}`
          : `${duration} ${durationDict[durationType].plural}`
      })
      .join(`, `)
    // Return build values for display and screen reader, for successful build
    return { formattedBuildTime, readableBuildTime }
  }
  // Return error for unsuccessful build
  return { error: dataPerDiem.errors[platform] || `Error` }
}

export function getFormattedDate({ date }) {
  return format(new Date(`${date}`), `MMMM d, yyyy`)
}
