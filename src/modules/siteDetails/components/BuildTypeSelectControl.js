import React from "react"
import { navigate } from "gatsby"
import SelectControl, {
  SelectControlOption,
} from "@modules/ui/components/SelectControl"
import { BuildType } from "@modules/data/constants"
import formatPath from "@modules/data/utils/formatPath"
import HelpCircle from "@modules/ui/components/HelpCircle"

const BuildTypeSelectControl = ({
  siteType,
  contentSource,
  pageCount,
  initialBuildType,
}) => {
  const [currentBuildType, setCurrentBuildType] = React.useState(
    initialBuildType
  )

  const { displayedAs, description } = BuildType[currentBuildType]

  return (
    <SelectControl
      labelHeadingTag="h3"
      label="Build type"
      id="build-type-control"
      value={currentBuildType}
      displayedValue={displayedAs}
      footer={
        <>
          {description}
          <HelpCircle
            helpInfo="Learn more about our various build types in our Frequently Asked Questions."
            href="/methodology-faq#build-type-differences"
          />
        </>
      }
      onChange={(ev, newPath) => {
        setCurrentBuildType(ev.target.value)
        navigate(newPath, {
          state: { refocusId: ev.target.id, disableScrollUpdate: true },
        })
      }}
    >
      {Object.entries(BuildType).map(([key, { displayedAs }]) => {
        return (
          <SelectControlOption
            key={key}
            value={key}
            path={formatPath({
              prefix: `details`,
              siteType,
              contentSource,
              pageCount,
              buildType: displayedAs,
            })}
          >
            {displayedAs}
          </SelectControlOption>
        )
      })}
    </SelectControl>
  )
}

export default BuildTypeSelectControl
