import { getTextGradientStyle } from "@modules/ui/utils"

export const wrapperStyles = theme => ({
  display: `grid`,
  gridTemplateColumns: `100%`,
  gridGap: `${theme.space[4]} ${theme.space[8]}`,
  marginTop: theme.space[10],
  marginBottom: theme.space[8],

  [theme.mediaQueries.phablet]: {
    gridTemplateColumns: `repeat(auto-fit, minmax(400px, 1fr))`,
  },
})

export const questionWrapper = theme => ({
  position: `relative`,
  borderBottom: `1px solid ${theme.colors.blackFade[10]}`,
  paddingBottom: theme.space[4],
})

export const questionRowStyles = theme => ({
  width: "100%",
  display: `flex`,
  justifyContent: `space-between`,
  background: `transparent`,
  border: `none`,
  fontSize: theme.fontSizes[2],
  fontWeight: `bold`,
  textAlign: `left`,
  padding: 0,
  cursor: `pointer`,

  ":hover": {
    color: theme.colors.purple[40],
  },
  ":focus": {
    color: theme.colors.purple[40],
  },
})

export const answerStyles = theme => ({
  paddingTop: theme.space[6],
  fontSize: theme.fontSizes[1],
})

export const expandCollapseButtonStyles = theme => ({
  padding: theme.space[4],
  background: `transparent`,
  border: `none`,
  color: theme.colors.grey[60],

  [theme.mediaQueries.phablet]: {
    ":last-of-type": {
      marginRight: `-${theme.space[4]}`,
    },
  },
})

export const titleStyles = theme => ({
  paddingRight: theme.space[4],
})

export const headerSectionStyles = theme => ({
  display: `flex`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  flexDirection: `column`,

  [theme.mediaQueries.phablet]: {
    flexDirection: `row`,
    justifyContent: `space-between`,
  },
})

export const faqIconStyles = {
  fontSize: 24,
  color: `inherit`,
  opacity: 0.5,
}

export const contactLinkStyles = theme => ({
  color: theme.colors.lilac,
  textDecoration: `none`,
  display: `inline-flex`,
  alignItems: `center`,
})

export const expandCollapseRowStyles = theme => ({
  marginTop: theme.space[4],
  [theme.mediaQueries.phablet]: {
    marginTop: `0`,
  },
})

export const headerTextStyles = theme => [
  getTextGradientStyle(
    theme,
    `${theme.colors.orange[60]} 32.5%`,
    `${theme.colors.purple[60]} 92.5%`
  ),
  {
    maxWidth: `100%`,
    marginBottom: theme.space[6],
    [theme.mediaQueries.tablet]: {
      maxWidth: `90%`,
      fontSize: theme.fontSizes[7],
      lineHeight: theme.lineHeights.dense,
    },
  },
]
