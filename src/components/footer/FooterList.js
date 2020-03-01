import styled from "styled-components"

const FootList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0;
  line-height: 150%;
`

export const FootListItem = styled.li`
  margin: 0;
  padding: ${props => (props.padding ? props.padding : " 0.5rem")};
  max-width: 30rem;
  display: grid;
  place-items: center start;
  grid-template: auto / 1fr;
  gap: 1rem;
  border-bottom: ${props =>
    props.noBorder ? "none" : "1px dotted var(--light-gray)"};

  @media screen and (min-width: 750px) {
    grid-template: ${props => {
      if (props.template) return props.template
      return "auto / 1fr 1.3fr"
    }};
    place-items: center start;
  }
`

export default FootList
