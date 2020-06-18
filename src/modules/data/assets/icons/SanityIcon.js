import React from "react"

import { toCamelCase } from "@modules/data/utils/transformName"
import { generateId } from "../../../../utils"

const RED_COLOR = `#FF4433`

export default ({
  height = 25,
  width = 25,
  inverted,
  title = `Sanity logo`,
  ...rest
}) => {
  const titleId = `${toCamelCase(title)}SvgTitle${generateId(5)}`

  const PATH_COLOR = inverted ? RED_COLOR : `white`
  const BG_COLOR = inverted ? `white` : RED_COLOR

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      role="img"
      {...rest}
    >
      <title id={titleId}>{title}</title>
      <circle cx="10" cy="10" r="10" fill={BG_COLOR} />
      <path
        opacity="0.6"
        d="M12.6553 12.0238C13.5923 12.6212 14.0166 13.4645 14.0166 14.6769C13.2211 15.6784 11.8597 16.223 10.2509 16.223C7.54588 16.223 5.61879 14.8877 5.21216 12.586H7.81107C8.14699 13.6402 9.03097 14.1322 10.2332 14.1322C11.6652 14.1498 12.6376 13.3767 12.6553 12.0238Z"
        fill={PATH_COLOR}
      />
      <path
        opacity="0.6"
        d="M7.58119 7.84217C6.69721 7.31507 6.1845 6.36629 6.21986 5.34723C6.98008 4.36331 8.28838 3.76593 9.87955 3.76593C12.6553 3.76593 14.2464 5.22424 14.6531 7.26236H12.1426C11.8597 6.45414 11.1702 5.82162 9.91491 5.82162C8.55358 5.83919 7.63423 6.61227 7.58119 7.84217Z"
        fill={PATH_COLOR}
      />
      <path
        d="M6.21988 5.36481C6.21988 7.03396 7.26299 8.03544 9.34919 8.56254L11.5592 9.07207C13.5393 9.52889 14.7415 10.6534 14.7415 12.4806C14.7592 13.2713 14.494 14.0444 14.0166 14.6769C14.0166 12.8496 13.0619 11.8657 10.7812 11.2683L8.60664 10.7764C6.85635 10.3898 5.5127 9.45861 5.5127 7.4732C5.5127 6.7177 5.76021 5.96219 6.21988 5.36481Z"
        fill={PATH_COLOR}
      />
    </svg>
  )
}
