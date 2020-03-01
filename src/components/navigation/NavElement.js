import styled from "styled-components"

const NavElement = styled.nav`
  width: 100vw;
  height: 100vh;
  display: none;
  grid-template-columns: 1fr;
  justify-items: center;

  &.showMenu {
    display: grid;
    padding: 2rem 0;
  }

  @media screen and (min-width: 600px) {
    padding: 0;
    display: grid;
    width: 100%;
    height: auto;
  }

  @media screen and (min-width: 900px) {
    width: ${props => {
      if (props.width) return props.width
      return "100%"
    }};
  }
`

export default NavElement
