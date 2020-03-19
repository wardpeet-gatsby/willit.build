import React from "react"
import { navigate } from "gatsby"

import { PageCount, pageCountIds, BuildType } from "@modules/data/constants"
import SelectControl, { SelectControlOption } from "./SelectControl"
import formatPath from "@modules/data/utils/formatPath"

const PageCountSelectControl = ({
  siteType,
  initialPageCount,
  contentSource,
  buildType,
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
      id="page-count-control"
      value={currentPageCount}
      displayedValue={displayedAs}
      onChange={(ev, newPath) => {
        setCurrentPageCount(ev.target.value)

        navigate(newPath, {
          state: { refocusId: ev.target.id, disableScrollUpdate: true },
        })
      }}
      footer={footer}
    >
      {pageCountIds.map(countNum => (
        <SelectControlOption
          key={countNum}
          value={countNum}
          path={formatPath({
            prefix: pathPrefix,
            siteType,
            contentSource,
            pageCount: countNum,
            buildType: buildType ? BuildType[buildType].displayedAs : undefined,
          })}
        >
          {PageCount[countNum].displayedAs}
        </SelectControlOption>
      ))}
    </SelectControl>
  )
}

export default PageCountSelectControl
