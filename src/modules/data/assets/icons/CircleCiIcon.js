import React from "react"
import { toCamelCase } from "@modules/data/utils/transformName"
import { generateId } from "../../../../utils"

export default ({
  height = 16,
  width = 16,
  inverted,
  title = `Circle CI logo`,
  ...rest
}) => {
  const titleId = `${toCamelCase(title)}SvgTitle_${generateId(3)}`

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      role="img"
      {...rest}
    >
      <title id={titleId}>{title}</title>
      <path
        d="M5.97709 8C5.97709 6.944 6.83309 6.096 7.88109 6.096C8.92909 6.096 9.78509 6.952 9.78509 8C9.78509 9.048 8.92909 9.904 7.88109 9.904C6.83309 9.904 5.97709 9.048 5.97709 8ZM7.88109 0C4.14509 0 1.01709 2.56 0.129094 6.016C0.121094 6.04 0.121094 6.064 0.121094 6.096C0.121094 6.304 0.289094 6.48 0.505094 6.48H3.72909C3.88109 6.48 4.01709 6.392 4.07309 6.256C4.73709 4.816 6.19309 3.808 7.88109 3.808C10.1931 3.808 12.0731 5.688 12.0731 8C12.0731 10.312 10.1931 12.192 7.88109 12.192C6.19309 12.192 4.73709 11.192 4.07309 9.744C4.00909 9.616 3.88109 9.52 3.72909 9.52H0.505094C0.297094 9.52 0.121094 9.688 0.121094 9.904C0.121094 9.928 0.129094 9.952 0.129094 9.984C1.00909 13.44 4.14509 16 7.88109 16C12.2971 16 15.8811 12.416 15.8811 8C15.8811 3.584 12.2971 0 7.88109 0Z"
        fill={inverted ? "#ffffff" : "#343434"}
      />
    </svg>
  )
}
