export const controlLabelCss = theme => ({
  display: `block`,
  textTransform: `uppercase`,
  fontSize: theme.fontSizes[0],
  fontWeight: theme.fontWeights.body,
  letterSpacing: theme.letterSpacings.tracked,
  color: theme.colors.grey[50],
  marginBottom: theme.space[3],
})

export const controlFooterCss = theme => ({
  fontSize: theme.fontSizes[1],
  color: theme.colors.grey[60],
  marginTop: theme.space[1],
})
