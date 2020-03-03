import React from "react"
import { navigate } from "gatsby"

import SelectControl, {
  SelectControlOption,
} from "@modules/ui/components/SelectControl"
import { PAGE_COUNTS } from "../../../constants"

const SiteDetails = ({ pageContext }) => {
  const { siteType, contentSource, pageCount } = pageContext

  const handleChange = (ev, newPath) => {
    navigate(newPath)
  }

  return (
    <>
      <h1>Willit.build Site Details page</h1>
      <SelectControl
        label="Pages"
        initialValue={pageCount}
        onChange={handleChange}
      >
        {PAGE_COUNTS.map(pageCount => (
          <SelectControlOption
            key={pageCount}
            id={pageCount}
            path={`/details/type/${siteType}/source/${contentSource}/page-count/${pageCount}`}
          >
            {pageCount}
          </SelectControlOption>
        ))}
      </SelectControl>

      <SelectControl
        label="Source"
        initialValue={contentSource}
        onChange={handleChange}
      >
        {/* TODO: map over an imported array */}
        <SelectControlOption
          id="contentful"
          path={`/details/type/${siteType}/source/contentful/page-count/${pageCount}`}
        >
          Contentful
        </SelectControlOption>
        <SelectControlOption
          id="wordpress"
          path={`/details/type/${siteType}/source/wordpress/page-count/${pageCount}`}
        >
          Wordpress
        </SelectControlOption>
        <SelectControlOption
          id="drupal"
          path={`/details/type/${siteType}/source/drupal/page-count/${pageCount}`}
        >
          Drupal
        </SelectControlOption>
      </SelectControl>

      <h1>{pageCount}</h1>
    </>
  )
}

export default SiteDetails
