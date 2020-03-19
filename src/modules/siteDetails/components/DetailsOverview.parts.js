import React from "react"

export function Border(props) {
  return (
    <div
      aria-hidden="true"
      css={theme => ({
        display: ``,

        [theme.mediaQueries.desktop]: {
          width: `1px`,
          background: theme.colors.blackFade[10],
        },
      })}
      {...props}
    />
  )
}

export function OverviewItem({ children, ...rest }) {
  return (
    <div
      css={theme => ({
        paddingTop: theme.space[7],
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `flex-end`,
      })}
      {...rest}
    >
      {children}
    </div>
  )
}

export const contextOverviewItemCss = ({
  theme,
  basis = `auto`,
  type = `static`,
}) => ({
  flexBasis: basis,
  justifyContent: type === `control` ? `flex-start` : undefined,
  paddingTop: type === `control` ? 0 : undefined,

  [theme.mediaQueries.desktop]: {
    flexBasis: `auto`,
    justifyContent: `flex-end`,
    paddingTop: theme.space[7],
  },
})

export function DetailsPiece({ title, value, footer, children }) {
  return (
    <div
      css={{
        display: `flex`,
        flexDirection: `column`,
      }}
    >
      <DetailsTitle>{title}</DetailsTitle>
      <DetailsValue>{value}</DetailsValue>
      {children && children}
      {footer && <p>{footer}</p>}
    </div>
  )
}

export function DetailsTitle({ children }) {
  return (
    <h3
      css={theme => ({
        fontSize: theme.fontSizes[0],
        fontWeight: theme.fontWeights.body,
        color: theme.colors.grey[50],
        textTransform: `uppercase`,
        letterSpacing: theme.letterSpacings.tracked,
      })}
    >
      {children}
    </h3>
  )
}

export function DetailsValue({ children }) {
  return (
    <span
      css={theme => ({
        fontSize: theme.fontSizes[5],
        fontWeight: theme.fontWeights.heading,
        color: theme.colors.blackFade[80],
      })}
    >
      {children}
    </span>
  )
}

export function DetailsFooter({ children }) {
  return <p>{children}</p>
}
