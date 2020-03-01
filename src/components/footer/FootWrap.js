import styled from "styled-components"

const FootWrap = styled.footer`
  grid-area: ${props => {
    if (props.area) return props.area
    return "auto / 1 / auto / -1"
  }};
  width: 100%;
  min-height: 65vh;
  padding: 3rem 0.5rem;
  background: var(--black);
  color: var(--white);

  @media screen and (min-width: 900px) {
    padding: 8rem 0;
  }
`

export const FootContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 5rem 0.5rem;
  max-width: 1600px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 5rem 0;
  justify-content: start;
  align-items: start;

  @media screen and (min-width: 750px) {
    grid-template-columns: 1fr 1fr;
    gap: 5rem 1rem;
  }

  @media screen and (min-width: 1080px) {
    grid-template-columns: 1.2fr 1.2fr 0.7fr;
    gap: 5rem 2.5rem;
  }
`

export const CopyrightBox = styled.div`
  grid-area: auto / 1 / auto / -1;
  display: grid;
  justify-items: center;
  align-self: end;
  gap: 2rem;

  @media screen and (min-width: 900px) {
    grid-area: 2 / 2;
  }
`

export default FootWrap
