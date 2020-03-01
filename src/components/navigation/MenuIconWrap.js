import styled from "styled-components"

const MenuIconWrap = styled.div`
  display: grid;
  gap: 0.2rem;
  justify-items: center;
  align-items: center;
  cursor: pointer;
  /* padding: 1rem; */
  align-self: center;
  justify-self: center;
  z-index: 100;

  @media screen and (min-width: 600px) {
    display: none;
  }
`

export const MenuIconText = styled.span`
  display: block;
  padding: 0 0.5rem;
  font-size: 0.7rem;
`

export default MenuIconWrap
