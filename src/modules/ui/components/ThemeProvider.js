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
    tones: {
      ...theme.tones,
      // platform tones let us apply custom active colors to CustomLegend toggle buttons
      GATSBY_CLOUD: {
        medium: theme.colors.purple[40],
      },
      NETLIFY: {
        medium: theme.colors.teal[50],
      },
      CIRCLECI: {
        medium: theme.colors.orange[50],
      },
    },
  }

  return <ThemeUiProvider theme={extendedTheme}>{children}</ThemeUiProvider>
}

export function useTheme() {
  return useThemeUI().theme
}
