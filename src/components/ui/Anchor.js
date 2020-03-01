import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"

const baseStyle = css`
  text-decoration: none;
  font-style: ${props => {
    if (props.italic) return "italic"
    return "normal"
  }};
  text-align: ${props => {
    if (props.center) return "center"
    if (props.right) return "right"
    return "left"
  }};
  display: ${props => {
    if (props.inline) return "inline"
    return "inline-block"
  }};
  width: ${props => {
    if (props.width) return props.width
    return "100%"
  }};
  color: ${props => {
    if (props.color) return props.color
    return "var(--bluegreen)"
  }};

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  &:focus {
    text-decoration: underline;
  }

  ${props => {
    return (
      props.invert &&
      css`
        color: var(--white);
        font-style: italic;

        &:hover {
          color: var(--light-gray);
        }
      `
    )
  }}

  ${props => {
    return (
      props.height &&
      css`
        height: ${props => props.height};
      `
    )
  }}
`

const StyledLink = styled(Link)`
  ${baseStyle}
`

const StyledAnchor = styled.a`
  ${baseStyle}
`

const Anchor = ({
  link,
  href,
  to,
  width,
  height,
  invert,
  center,
  right,
  color,
  italic,
  inline,
  children,
  ...props
}) => {
  if (link) {
    return (
      <StyledLink
        to={to}
        width={width}
        height={height}
        invert={invert}
        center={center}
        right={right}
        color={color}
        italic={italic}
        inline={inline}
        {...props}
      >
        {children}
      </StyledLink>
    )
  }

  return (
    <StyledAnchor
      href={href}
      width={width}
      height={height}
      invert={invert}
      center={center}
      right={right}
      color={color}
      italic={italic}
      inline={inline}
      {...props}
    >
      {children}
    </StyledAnchor>
  )
}

export default Anchor
