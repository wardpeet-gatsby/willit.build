import React from "react"
import { Global, css } from "@emotion/core"

const GlobalStyles = () => (
  <Global
    styles={theme => css`
      html {
        box-sizing: border-box;
      }
      *,
      *:after,
      *:before {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
      }
    `}
  />
)

export default GlobalStyles
