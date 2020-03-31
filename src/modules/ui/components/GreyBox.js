import React from "react"

const GreyBox = ({ children }) => {
  return (
    <div
      css={theme => ({
        padding: `${theme.space[5]} 0`,
        [theme.mediaQueries.phablet]: {
          padding: `${theme.space[10]} 0`,
        },
      })}
    >
      {children}
    </div>
  )
}

export default GreyBox
