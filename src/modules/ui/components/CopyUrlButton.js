import React, { useState } from "react"
import PropTypes from "prop-types"

// import { ScreenReaderText } from "./feedback-widget/styled-elements"
import { Button, shadows, colors } from "gatsby-interface"
import LinkIcon from "../assets/Link"
import copyToClipboard from "../utils/copy-to-clipboard"

const delay = duration => new Promise(resolve => setTimeout(resolve, duration))

function Copy({ content, duration, fileName, trim = false }) {
  const [copied, setCopied] = useState(false)

  const label = copied ? `URL copied to clipboard` : `Copy URL to clipboard`

  return (
    <Button
      tone={`NEUTRAL`}
      size={`S`}
      name={label}
      disabled={copied}
      css={{
        backgroundColor: `transparent`,
        border: `none`,
        padding: 0,
        cursor: `pointer`,
        "&[disabled]": {
          cursor: `not-allowed`,
          padding: 0,
          border: `none`,
        },
        ":not([disabled]):hover": {
          border: `none`,
          padding: 0,
        },
        ":active": {
          boxShadow: shadows.floating,
          padding: 0,
        },
      }}
      onClick={async () => {
        await copyToClipboard(trim ? content.trim() : content)

        setCopied(true)

        await delay(duration)

        setCopied(false)
      }}
    >
      <LinkIcon ariaLabel={label} />
    </Button>
  )
}

Copy.propTypes = {
  content: PropTypes.string.isRequired,
  duration: PropTypes.number,
  trim: PropTypes.bool,
}

Copy.defaultProps = {
  duration: 5000,
  fileName: ``,
}

export default Copy
