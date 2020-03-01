import styled from "styled-components"

const LogoBox = styled.div`
  display: grid;
  grid-template: 1fr / 2fr 1fr;
  padding: 0.5rem;
  width: 100%;
  align-self: center;
  justify-self: center;
  justify-items: center;
  align-items: center;
  box-shadow: 0 -5px 10px var(--bluegreen);

  & img {
    width: 75%;
    max-height: 50px;
  }

  @media screen and (min-width: 600px) {
    grid-template: 1fr /1fr;
    box-shadow: none;
  }

  @media screen and (min-width: 900px) {
    display: flex;
    width: 100%;
    padding: 0.9rem;
    box-shadow: none;

    & img {
      width: 100%;
      max-height: auto;
    }
  }

  @media screen and (min-width: 1200px) {
    padding: 1.2rem;
  }
`

export default LogoBox
