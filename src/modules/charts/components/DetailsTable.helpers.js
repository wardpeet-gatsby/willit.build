import format from "date-fns/format"

const TROPHY_ICON_SIZE_DESKTOP = `1em`
const TROPHY_ICON_MARGIN_DESKTOP = `.5em`
const TROPHY_ICON_SIZE_MOBILE = `.9em`
const TROPHY_ICON_MARGIN_MOBILE = `.2em`

export const tableHeadingCss = theme => ({
  display: `flex`,
  alignItems: `center`,
  margin: `${theme.space[10]} 0 ${theme.space[6]} 0`,

  [theme.mediaQueries.desktop]: {
    marginLeft: `-2em`,
  },
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
  padding: theme.space[5],
  paddingLeft: theme.space[2],
  paddingBottom: theme.space[6],
  textTransform: `uppercase`,
  textAlign: `left`,
  position: `relative`,

  "&:after": {
    content: "''",
    position: `absolute`,
    height: `1px`,
    left: 0,
    right: 0,
    bottom: theme.space[3],
    borderBottom: `1px dashed ${theme.colors.grey[30]}`,
  },

  "&:first-of-type": {
    "&:after": {
      right: `2rem`,
    },
  },

  [theme.mediaQueries.desktop]: {
    padingLeft: theme.space[3],
  },
})

export const tableHeaderPlatformNameCss = theme => ({
  borderBottom: `1px solid ${theme.colors.blackFade[10]}`,
  textAlign: `center`,
  width: `20%`,
})

export const tableHeaderPlatformNameTxtCss = theme => ({
  fontSize: theme.fontSizes[0],
  whiteSpace: `nowrap`,

  [theme.mediaQueries.desktop]: {
    fontSize: theme.fontSizes[2],
  },
})

export const tableHeaderPlatformNamePositionerCss = theme => ({
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  padding: `${theme.space[3]} 0`,

  [theme.mediaQueries.desktop]: {
    alignItems: `center`,
    flexDirection: `row`,
    padding: theme.space[3],
  },
})

export const tableDataCss = theme => ({
  fontSize: theme.fontSizes[0],
  borderBottom: `1px solid ${theme.colors.blackFade[10]}`,
  borderTop: `1px solid ${theme.colors.blackFade[10]}`,
  padding: `${theme.space[4]} ${theme.space[3]}`,

  "&:first-of-type": {
    paddingLeft: 0,
  },

  [theme.mediaQueries.desktop]: {
    fontSize: theme.fontSizes[2],
  },
})

export const tableDataFastestBuildWrapperCss = () => ({
  display: `flex`,
  alignItems: `center`,
  marginLeft: `-1px`,
})

export const tableDataDefaultCss = theme => ({
  display: `flex`,
  alignItems: `center`,
  whiteSpace: `nowrap`,
  justifyContent: `center`,

  [theme.mediaQueries.desktop]: {
    justifyContent: `flex-start`,
    paddingLeft: `calc(${TROPHY_ICON_SIZE_DESKTOP} + ${TROPHY_ICON_MARGIN_DESKTOP})`,
  },
})

export const tableDataWinnerCss = theme => ({
  color: `${theme.colors.green[80]}`,
  fontWeight: `bold`,
  paddingLeft: 0,

  [theme.mediaQueries.desktop]: {
    paddingLeft: 0,
  },
})

export const trophyIconCss = theme => ({
  marginRight: TROPHY_ICON_MARGIN_MOBILE,
  width: TROPHY_ICON_SIZE_MOBILE,
  height: TROPHY_ICON_SIZE_MOBILE,

  [theme.mediaQueries.desktop]: {
    marginRight: TROPHY_ICON_MARGIN_DESKTOP,
    width: TROPHY_ICON_SIZE_DESKTOP,
    height: TROPHY_ICON_SIZE_DESKTOP,
  },
})

export const tableDataFastestBuildCss = theme => ({
  color: `${theme.colors.green[80]}`,
  fontWeight: `bold`,
  marginLeft: theme.space[3],
})

export const tabularIconCss = theme => ({
  marginRight: theme.space[3],
  width: `1.4em`,
  height: `1.4em`,
})

export const platformIconCss = theme => ({
  marginBottom: theme.space[2],

  [theme.mediaQueries.desktop]: {
    marginRight: theme.space[3],
    marginBottom: 0,
  },
})

export function getTableValue({ dataPerDiem, platform }) {
  const { valuesInMinutes, humanReadableTime } = dataPerDiem

  const buildTimeInSeconds = dataPerDiem[platform]

  if (typeof buildTimeInSeconds === "number") {
    const buildTime = valuesInMinutes[platform]
    const readableBuildTime = humanReadableTime[platform]

    return { buildTime, readableBuildTime }
  }
  // Return error for unsuccessful build
  return { error: dataPerDiem.errors[platform] || `Error` }
}

export function getFormattedDate({ date }) {
  return {
    mobile: format(new Date(`${date}`), `MM/dd/yy`),
    desktop: format(new Date(`${date}`), `MMMM d, ''yy`),
  }
}

export const mobileOnlyVisibleCss = theme => ({
  display: `block`,

  [theme.mediaQueries.desktop]: {
    display: `none`,
  },
})

export const desktopOnlyVisibleCss = theme => ({
  display: `none`,

  [theme.mediaQueries.desktop]: {
    display: `block`,
  },
})
