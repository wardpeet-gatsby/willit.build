import React from "react"
import { navigate } from "gatsby"

import { PageCount, pageCountIds } from "@modules/data/constants"
import SelectControl, {
  SelectControlOption,
} from "@modules/ui/components/SelectControl"

import transformName from "@modules/data/utils/transformName"

const PageCountSelectControl = ({
  siteType,
  initialPageCount,
  contentSource,
}) => {
  const [currentPageCount, setCurrentPageCount] = React.useState(
    initialPageCount
  )

  const { displayedAs } = PageCount[currentPageCount]

  // The GraphQL API returns names in UPPER_SNAKE_CASE.
  // We want to transform this to lower-dash-cash, to match pathnames.
  const transformedSource = transformName(contentSource)
  const transformedType = transformName(siteType)

  return (
    <SelectControl
      label="Pages"
      value={currentPageCount}
      displayedValue={displayedAs}
      onChange={(ev, newPath) => {
        setCurrentPageCount(ev.target.value)

        navigate(newPath)
      }}
      footer="1 image per page"
    >
      {pageCountIds.map(countNum => (
        <SelectControlOption
          key={countNum}
          value={countNum}
          path={`/details/type/${transformedType}/source/${transformedSource}/page-count/${countNum}`}
        >
          {PageCount[countNum].displayedAs}
        </SelectControlOption>
      ))}
    </SelectControl>
  )
}

export default PageCountSelectControl
