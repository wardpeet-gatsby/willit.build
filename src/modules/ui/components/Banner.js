import React from "react"
import { keyframes } from "@emotion/core"
import { MdClose } from "react-icons/md"
import { BaseAnchor } from "gatsby-interface"

const fadeInAnimation = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
})

const BANNER_HEIGHT = 40
const LOCALSTORAGE_PREFIX = `will-it-build:banner`
const ANIMATION_DURATION = 300

const wrapperStyles = theme => ({
  minHeight: BANNER_HEIGHT,
  background: theme.colors.purple[90],
  color: theme.colors.whiteFade[80],
  paddingTop: theme.space[2],
  paddingBottom: theme.space[2],
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  fontSize: theme.fontSizes[1],
  animation: `${fadeInAnimation} ${ANIMATION_DURATION}ms  both`,
  transformOrigin: `top center`,
})

const edgeColumnStyles = () => ({
  width: BANNER_HEIGHT,
  display: `grid`,
  placeItems: `center`,
})

const textStyles = () => ({
  flex: 1,
  textAlign: `center`,
  animation: `${fadeInAnimation} ${ANIMATION_DURATION}ms ${ANIMATION_DURATION}ms both`,
})
const linkStyles = () => ({
  color: `inherit`,
})

const closeButtonStyles = theme => ({
  display: `flex`,
  placeContent: `center`,
  width: BANNER_HEIGHT,
  height: `100%`,
  border: `none`,
  background: `transparent`,
  color: `inherit`,
  fontSize: theme.fontSizes[4],
  padding: 0,
})

const availableBanners = {
  "build-reports-webinar": {
    contents: (
      // `translateY` added to ensure vertical optical alignment.
      // The emoji pushes the rest of the text down and it doesn't appear
      // centered within the banner.
      <p css={theme => ({ lineHeight: theme.lineHeights.solid })}>
        <span
          role="img"
          aria-label="loudspeaker"
          css={{ verticalAlign: `middle` }}
        >
          📣
        </span>{" "}
        <BaseAnchor href="/" css={linkStyles}>
          Learn more
        </BaseAnchor>{" "}
        about Gatsby’s new build service!
      </p>
    ),
  },
}

const Banner = ({ id }) => {
  const { contents } = availableBanners[id]

  const [isBannerVisible, hideBanner] = useBannerStatus(id)

  if (!isBannerVisible) {
    return null
  }

  return (
    <div css={wrapperStyles}>
      <div css={edgeColumnStyles} />
      <div css={textStyles}>{contents}</div>
      <div css={edgeColumnStyles}>
        <button
          css={closeButtonStyles}
          aria-label="Dismiss banner"
          onClick={hideBanner}
        >
          <MdClose />
        </button>
      </div>
    </div>
  )
}

const useBannerStatus = id => {
  const [isBannerVisible, setIsBannerVisible] = React.useState(false)

  const localStorageKey = `${LOCALSTORAGE_PREFIX}-${id}-dismissed`

  React.useEffect(() => {
    const hasPreviouslyDismissed = window.localStorage.getItem(localStorageKey)

    if (!hasPreviouslyDismissed) {
      setIsBannerVisible(true)
    }
  }, [])

  const hideBanner = React.useCallback(() => {
    setIsBannerVisible(false)
    window.localStorage.setItem(localStorageKey, true)
  }, [setIsBannerVisible])

  return [isBannerVisible, hideBanner]
}

export default Banner
