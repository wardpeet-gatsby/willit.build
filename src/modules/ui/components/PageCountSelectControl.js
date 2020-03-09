import React from "react"
import { navigate } from "gatsby"

import { PageCount, pageCountIds } from "@modules/data/constants"
import SelectControl, { SelectControlOption } from "./SelectControl"
import formatPath from "@modules/data/utils/formatPath"

const PageCountSelectControl = ({
  siteType,
  initialPageCount,
  contentSource,
  footer,
  pathPrefix,
}) => {
  const [currentPageCount, setCurrentPageCount] = React.useState(
    initialPageCount
  )

  const { displayedAs } = PageCount[currentPageCount]

  return (
    <SelectControl
      label="Pages"
      value={currentPageCount}
      displayedValue={displayedAs}
      onChange={(ev, newPath) => {
        setCurrentPageCount(ev.target.value)

        navigate(newPath)
      }}
      footer={footer}
    >
      {pageCountIds.map(countNum => (
        <SelectControlOption
          key={countNum}
          value={countNum}
          path={formatPath(pathPrefix, siteType, contentSource, countNum)}
        >
          {PageCount[countNum].displayedAs}
        </SelectControlOption>
      ))}
    </SelectControl>
  )
}

export default PageCountSelectControl
