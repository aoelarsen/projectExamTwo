import React from "react"
import styled, { css } from "styled-components"

export const baseButtonStyle = css`
justify-self: ${props => {
  if (props.center) return "center"
  if (props.start) return "start"
  return "end"
}};
  display: inline-block;
  margin: 0 0.25rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: var(--border-radius);
  box-shadow: 0px 0px 2px 0px var(--gray);
  background-color: ${props =>
    props.secondary ? "var(--white)" : "var(--bluegreen)"};
  color: ${props => (props.secondary ? "var(--bluegreen)" : "var(--white)")};
  font-size: 100%;
  font-family: inherit;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: ${props =>
      props.secondary ? "var(--white)" : "var(--light-bluegreen)"};
    box-shadow: inset 0px 0px 0.2em 0px var(--bluegreen);
    /* box-shadow: ${props =>
      props.secondary ? "inset 0px 0px 0.4em 0px var(--bluegreen)" : "none"}; */
  }
  &:focus {
    outline: 1px solid
      ${props => (props.secondary ? "var(--bluegreen)" : "var(--white)")};
    outline-offset: -4px;
  }
  &:active {
    background: var(--bluegreen);
    box-shadow: none;
  }

  ${props => {
    return (
      props.disabled &&
      css`
        color: var(--gray);
        background: var(--light-gray);
        box-shadow: none;
        cursor: not-allowed;
        :hover {
          color: var(--gray);
          background: var(--light-gray);
          box-shadow: none;
        }
      `
    )
  }}

  ${props => {
    return (
      props.close &&
      css`
        margin: 1.5rem;
        padding: 0.5rem;
        border-radius: 50%;
      `
    )
  }}

  `

const StyledButton = styled.button`
  ${baseButtonStyle}
`

export const Submit = styled.input.attrs({
  type: "submit",
  value: "Send Inn",
})`
  ${baseButtonStyle}
  width: 100%;

  @media screen and (min-width: 650px) {
    width: 50%;
    justify-self: center;
  }

  @media screen and (min-width: 900px) {
    width: auto;
    justify-self: end;
  }
`

const Button = ({ secondary, disabled, close, children, ...props }) => {
  return (
    <StyledButton
      secondary={secondary}
      disabled={disabled}
      close={close}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

export default Button
