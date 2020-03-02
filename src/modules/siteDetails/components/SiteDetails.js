import React from "react"
import { navigate } from "gatsby"

import SelectControl, {
  SelectControlOption,
} from "@modules/ui/components/SelectControl"

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
        <SelectControlOption
          id="512"
          path={`/details/type/${siteType}/source/${contentSource}/page-count/512`}
        >
          512
        </SelectControlOption>
        <SelectControlOption
          id="1024"
          path={`/details/type/${siteType}/source/${contentSource}/page-count/1024`}
        >
          1024
        </SelectControlOption>
        <SelectControlOption
          id="2048"
          path={`/details/type/${siteType}/source/${contentSource}/page-count/2048`}
        >
          2048
        </SelectControlOption>
      </SelectControl>

      <SelectControl
        label="Source"
        initialValue={contentSource}
        onChange={handleChange}
      >
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
