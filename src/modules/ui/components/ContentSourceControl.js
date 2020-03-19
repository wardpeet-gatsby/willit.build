import React from "react"
import { navigate } from "gatsby"

import {
  ContentSource,
  contentSourceIds,
  BuildType,
} from "@modules/data/constants"
import SelectControl, {
  SelectControlOption,
} from "@modules/ui/components/SelectControl"
import formatPath from "@modules/data/utils/formatPath"

const ContentSourceControl = ({
  siteType,
  pageCount,
  initialContentSource,
  buildType,
}) => {
  const [currentContentSource, setCurrentContentSource] = React.useState(
    initialContentSource
  )

  const { displayedAs, Icon } = ContentSource[currentContentSource]

  return (
    <>
      <SelectControl
        label="Content Source"
        id="content-source-control"
        value={currentContentSource}
        displayedValue={
          <>
            <Icon
              css={theme => ({
                marginRight: theme.space[2],
              })}
            />
            {displayedAs}
          </>
        }
        onChange={(ev, newPath) => {
          setCurrentContentSource(ev.target.value)

          navigate(newPath, {
            state: { refocusId: ev.target.id, disableScrollUpdate: true },
          })
        }}
      >
        {contentSourceIds.map(contentSourceId => {
          return (
            <SelectControlOption
              key={contentSourceId}
              value={contentSourceId}
              path={formatPath({
                prefix: `calculator`,
                siteType,
                contentSource: contentSourceId,
                pageCount,
                buildType: buildType
                  ? BuildType[buildType].displayedAs
                  : undefined,
              })}
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
