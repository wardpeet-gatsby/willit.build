import React from "react"
import { navigate } from "gatsby"

import SelectControl, {
  SelectControlOption,
} from "@modules/ui/components/SelectControl"
import { PageCount, ContentSource } from "@modules/data/constants"

const getEntityIds = entityMap =>
  Object.values(entityMap).map(entity => entity.id)

const allPageCounts = getEntityIds(PageCount)
const allContentSources = getEntityIds(ContentSource)

const ContentSourceSelectControl = ({
  siteType,
  contentSource,
  pageCount,
  handleChange,
}) => {
  return (
    <SelectControl
      label="Source"
      initialValue={contentSource}
      onChange={handleChange}
    >
      {allContentSources.map(source => (
        <SelectControlOption
          key={source}
          value={source}
          path={`/details/type/${siteType}/source/contentful/page-count/${pageCount}`}
        >
          Contentful
        </SelectControlOption>
      ))}
    </SelectControl>
  )
}

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
        {allPageCounts.map(pageCount => (
          <SelectControlOption
            key={pageCount}
            value={pageCount}
            path={`/details/type/${siteType}/source/${contentSource}/page-count/${pageCount}`}
          >
            {pageCount}
          </SelectControlOption>
        ))}
      </SelectControl>

      <ContentSourceSelectControl
        siteType={siteType}
        contentSource={contentSource}
        pageCount={pageCount}
        handleChange={handleChange}
      />

      <h1>{pageCount}</h1>
    </>
  )
}

export default SiteDetails
