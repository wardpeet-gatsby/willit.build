import React from "react"
import { navigate } from "gatsby"

import { ContentSource, contentSourceIds } from "@modules/data/constants"
import SelectControl, {
  SelectControlOption,
} from "@modules/ui/components/SelectControl"
import { convertToPathFriendlySlug } from "@utils"

const ContentSourceControl = ({
  siteType,
  pageCount,
  initialContentSource,
}) => {
  const [currentContentSource, setCurrentContentSource] = React.useState(
    initialContentSource
  )

  const { displayedAs, Icon } = ContentSource[currentContentSource]

  return (
    <>
      <SelectControl
        label="Content Source"
        value={currentContentSource}
        displayedValue={
          <>
            <Icon />
            {displayedAs}
          </>
        }
        onChange={(ev, newPath) => {
          setCurrentContentSource(ev.target.value)

          navigate(newPath)
        }}
      >
        {contentSourceIds.map(contentSourceId => {
          return (
            <SelectControlOption
              key={contentSourceId}
              value={contentSourceId}
              path={`/calculator/type/${convertToPathFriendlySlug(
                siteType
              )}/source/${convertToPathFriendlySlug(
                contentSourceId
              )}/page-count/${pageCount}`}
            >
              {ContentSource[contentSourceId].displayedAs}
            </SelectControlOption>
          )
        })}
      </SelectControl>
    </>
  )
}

export default ContentSourceControl
