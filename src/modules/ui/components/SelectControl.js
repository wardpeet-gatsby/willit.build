import React from "react"

import useRandomId from "../hooks/use-random-id.hook"

const SelectControl = ({ label, initialValue, children }) => {
  const randomId = useRandomId("select-control")

  return (
    <div>
      <label htmlFor={`${randomId}`}>{label}</label>
      <select value={initialValue}>{children}</select>
    </div>
  )
}

export const SelectControlOption = ({ id, url, children }) => {
  return (
    <option value={id} data-url={url}>
      {children}
    </option>
  )
}

export default SelectControl
