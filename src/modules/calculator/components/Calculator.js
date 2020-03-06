import React from "react"

import ContentSourceControl from "./ContentSourceControl"

const wrapperCss = () => ({
  display: `grid`,
  gridTemplateAreas: `
    "controls fastest fastest fastest"
    "controls initial initial initial"
    "controls code    code    code"
  `,
})

const Calculator = ({ contentSource, siteType, pageCount }) => {
  return (
    <article css={wrapperCss}>
      <div css={{ gridArea: `controls` }}>
        <ContentSourceControl
          siteType={siteType}
          pageCount={pageCount}
          initialContentSource={contentSource}
        />
      </div>
    </article>
  )
}

export default Calculator
