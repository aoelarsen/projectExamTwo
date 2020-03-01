import styled from "styled-components"

const MainNavWrap = styled.div`
  grid-area: 1 / 1;
  align-self: start;
  position: sticky;
  top: 0px;
  z-index: 50;
  width: 100%;
  display: grid;
  grid-template: auto max-content / 1fr;
  background-color: var(--white);

  @media screen and (min-width: 600px) {
    grid-template: 1fr / 1fr 2fr;
    justify-items: center;

    box-shadow: 0 -5px 10px var(--bluegreen);
  }

  @media screen and (min-width: 900px) {
    grid-template: auto max-content / 1fr;
    align-self: start;
    justify-self: center;
    justify-items: start;
    margin: 0.5em;
    padding: 0.3rem;
    width: 90%;
    max-width: 300px;
    grid-area: 1 / 1 / span 2 / 1;
    top: 5%;
    border: 1px solid var(--bluegreen);
    border-radius: var(--border-radius);
    box-shadow: none;
  }

  @media screen and (min-width: 1280px) {
    top: 3rem;
  }
`

export default MainNavWrap
