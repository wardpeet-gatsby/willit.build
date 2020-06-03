import React from "react"

import App from "@modules/ui/components/App"

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>
}

export const onRouteUpdate = loc => {
  const { state } = loc.location

  if (state && state.refocusId) {
    const elem = document.getElementById(state.refocusId)

    if (elem) {
      elem.focus()
      if (typeof state.scrollOffset === "number") {
        window.scrollTo(0, state.scrollOffset)
      }
    }
  }
}

export const shouldUpdateScroll = ({ routerProps }) => {
  if (!routerProps.location.state) {
    return
  }

  const { disableScrollUpdate } = routerProps.location.state

  return !disableScrollUpdate
}
