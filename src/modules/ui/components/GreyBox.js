import React from "react"

const GreyBox = ({ children }) => {
  return (
    <div
      css={theme => ({
        background: theme.colors.grey[10],
        padding: theme.space[5],
        [theme.mediaQueries.phablet]: {
          padding: `${theme.space[10]} ${theme.space[14]}`,
        },
      })}
    >
      {children}
    </div>
  )
}

export default GreyBox
