import React from "react"
import useRandomId from "../hooks/use-random-id.hook"

const SelectControl = ({ label, initialValue, onChange, children }) => {
  const randomId = useRandomId("select-control")

  return (
    <div>
      <label htmlFor={`${randomId}`}>{label}</label>
      {/* 
        Generally, triggering things on-change instead of on-blur is
        problematic, but because we're using this as a way to change
        routes, I think it's alright. 
      */}
      {/* eslint-disable-next-line jsx-a11y/no-onchange */}
      <select
        onChange={ev => {
          const selectedOption = ev.target.options[ev.target.selectedIndex]
          const newPath = selectedOption.getAttribute("data-path")

          onChange(ev, newPath)
        }}
        value={initialValue}
      >
        {children}
      </select>
    </div>
  )
}

export const SelectControlOption = ({ id, path, children }) => {
  return (
    <option value={id} data-path={path}>
      {children}
    </option>
  )
}

export default SelectControl
