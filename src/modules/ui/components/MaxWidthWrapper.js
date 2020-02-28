import React from "react"

const MAX_WIDTH = 1280

const wrapperCss = theme => ({
  maxWidth: MAX_WIDTH,
  paddingLeft: theme.space[5],
  paddingRight: theme.space[5],
  marginLeft: "auto",
  marginRight: "auto",

  [theme.mediaQueries.phablet]: {
    paddingLeft: theme.space[8],
    paddingRight: theme.space[8],
  },
})

const MaxWidthWrapper = ({ children, ...rest }) => {
  return (
    <div css={wrapperCss} {...rest}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper
