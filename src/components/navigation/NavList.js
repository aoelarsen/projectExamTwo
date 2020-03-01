import styled from "styled-components"

const NavList = styled.ul`
  padding: 1rem;
  margin: 0;
  list-style: none;
  width: 100%;
  height: 55vh;
  display: grid;
  grid-template: auto / 1fr;
  gap: 0.5rem;

  & li {
    padding: 0.2rem 0;
  }

  @media screen and (min-width: 600px) {
    grid-template: 1fr / repeat(5, 1fr);
    padding: ${props => {
      if (props.padding) return props.padding
      return "0 0.5rem"
    }};
    height: max-content;
  }

  @media screen and (min-width: 900px) {
    grid-template: auto / 1fr;
    margin: ${props => {
      if (props.margin) return props.margin
      return "0"
    }};
    width: ${props => {
      if (props.width) return props.width
      return "100%"
    }};
  }
`

export default NavList
