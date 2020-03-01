import styled, { css } from "styled-components"

const LabelStyle = css`
  width: 100%;
  font-size: 1rem;

  @media screen and (min-width: 600px) {
    font-size: 0.5rem;
  }

  @media screen and (min-width: 900px) {
    font-size: 0.7rem;
  }

  @media screen and (min-width: 1285px) {
    font-size: 0.8rem;
  }

  @media screen and (min-width: 1540px) {
    font-size: 1rem;
  }
`

export const NavLinkLabel = styled.span`
  ${LabelStyle}
  display: inline-block;
  justify-self: start;

  @media screen and (min-width: 600px) {
    text-align: center;
  }

  @media screen and (min-width: 900px) {
    text-align: start;
    text-align: left;
    justify-self: start;
    display: inline-block;
  }
`

export const LinkLabelBox = styled.div`
  width: 100%;
  max-width: 100%;
  display: grid;
  grid-template-columns: 1.2fr 3fr;
  gap: 0.5rem;
  place-items: center;

  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 900px) {
    grid-template-columns: ${props => {
      if (props.columns) return props.columns
      return "1.1fr 3fr"
    }};
    place-items: center start;
  }
`
