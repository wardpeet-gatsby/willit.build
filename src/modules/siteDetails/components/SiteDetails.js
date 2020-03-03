import React from "react"

import PageCountSelectControl from "./PageCountSelectControl"
import MaxWidthWrapper from "@modules/ui/components/MaxWidthWrapper"

const SiteDetails = ({ pageContext }) => {
  const { siteType, contentSource, pageCount } = pageContext

  return (
    <MaxWidthWrapper>
      <h1>Willit.build Site Details page</h1>

      <br />
      <br />

      {/* TEMP: Put me in the right place once this page is built! */}
      <PageCountSelectControl
        siteType={siteType}
        initialPageCount={pageCount}
        contentSource={contentSource}
      />
    </MaxWidthWrapper>
  )
}

export default SiteDetails
