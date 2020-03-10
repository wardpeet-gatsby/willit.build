import React from "react"
import SelectControl, {
  SelectControlOption,
} from "@modules/ui/components/SelectControl"
import { OverviewItem } from "./DetailsOverview.parts"

const BuildTypeSelectControl = ({ siteType, contentSource, ...rest }) => {
  /*
    IMPORTANT!
    This component functionally is a fake. It exist only to fill the visual
    Proper component will be created in a separate PR
  */

  return (
    <OverviewItem {...rest}>
      <SelectControl
        label="Build type"
        value={`Subsequent`}
        displayedValue={`Subsequent`}
        footer="Indicates a code or data update"
        onChange={() =>
          alert(`This component, for now,  is just a visual mock`)
        }
      >
        {[`Subsequent`, `Initial`].map(item => (
          <SelectControlOption
            key={item}
            value={item}
            path={`/details/type/${siteType}/source/${contentSource}/page-count/512`}
          >
            {item}
          </SelectControlOption>
        ))}
      </SelectControl>
    </OverviewItem>
  )
}

export default BuildTypeSelectControl
