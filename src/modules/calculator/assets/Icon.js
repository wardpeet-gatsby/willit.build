import React from "react"

function Icon() {
  return (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path
        fill="url(#calculator-icon-fill)"
        fillRule="evenodd"
        d="M3.75 4.342c0-.327.265-.592.592-.592h6.908v7.5h-7.5V4.342zm0 15.316V12.75h7.5v7.5H4.342a.592.592 0 01-.592-.592zM2.25 4.342v15.316c0 1.155.937 2.092 2.092 2.092h15.316a2.092 2.092 0 002.092-2.092V4.342a2.092 2.092 0 00-2.092-2.092H4.342A2.092 2.092 0 002.25 4.342zm18 15.316V12.75h-7.5v7.5h6.908a.592.592 0 00.592-.592zm-7.5-8.408h7.5V4.342a.592.592 0 00-.592-.592H12.75v7.5zM8.25 6a.75.75 0 00-1.5 0v.75H6a.75.75 0 000 1.5h.75V9a.75.75 0 001.5 0v-.75H9a.75.75 0 000-1.5h-.75V6zm1.28 9.53a.75.75 0 10-1.06-1.06l-.97.97-.97-.97a.75.75 0 00-1.06 1.06l.97.97-.97.97a.75.75 0 101.06 1.06l.97-.97.97.97a.75.75 0 001.06-1.06l-.97-.97.97-.97zM15 6.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3zM14.25 15a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
        clipRule="evenodd"
      ></path>
      <defs>
        <linearGradient
          id="calculator-icon-fill"
          x1="12"
          x2="12"
          y1="2.25"
          y2="21.75"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E34200"></stop>
          <stop offset="1" stopOpacity="0.9"></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Icon
