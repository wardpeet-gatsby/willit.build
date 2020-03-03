import React from "react"
import { navigate } from "gatsby"

import { PageCount } from "@modules/data/constants"
import SelectControl, {
  SelectControlOption,
} from "@modules/ui/components/SelectControl"

const allPageCounts = Object.values(PageCount).map(pageCount => pageCount.id)

const PageCountSelectControl = ({
  siteType,
  initialPageCount,
  contentSource,
}) => {
  const [currentPageCount, setCurrentPageCount] = React.useState(
    initialPageCount
  )

  const { displayedAs } = PageCount[currentPageCount]

  return (
    <>
      <SelectControl
        label="Pages"
        value={currentPageCount}
        displayedValue={displayedAs}
        onChange={(ev, newPath) => {
          setCurrentPageCount(ev.target.value)

          navigate(newPath)
        }}
        footer="~20k images"
      >
        {allPageCounts.map(countNum => (
          <SelectControlOption
            key={countNum}
            value={countNum}
            path={`/details/type/${siteType}/source/${contentSource}/page-count/${countNum}`}
          >
            {PageCount[countNum].displayedAs}
          </SelectControlOption>
        ))}
      </SelectControl>
    </>
  )
}

export default PageCountSelectControl
