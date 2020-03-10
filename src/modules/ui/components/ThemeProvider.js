import React from "react"
import { ThemeProvider as ThemeUiProvider, useThemeUI } from "theme-ui"
import { getTheme } from "gatsby-interface"

export default function ThemeProvider({ children }) {
  const theme = React.useMemo(() => getTheme(), [])
  const extendedTheme = {
    ...theme,
    fonts: {
      ...theme.fonts,
      body: `'Inter', ${theme.fonts.system}`,
    },
    colors: {
      ...theme.colors,
      services: {
        gatsby: theme.colors.purple[40],
        netlify: theme.colors.teal[50],
        circleCi: theme.colors.orange[50],
      },
      platforms: {
        GATSBY_CLOUD: theme.colors.purple[40],
        NETLIFY: theme.colors.teal[50],
        CIRCLECI: theme.colors.orange[50],
      },
    },
  }

  return <ThemeUiProvider theme={extendedTheme}>{children}</ThemeUiProvider>
}

export function useTheme() {
  return useThemeUI().theme
}
