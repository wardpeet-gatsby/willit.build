import React from "react"
import { HORIZONTAL_PADDING_MOBILE as wrapperPaddingMobile } from "@modules/ui/components/MaxWidthWrapper"

import {
  HeaderTitle,
  HeaderSiteType,
  HeaderLinks,
  BackLink,
} from "./DetailsHeader.parts"

function DetailsHeader({ siteType, contentSource, pageCount }) {
  return (
    <header
      css={theme => ({
        borderTop: `1px solid ${theme.colors.blackFade[10]}`,
        display: `flex`,
        flexDirection: `column`,
        paddingBottom: theme.space[6],
        background: theme.colors.white,
        padding: `${theme.space[6]} ${wrapperPaddingMobile} ${theme.space[6]}`,

        [theme.mediaQueries.desktop]: {
          background: `none`,
          border: 0,
          paddding: 0,
          padding: 0,
        },
      })}
    >
      <BackLink />
      <div
        css={theme => ({
          display: `flex`,
          flexDirection: `column`,
          marginTop: theme.space[5],

          [theme.mediaQueries.desktop]: {
            alignItems: `flex-end`,
            flexDirection: `row`,
            marginTop: theme.space[7],
          },
        })}
      >
        <HeaderTitle contentSource={contentSource} />
        <HeaderSiteType siteType={siteType} />
        <HeaderLinks
          contentSource={contentSource}
          siteType={siteType}
          pageCount={pageCount}
        />
      </div>
    </header>
  )
}

export default DetailsHeader
