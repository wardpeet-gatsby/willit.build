export const controlLabelCss = theme => ({
  display: `block`,
  textTransform: `uppercase`,
  fontSize: theme.fontSizes[0],
  fontWeight: theme.fontWeights.body,
  letterSpacing: theme.letterSpacings.tracked,
  color: theme.colors.grey[70],
  marginBottom: theme.space[3],
})

export const controlFooterCss = theme => ({
  fontSize: theme.fontSizes[0],
  color: theme.colors.grey[60],
  marginTop: theme.space[1],

  [theme.mediaQueries.desktop]: {
    fontSize: theme.fontSizes[1],
  },
})

export const controlValueCss = theme => ({
  fontSize: theme.fontSizes[3],
  color: theme.colors.grey[90],
  fontWeight: theme.fontWeights.heading,

  [theme.mediaQueries.desktop]: {
    fontSize: theme.fontSizes[5],
  },
})

export const platformMarkerCss = ({ theme, platform }) => ({
  "&::after": {
    content: `""`,
    display: `inline-block`,
    width: `8px`,
    height: `8px`,
    background: theme.tones[platform].medium,
    borderRadius: theme.radii[2],
    marginLeft: theme.space[3],
  },
})
