import React from "react"

import Twitter from "../assets/Twitter"
import LinkedIn from "../assets/LinkedIn"
import Link from "../assets/Link"

const wrapperCss = () => ({
  display: `flex`,
  alignItems: `flex-end`,
})

const spacerCss = theme => ({
  width: theme.space[4],
  height: theme.space[4],
})

const SocialLinks = () => {
  return (
    <div css={wrapperCss}>
      <Twitter />
      <div css={spacerCss} />
      <LinkedIn />
      <div css={spacerCss} />
      <Link />
    </div>
  )
}

export default SocialLinks
