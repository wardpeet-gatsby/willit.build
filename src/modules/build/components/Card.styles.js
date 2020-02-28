export const wrapperStyles = theme => ({
  background: theme.colors.grey[5],
  border: `1px solid ${theme.colors.grey[20]}`,
  borderRadius: theme.radii[2],
  width: `100%`,
  fontFamily: theme.fonts.body,
})

export const gridStyles = theme => ({
  display: `grid`,
  gridTemplateColumns: `auto`,
  gridTemplateRows: `repeat(5, auto)`,
  gridGap: theme.space[5],
  margin: `0 ${theme.space[8]} ${theme.space[5]} ${theme.space[8]}`,
  [theme.mediaQueries.desktop]: {
    gridTemplateColumns: `200px repeat(4, auto)`,
    gridTemplateRows: `auto`,
    margin: `${theme.space[8]} 0 ${theme.space[9]} 0`,
    gridGap: theme.space[3],
  },
})

export const titleStyles = theme => ({
  fontSize: theme.fontSizes[0],
  lineHeight: 1.67,
  letterSpacing: `0.05em`,
  color: theme.colors.blackFade[50],
  textTransform: `uppercase`,
  fontWeight: `normal`,
})

export const contentStyles = theme => ({
  fontSize: theme.fontSizes[5],
  lineHeight: theme.lineHeights.solid,
  color: theme.colors.blackFade[90],
  fontWeight: `bold`,
  padding: `0.675rem 0 0.5rem 0`,
})

export const subtextStyles = theme => ({
  fontSize: theme.fontSizes[1],
  lineHeight: 1.43,
  letterSpacing: ` 0.025em`,
  color: theme.colors.blackFade[70],
  svg: {
    verticalAlign: `text-top`,
  },
})

export const spanStyles = theme => ({
  fontSize: theme.fontSizes[3],
  fontWeight: `normal`,
  color: theme.colors.blackFade[50],
  paddingLeft: theme.space[2],
})

export const linkStyles = theme => ({
  color: theme.colors.lilac,
  verticalAlign: `middle`,
  height: `100%`,
  svg: {
    marginLeft: `0.25rem`,
  },
})
